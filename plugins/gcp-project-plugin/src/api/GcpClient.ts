/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import { google } from 'googleapis';

// const serviceUsage = google.serviceusage('v1');

import { GcpApi } from './GcpApi';
import { Operation, Project } from './types';
import { OAuthApi } from '@backstage/core-plugin-api';
import packageinfo from '../../package.json';

const BASE_URL =
  'https://content-cloudresourcemanager.googleapis.com/v1/projects';

/** @public */
export class GcpClient implements GcpApi {
  constructor(private readonly googleAuthApi: OAuthApi) {}

  async listProjects(): Promise<Project[]> {
    const response = await fetch(BASE_URL, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${await this.getToken()}`,
        'X-Goog-Api-Client': `backstage/gcpprojects/${packageinfo.version}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `List request failed to ${BASE_URL} with ${response.status} ${response.statusText}`,
      );
    }

    const { projects } = await response.json();
    return projects;
  }

  async getProject(projectId: string): Promise<Project> {
    const url = `${BASE_URL}/${projectId}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${await this.getToken()}`,
        'X-Goog-Api-Client': `backstage/gcpprojects/${packageinfo.version}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Get request failed to ${url} with ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  }

  async createProject(options: {
    projectId: string;
    projectName: string;
  }): Promise<Operation> {
    const newProject: Project = {
      name: options.projectName,
      projectId: options.projectId,
    };

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${await this.getToken()}`,
        'X-Goog-Api-Client': `backstage/gcpprojects/${packageinfo.version}`,
      },
      body: JSON.stringify(newProject),
    });

    console.log('Sending create project request with body:', response.body);

    if (!response.ok) {
      let errorMessage = `Create request failed to ${BASE_URL} with ${response.status}`;
  
      try {
        const errorBody = await response.json();
        if (response.status === 409 && errorBody?.error?.status === 'ALREADY_EXISTS') {
          errorMessage = 'Project ID already exists';
        } else if (errorBody?.error?.message) {
          errorMessage = errorBody.error.message;
        }
      } catch (e) {
        // fallback if error response is not JSON
      }
  
      throw new Error(errorMessage);
    }

    return await response.json();
  }

  async getToken(): Promise<string> {
    // NOTE(freben): There's a .read-only variant of this scope that we could
    // use for readonly operations, but that means we would ask the user for a
    // second auth during creation and I decided to keep the wider scope for
    // all ops for now
    return this.googleAuthApi.getAccessToken(
      'https://www.googleapis.com/auth/cloud-platform',
    );
  }

  async waitForOperation(operationName: string): Promise<void> {
    const url = `https://cloudresourcemanager.googleapis.com/v1/${operationName}`;
  
    while (true) {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${await this.getToken()}`,
          'X-Goog-Api-Client': `backstage/gcpprojects/${packageinfo.version}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(
          `Polling operation failed at ${url} with ${response.status} ${response.statusText}`,
        );
      }
  
      const operation = await response.json();
  
      if (operation.done) {
        if (operation.error) {
          throw new Error(`GCP Operation failed: ${operation.error.message}`);
        }
        break;
      }
  
      // Poll every few seconds
      await new Promise(res => setTimeout(res, 3000));
    }
  }

  async setBillingAccount(options: { projectId: string, billingAccountId: string }): Promise<void> {

    await this.enableBillingApi(options.projectId);

    console.log('billing api enabled and starting to wait for 80 sec')
    // Wait for API enablement to propagate
    await new Promise(resolve => setTimeout(resolve, 60000));

    console.log('Waited for 80 seconds to activate')

    const url = `https://cloudbilling.googleapis.com/v1/projects/${options.projectId}/billingInfo`;
    const body = {
      billingAccountName: `billingAccounts/${options.billingAccountId}`
      // billingEnabled: true,
    };
  
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await this.getToken()}`,
        'X-Goog-Api-Client': `backstage/gcpprojects/${packageinfo.version}`,
      },
      body: JSON.stringify(body),
    });
  
    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      let errorMessage = `Failed to set billing account with status ${response.status}`;
      if (errorBody?.error?.message) {
        errorMessage = errorBody.error.message;
      }
      throw new Error(errorMessage);
    }
  }
  
  async enableBillingApi(projectId: string): Promise<void> {
    const url = `https://serviceusage.googleapis.com/v1/projects/${projectId}/services/cloudbilling.googleapis.com:enable`;
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await this.getToken()}`,
        'Content-Type': 'application/json',
        'X-Goog-Api-Client': `backstage/gcpprojects/${packageinfo.version}`,
      },
    });
    
    console.log("billing api enabled");

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      let errorMessage = `Failed to enable Cloud Billing API with status ${response.status}`;
      if (errorBody?.error?.message) {
        errorMessage = errorBody.error.message;
      }
      throw new Error(errorMessage);
    }
  }
  
  
  
  
}

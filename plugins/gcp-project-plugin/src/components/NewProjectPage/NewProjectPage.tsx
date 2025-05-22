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

import Button from '@material-ui/core/Button';
import { useApi } from '@backstage/core-plugin-api';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  Content,
  ContentHeader,
  ErrorPanel,

  Header,
  HeaderLabel,
  InfoCard,
  Page,
  SimpleStepper,
  SimpleStepperStep,
  StructuredMetadataTable,
  SupportButton,
  WarningPanel
} from '@backstage/core-components';
import { Link as RouterLink } from 'react-router-dom';
import { gcpApiRef } from '../../api';
import { useRouteRef } from '@backstage/core-plugin-api';
import { rootRouteRef } from '../../routes';
import { useAsync } from '@react-hookz/web';
import { useEffect } from 'react'; 

export const Project = () => {
  const [projectName, setProjectName] = useState('');
  const [projectId, setProjectId] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [billingStatus, setBillingStatus] = useState('');
  const [ , setCustomError] = useState<string | null>(null);
  const [projectStatus, setProjectStatus] = useState('');
  const [polling, setPolling] = useState(false);

  const api=useApi(gcpApiRef);

  const [{ status, result, error }, { execute }] = useAsync(() =>
      api.createProject({projectId,projectName}),
  );
  const metadata = {
    ProjectName: projectName,
    ProjectId: projectId,
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    async function assignBilling() {
      console.log('Please wait: Linking the project to billing account')
      await api.setBillingAccount({ projectId, billingAccountId: '014578-2C2708-DF0259' });
      setBillingStatus('Billing account linked successfully.');
    }
  
    if (polling && projectId) {
      interval = setInterval(async () => {
        try {
          const project = await api.getProject(projectId); // use your existing getProject method
          const lifecycleStatus = project.lifecycleState || ''; // depends on what field GCP returns
          console.log('Polling status:', status);
          setProjectStatus(lifecycleStatus);
  
          if (lifecycleStatus === 'ACTIVE') {
            clearInterval(interval);
            setPolling(false);

            await assignBilling();
          }
        } catch (err) {
          console.error('Polling failed:', err);
          clearInterval(interval);
          setPolling(false);
        }
      }, 5000); // poll every 5 seconds
    }
  
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [polling, projectId]);
  

  // async function handleClick() {
  //   console.log({projectName,projectId})
    
  //   await execute();
  // }

  async function handleClick() {
    setCustomError(null);
    setProjectStatus('');
    try {
      await execute();
      setPolling(true); // Start polling after successful creation
    } catch (err: any) {
      if (err.message.includes('Project ID') && err.message.includes('already')) {
        setCustomError(`Project ID '${projectId}' is already in use. Please choose another.`);
      } else {
        console.error('Unexpected error creating project:', err);
        setCustomError('Failed to create project. See console for details.');
      }
    }
  }
  console.log(status, result, error)

  return (
    <Content>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InfoCard title="Create new GCP Project">
            <SimpleStepper>
              <SimpleStepperStep title="Project Name">
                <TextField
                  variant="outlined"
                  name="projectName"
                  label="Project Name"
                  helperText="The name of the new project."
                  inputProps={{ 'aria-label': 'Project Name' }}
                  onChange={e => setProjectName(e.target.value)}
                  value={projectName}
                  fullWidth
                />
              </SimpleStepperStep>
              <SimpleStepperStep title="Project ID">
                <TextField
                  variant="outlined"
                  name="projectId"
                  label="projectId"
                  onChange={e => setProjectId(e.target.value)}
                  value={projectId}
                  fullWidth
                />
              </SimpleStepperStep>

              <SimpleStepperStep
                title="Review"
                actions={{
                  nextText: 'Confirm',
                  onNext: () => setDisabled(false),
                }}
              >
                <StructuredMetadataTable metadata={metadata} />
              </SimpleStepperStep>
            </SimpleStepper>
            <Grid container spacing={2} style={{ marginTop: 16 }}>
              <Grid item>
                <Button
                  component={RouterLink}
                  variant="text"
                  data-testid="cancel-button"
                  color="primary"
                  to="/gcp-projects"
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={disabled || status === 'loading'}
                  onClick={handleClick}
                >
                  Create
                </Button>
              </Grid>
            </Grid>

            {status === 'loading' && <LinearProgress style={{ marginTop: 20 }} />}

            {/* {customError && (
              <ErrorPanel title="Error Creating Project" error={error}>
                {customError}
              </ErrorPanel>
            )} */}

            {error && (
              <ErrorPanel title="Failed to create project" error={error}>
                {error.toString()}
              </ErrorPanel>
            )}

            {status === 'success' && result && (
              <WarningPanel severity="info" title="Project Creation Started">
                Project <strong>{projectId}</strong> creation initiated successfully. <br />
                {polling && <div>Checking project status...</div>}
              </WarningPanel>
            )}

            {projectStatus && (
              <WarningPanel severity="info" title="Project Status">
                Current GCP project status: <strong>{status}</strong>
              </WarningPanel>
            )}

            {billingStatus && (
              <WarningPanel severity={billingStatus.includes('Failed') ? 'error' : 'info'} title="Billing Status">
                {billingStatus}
              </WarningPanel>
            )}


            {/* {status === 'success' && result && (
              <WarningPanel severity="info" title="Project Created">
                Project <strong>{projectId}</strong> created successfully!
              </WarningPanel>
            )} */}
            {/* <Button
              component={RouterLink}
              variant="text"
              data-testid="cancel-button"
              color="primary"
              to="/gcp-projects"
            >
              Cancel
            </Button> */}
            {/* <Button
              component={"button"}
              variant="contained"
              color="primary"
              disabled={disabled || status === 'loading'}
              onClick={handleClick}
              
            >
              Create
            </Button> */}
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  );
};

const labels = (
  <>
    <HeaderLabel label="Owner" value="Tensure" />
    <HeaderLabel label="Lifecycle" value="Prod" />
  </>
);

export const NewProjectPage = () => {
  const docsRootLink = useRouteRef(rootRouteRef)();
  return (
    <Page themeId="tool">
      <Header title="New GCP Project" type="GCP" typeLink={docsRootLink}>
        {labels}
      </Header>
      <Content>
        <ContentHeader title="">
          <SupportButton>
            This plugin allows you to view and interact with your gcp projects.
          </SupportButton>
        </ContentHeader>
        <Project />
      </Content>
    </Page>
  );
};

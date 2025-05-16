import { GcpApi } from './GcpApi';
import { Operation, Project } from './types';
import { OAuthApi } from '@backstage/core-plugin-api';
/** @public */
export declare class GcpClient implements GcpApi {
    private readonly googleAuthApi;
    constructor(googleAuthApi: OAuthApi);
    listProjects(): Promise<Project[]>;
    getProject(projectId: string): Promise<Project>;
    createProject(options: {
        projectId: string;
        projectName: string;
    }): Promise<Operation>;
    getToken(): Promise<string>;
}

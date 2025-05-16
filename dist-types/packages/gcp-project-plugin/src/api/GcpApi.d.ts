import { Project, Operation } from './types';
/** @public */
export declare const gcpApiRef: import("@backstage/core-plugin-api").ApiRef<GcpApi>;
/** @public */
export type GcpApi = {
    listProjects(): Promise<Project[]>;
    getProject(projectId: string): Promise<Project>;
    createProject(options: {
        projectId: string;
        projectName: string;
    }): Promise<Operation>;
};

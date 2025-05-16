/** @public */
export type Project = {
    name: string;
    projectNumber?: string;
    projectId: string;
    lifecycleState?: string;
    createTime?: string;
};
/** @public */
export type ProjectDetails = {
    details: string;
};
/** @public */
export type Operation = {
    name: string;
    metadata: string;
    done: boolean;
    error: Status;
    response: string;
};
/** @public */
export type Status = {
    code: number;
    message: string;
    details: string[];
};

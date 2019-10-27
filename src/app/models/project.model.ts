export interface Project {
    project: {
        id: number;
        name: string;
        description: string;
        position: number;
        level: string;
    };
    finished: number;
}

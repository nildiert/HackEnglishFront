import { Concept } from './concept.model';

export interface ProjectDetail {
        id: number;
        name: string;
        description: string;
        position: number;
        level: string;
        concepts: Concept[];
}

import { z } from 'zod';
import { projectSchema } from './project.schemas';

export type ProjectSchema = typeof projectSchema;

export type IProject = z.infer<ProjectSchema>;

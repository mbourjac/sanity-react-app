import { z } from 'zod';
import { projectSchema } from './project.schemas';

export type ProjectSchema = typeof projectSchema;

export type Project = z.infer<ProjectSchema>;

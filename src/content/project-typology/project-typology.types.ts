import { z } from 'zod';
import { projectTypologySchema } from './project-typology.schemas';

export type ProjectTypologySchema = typeof projectTypologySchema;

export type IProjectTypology = z.infer<typeof projectTypologySchema>;

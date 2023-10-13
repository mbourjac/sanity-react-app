import { z } from 'zod';
import { projectTypologySchema } from './project-typology.schemas';

export type ProjectTypologySchema = typeof projectTypologySchema;

export type ProjectTypology = z.infer<typeof projectTypologySchema>;

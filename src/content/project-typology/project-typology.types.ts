import { z } from 'zod';
import { projectTypologySchema } from './project-typology.schemas';

export type IProjectTypology = z.infer<typeof projectTypologySchema>;

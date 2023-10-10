import { z } from 'zod';
import { projectSchema } from './project.schemas';

export type IProject = z.infer<typeof projectSchema>;

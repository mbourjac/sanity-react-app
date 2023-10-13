import { z } from 'zod';
import { projectsPageSchema } from './projects-page.schema';

export type ProjectsPageSchema = typeof projectsPageSchema;

export type ProjectsPage = z.infer<ProjectsPageSchema>;

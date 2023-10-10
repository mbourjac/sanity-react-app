import { z } from 'zod';
import { projectsPageSchema } from './projects-page.schema';

export type IProjectsPage = z.infer<typeof projectsPageSchema>;

import { z } from 'zod';
import { metadataSchema } from '../metadata/metadata.schemas';

export const projectsPageSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  metadata: metadataSchema.optional(),
});

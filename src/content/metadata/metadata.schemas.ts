import { z } from 'zod';

export const metadataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  ogImageUrl: z.string().optional(),
});

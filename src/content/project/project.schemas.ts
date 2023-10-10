import { z } from 'zod';
import { metadataSchema } from '../metadata/metadata.schemas';
import { projectTypologySchema } from '../project-typology/project-typology.schemas';

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  metadata: metadataSchema.optional(),
  status: z.union([z.literal('finished'), z.literal('wip')]),
  typologies: z.array(projectTypologySchema),
  description: z.string(),
  images: z.array(
    z.object({
      imageUrl: z.string(),
      alt: z.string().optional(),
    })
  ),
});

import { z } from 'zod';
import { metadataSchema } from './metadata.schemas';

export type IMetadata = z.infer<typeof metadataSchema>;

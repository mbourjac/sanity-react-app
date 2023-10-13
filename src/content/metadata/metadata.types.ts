import { z } from 'zod';
import { metadataSchema } from './metadata.schemas';

export type MetadataSchema = typeof metadataSchema;

export type Metadata = z.infer<MetadataSchema>;

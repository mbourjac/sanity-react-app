import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IMetadata } from '../../types/metadata.types';

export class SanityMetadataRepository extends SanityRepository<IMetadata> {
  type = 'settings';
  projection = groq`{title, description, "ogImageUrl": ogImage.asset->url}`;
}

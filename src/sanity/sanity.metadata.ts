import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IMetadata } from '../content/metadata/metadata.types';

export class SanityMetadataRepository extends SanityRepository<IMetadata> {
  type = 'settings';
  projection = groq`{title, description, "ogImageUrl": ogImage.asset->url}`;
}

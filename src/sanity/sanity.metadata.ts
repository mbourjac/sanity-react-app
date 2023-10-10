import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IMetadata } from '../content/metadata/metadata.types';

export class SanityMetadataRepository extends SanityRepository<IMetadata> {
  type = 'settings';
  projection = groq`{
    defined(title) => {title},
    defined(description) => {description},
    defined(ogImageUrl) => {
      "ogImageUrl": ogImageUrl.asset->url
    }
  }`;
}

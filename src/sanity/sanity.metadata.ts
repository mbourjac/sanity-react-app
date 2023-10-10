import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { metadataSchema } from '../content/metadata/metadata.schemas';

export class SanityMetadataRepository extends SanityRepository<
  typeof metadataSchema
> {
  type = 'settings';
  projection = groq`{
    defined(title) => {title},
    defined(description) => {description},
    defined(ogImageUrl) => {
      "ogImageUrl": ogImageUrl.asset->url
    }
  }`;
  schema = metadataSchema;
}

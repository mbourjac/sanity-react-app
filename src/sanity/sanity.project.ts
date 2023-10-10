import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { projectSchema } from '../content/project/project.schemas';

export class SanityProjectRepository extends SanityRepository<
  typeof projectSchema
> {
  type = 'project';
  projection = groq`{
    "id": _id,
    name,
    "slug": slug.current,
    defined(metadata) => {
      metadata {
        defined(title) => {title},
        defined(description) => {description},
        defined(ogImageUrl) => {
          "ogImageUrl": ogImageUrl.asset->url
        },
      }
    },
    status,
    "typologies": typologies[]->name,
    description,
    "images": images[] {
      "imageUrl": asset->url,
      defined(alt) => {alt},
    }
  }`;
  schema = projectSchema;
}

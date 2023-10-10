import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IProject } from '../content/project/project.types';

export class SanityProjectRepository extends SanityRepository<IProject> {
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
}

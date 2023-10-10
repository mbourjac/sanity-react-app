import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IProject } from '../content/project/project.types';

export class SanityProjectRepository extends SanityRepository<IProject> {
  type = 'project';
  projection = groq`{
    "id": _id,
    title,
    "slug": slug.current
    metadata {
      title,
      description,
      ogImageUrl,
    },
    status,
    "typologies": typologies[]->name,
    "images": images[] {
      "imageUrl": asset->url,
      alt
    }
  }`;
}

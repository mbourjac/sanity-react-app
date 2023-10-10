import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { projectsPageSchema } from '../content/projects-page/projects-page.schema';

export class SanityProjectsPageRepository extends SanityRepository<
  typeof projectsPageSchema
> {
  type = 'projectsPage';
  projection = groq`{
    defined(heading) => {heading},
    defined(description) => {description},
    defined(seo) => {
      seo {
        defined(title) => {title},
        defined(description) => {description},
        defined(ogImageUrl) => {
          "ogImageUrl": ogImageUrl.asset->url
        },
      }
    }
  }`;
  schema = projectsPageSchema;
}

import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IProjectsPage } from '../content/projects-page/projects-page.types';

export class SanityProjectsPageRepository extends SanityRepository<IProjectsPage> {
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
}

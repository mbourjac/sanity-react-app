import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IProjectsPage } from '../content/projects-page/projects-page.types';

export class SanityProjectsPageRepository extends SanityRepository<IProjectsPage> {
  type = 'projectsPage';
  projection = groq`{heading, description, metadata{title, description}}`;
}

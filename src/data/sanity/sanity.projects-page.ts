import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IProjectsPage } from '../../content/project/project.types';

export class SanityProjectsPageRepository extends SanityRepository<IProjectsPage> {
  type = 'projectsPage';
  projection = groq`{heading, description, metadata{title, description}}`;
}

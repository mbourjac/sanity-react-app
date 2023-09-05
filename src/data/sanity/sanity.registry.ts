import { SanityMetadataRepository } from './sanity.metadata';
import { SanityProjectRepository } from './sanity.project';
import { SanityProjectsPageRepository } from './sanity.projects-page';

export class SanityRegistry {
  projectRepository = new SanityProjectRepository();
  projectsPageRepository = new SanityProjectsPageRepository();
  metadataRepository = new SanityMetadataRepository();
}

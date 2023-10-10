import { SanityMetadataRepository } from './sanity.metadata';
import { SanityProjectRepository } from './sanity.project';
import { SanityProjectTypologyRepository } from './sanity.project-typology';
import { SanityProjectsPageRepository } from './sanity.projects-page';

export class SanityRegistry {
  projectRepository = new SanityProjectRepository();
  projectsPageRepository = new SanityProjectsPageRepository();
  projectTypologyRepository = new SanityProjectTypologyRepository();
  metadataRepository = new SanityMetadataRepository();
}

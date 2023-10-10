import { SanityRegistry } from '../sanity/sanity.registry';
import { IMetadata } from '../content/metadata/metadata.types';
import { IProject } from '../content/project/project.types';
import { IProjectsPage } from '../content/projects-page/projects-page.types';
import { IRepository } from '../types/repository.types';

export interface IRegistry {
  projectRepository: IRepository<IProject>;
  projectsPageRepository: IRepository<IProjectsPage>;
  metadataRepository: IRepository<IMetadata>;
}

export const appRegistry: IRegistry = new SanityRegistry();

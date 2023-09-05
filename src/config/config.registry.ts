import { IRepository } from '../data/data.repository';
import { SanityRegistry } from '../data/sanity/sanity.registry';
import { IMetadata } from '../types/metadata.types';
import { IProject, IProjectsPage } from '../types/project.types';

export interface IRegistry {
  projectRepository: IRepository<IProject>;
  projectsPageRepository: IRepository<IProjectsPage>;
  metadataRepository: IRepository<IMetadata>;
}

export const appRegistry: IRegistry = new SanityRegistry();

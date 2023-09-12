import { IRepository } from '../data/data.repository';
import { SanityRegistry } from '../data/sanity/sanity.registry';
import { IMetadata } from '../content/metadata/metadata.types';
import { IProject } from '../content/project/project.types';
import { IProjectsPage } from '../content/projects-page/projects-page.types';

export interface IRegistry {
  projectRepository: IRepository<IProject>;
  projectsPageRepository: IRepository<IProjectsPage>;
  metadataRepository: IRepository<IMetadata>;
}

export const appRegistry: IRegistry = new SanityRegistry();

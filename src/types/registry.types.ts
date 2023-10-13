import { Metadata } from '../content/metadata/metadata.types';
import { ProjectTypology } from '../content/project-typology/project-typology.types';
import { Project } from '../content/project/project.types';
import { ProjectsPage } from '../content/projects-page/projects-page.types';
import { Repository } from './repository.types';

export interface Registry {
  projectRepository: Repository<Project>;
  projectsPageRepository: Repository<ProjectsPage>;
  projectTypologyRepository: Repository<ProjectTypology>;
  metadataRepository: Repository<Metadata>;
}

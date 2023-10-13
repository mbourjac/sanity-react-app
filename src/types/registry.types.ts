import { Repository } from './repository.types';
import { MetadataSchema } from '../content/metadata/metadata.types';
import { ProjectTypologySchema } from '../content/project-typology/project-typology.types';
import { ProjectSchema } from '../content/project/project.types';
import { ProjectsPageSchema } from '../content/projects-page/projects-page.types';

export interface Registry {
  projectRepository: Repository<ProjectSchema>;
  projectsPageRepository: Repository<ProjectsPageSchema>;
  projectTypologyRepository: Repository<ProjectTypologySchema>;
  metadataRepository: Repository<MetadataSchema>;
}

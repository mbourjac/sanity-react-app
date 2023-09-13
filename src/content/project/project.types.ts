import { IMetadata } from '../metadata/metadata.types';
import type { IProjectTypology } from '../project-typology/project-typology.types';

export interface IProject {
  id: string;
  title: string;
  slug: string;
  metadata: IMetadata | null;
  status: 'wip' | 'finished';
  typologies: IProjectTypology[];
  images: IProjectImage[];
}

export interface IProjectImage {
  imageUrl: string;
  alt?: string;
}

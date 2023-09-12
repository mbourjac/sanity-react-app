import { IMetadata } from '../metadata/metadata.types';

export interface IProjectsPage {
  heading: string;
  description: string;
  metadata: IMetadata;
}

export interface IProject {
  id: string;
  title: string;
  slug: string;
  metadata: IMetadata;
}

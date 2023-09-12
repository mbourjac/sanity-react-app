import { IMetadata } from '../metadata/metadata.types';

export interface IProject {
  id: string;
  title: string;
  slug: string;
  metadata: IMetadata;
}

import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IProject } from '../../types/project.types';

export class SanityProjectRepository extends SanityRepository<IProject> {
  type = 'project';
  projection = groq`{"id": _id, title, "slug": slug.current}`;
}

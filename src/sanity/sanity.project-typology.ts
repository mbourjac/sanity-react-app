import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { projectTypologySchema } from '../content/project-typology/project-typology.schemas';

export class SanityProjectTypologyRepository extends SanityRepository<
  typeof projectTypologySchema
> {
  type = 'typology';
  projection = groq`.name`;
  schema = projectTypologySchema;
}

import groq from 'groq';
import { SanityRepository } from './sanity.repository';
import { IProjectTypology } from '../content/project-typology/project-typology.types';

export class SanityProjectTypologyRepository extends SanityRepository<IProjectTypology> {
  type = 'typology';
  projection = groq`.name`;
}

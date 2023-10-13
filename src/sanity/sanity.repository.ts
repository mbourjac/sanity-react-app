import { z } from 'zod';
import groq from 'groq';
import { Repository } from '../types/repository.types';

export abstract class SanityRepository<T extends z.ZodTypeAny>
  implements Repository<T>
{
  private readonly PROJECT_ID = 'u97bmxkv';
  private readonly DATASET = 'production';

  protected abstract readonly type: string;
  protected abstract readonly projection: string;
  protected abstract readonly schema: T;

  getAllDocuments = async () => {
    const query = groq`*[_type == "${this.type}"] | order(_createdAt desc) ${this.projection}`;
    return this.fetchData<z.ZodArray<T, 'many'>>(query);
  };

  getSingleDocument = async () => {
    const query = groq`*[_type == "${this.type}"]${this.projection}[0]`;
    return this.fetchData<T>(query);
  };

  getNewestDocument = async () => {
    const query = groq`*[_type == "${this.type}"] | order(_createdAt desc) ${this.projection}[0]`;
    return this.fetchData<T>(query);
  };

  getDocumentBySlug = async (slug?: string) => {
    const query = groq`*[_type == "${this.type}" && slug.current == "${slug}"]${this.projection}[0]`;
    return this.fetchData<T>(query);
  };

  private fetchData = async <U extends z.ZodTypeAny>(query: string) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${encodedQuery}`;
    const response = await fetch(url);

    if (!response.ok) {
      const { error } = await response.json();
      console.error(error);

      throw new Error(`Error ${response.status} while fetching Sanity data.`);
    }

    const data = await response.json();
    const parsedData = this.schema.safeParse(data.result);

    if (!parsedData.success) {
      console.error(this.type, parsedData.error);
      throw new Error(`Error while validating ${this.type} schema.`);
    }

    return parsedData.data as z.infer<U>;
  };
}

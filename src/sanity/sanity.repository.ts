import { z } from 'zod';
import groq from 'groq';
import { IRepository } from '../types/repository.types';

export abstract class SanityRepository<T extends z.ZodTypeAny>
  implements IRepository<T>
{
  private readonly PROJECT_ID = 'u97bmxkv';
  private readonly DATASET = 'production';

  protected abstract readonly type: string;
  protected abstract readonly projection: string;
  protected abstract readonly schema: T;

  getAllDocuments = async () => {
    const query = groq`*[_type == "${this.type}"] | order(_createdAt desc) ${this.projection}`;
    return this.getMultipleResults(query);
  };

  getSingleDocument = async () => {
    const query = groq`*[_type == "${this.type}"]${this.projection}[0]`;
    return this.getSingleResult(query);
  };

  getNewestDocument = async () => {
    const query = groq`*[_type == "${this.type}"] | order(_createdAt desc) ${this.projection}[0]`;
    return this.getSingleResult(query);
  };

  getDocumentBySlug = async (slug?: string) => {
    const query = groq`*[_type == "${this.type}" && slug.current == "${slug}"]${this.projection}[0]`;
    return this.getSingleResult(query);
  };

  private getMultipleResults = async (query: string): Promise<z.infer<T>[]> => {
    const multipleResultsSchema = z.object({
      result: z.array(this.schema),
    });

    const data = await this.fetchData(query);
    const parsedData = multipleResultsSchema.safeParse(data);

    if (!parsedData.success) {
      console.error(this.type, parsedData.error);
      throw new Error(`Error while validating ${this.type} schema.`);
    }

    return parsedData.data.result;
  };

  private getSingleResult = async (query: string): Promise<z.infer<T>> => {
    const singleResultSchema = z.object({
      result: this.schema,
    });

    const data = await this.fetchData(query);
    const parsedData = singleResultSchema.safeParse(data);

    if (!parsedData.success) {
      console.error(this.type, parsedData.error);
      throw new Error(`Error while validating ${this.type} schema.`);
    }

    return parsedData.data.result;
  };

  private fetchData = async (query: string): Promise<unknown> => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${encodedQuery}`;
    const response = await fetch(url);

    if (!response.ok) {
      const { error } = await response.json();
      console.error(error);

      throw new Error(`Error ${response.status} while fetching Sanity data.`);
    }

    return response.json();
  };
}

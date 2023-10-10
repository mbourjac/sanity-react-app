import groq from 'groq';
import { IRepository } from '../../types/repository.types';

export abstract class SanityRepository<T> implements IRepository<T> {
  private readonly PROJECT_ID = 'u97bmxkv';
  private readonly DATASET = 'production';

  protected abstract readonly type: string;
  protected abstract readonly projection: string;

  getAllDocuments = async () => {
    const query = groq`*[_type == "${this.type}"] | order(_createdAt desc) ${this.projection}`;
    return this.fetchData<T[]>(query);
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

  private fetchData = async <U>(query: string): Promise<U> => {
    const url = this.buildFetchUrl(query);
    const response = await fetch(url);

    if (!response.ok) {
      const { error } = await response.json();
      console.error(error);

      throw new Error(
        `Error while fetching Sanity data. ${response.status} - ${response.statusText}.`
      );
    }

    const data: { result: U } = await response.json();

    return data.result;
  };

  private buildFetchUrl = (query: string) => {
    const encodedQuery = encodeURIComponent(query);
    return `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${encodedQuery}`;
  };
}

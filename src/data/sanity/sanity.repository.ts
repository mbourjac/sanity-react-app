import groq from 'groq';
import { IRepository } from '../data.repository';
import type { FetchResult } from '../../types/fetch-result.types';

export abstract class SanityRepository<T> implements IRepository<T> {
  private readonly PROJECT_ID = 'u97bmxkv';
  private readonly DATASET = 'production';

  protected abstract readonly type: string;
  protected abstract readonly projection: string;

  getAllDocuments = async () => {
    const query = encodeURIComponent(
      groq`*[_type == "${this.type}"] | order(_createdAt desc) ${this.projection}`
    );
    const url = this.buildFetchUrl(query);

    return this.fetchData<T[]>(url);
  };

  getSingleDocument = async () => {
    const query = encodeURIComponent(
      groq`*[_type == "${this.type}"]${this.projection}[0]`
    );
    const url = this.buildFetchUrl(query);

    return this.fetchData<T>(url);
  };

  getNewestDocument = async () => {
    const query = encodeURIComponent(
      groq`*[_type == "${this.type}"] | order(_createdAt desc) ${this.projection}[0]`
    );
    const url = this.buildFetchUrl(query);

    return this.fetchData<T>(url);
  };

  getDocumentBySlug = async (slug?: string) => {
    const query = encodeURIComponent(
      groq`*[_type == "${this.type}" && slug.current == "${slug}"]${this.projection}[0]`
    );

    const url = this.buildFetchUrl(query);

    return this.fetchData<T>(url);
  };

  private buildFetchUrl = (query: string) => {
    return `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${query}`;
  };

  private fetchData = async <U>(url: string): Promise<FetchResult<U>> => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Error while fetching Sanity data. Status: ${response.status} - ${response.statusText}`
        );
      }

      const data: { result: U } = await response.json();

      return {
        status: 'success',
        data: data.result,
      };
    } catch (error) {
      let message;

      if (error instanceof Error) {
        message = error.message;
      } else {
        message = 'An unknow error occured while fetching Sanity data.';
      }

      console.error(error);

      return {
        status: 'error',
        message,
      };
    }
  };
}

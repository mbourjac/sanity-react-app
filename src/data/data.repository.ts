import type { FetchResult } from '../types/fetch-result.types';

export interface IRepository<T> {
  getAllDocuments: () => Promise<FetchResult<T[]>>;
  getSingleDocument: () => Promise<FetchResult<T>>;
  getNewestDocument: () => Promise<FetchResult<T>>;
  getDocumentBySlug: (slug?: string) => Promise<FetchResult<T>>;
}

export interface Repository<T> {
  getAllDocuments: () => Promise<T[]>;
  getSingleDocument: () => Promise<T>;
  getNewestDocument: () => Promise<T>;
  getDocumentBySlug: (slug?: string) => Promise<T>;
}

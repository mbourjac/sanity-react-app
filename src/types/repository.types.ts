import { z } from 'zod';

export interface Repository<T extends z.ZodTypeAny> {
  getAllDocuments: () => Promise<z.infer<T>[]>;
  getSingleDocument: () => Promise<z.infer<T>>;
  getNewestDocument: () => Promise<z.infer<T>>;
  getDocumentBySlug: (slug?: string) => Promise<z.infer<T>>;
}

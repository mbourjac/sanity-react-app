import { useEffect, useState } from 'react';
import type { FetchResult } from '../types/fetch-result.types';

export const useRepository = <T>(
  fetchFunction: () => Promise<FetchResult<T>>
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasFetched(false);

      const result = await fetchFunction();

      if (result.status === 'success') {
        setData(result.data);
      } else {
        setError(result.message);
      }

      setIsLoading(false);
      setHasFetched(true);
    };

    fetchData();
  }, [fetchFunction]);

  return { data, error, isLoading, hasFetched };
};

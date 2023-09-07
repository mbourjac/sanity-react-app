import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
};

export const queryClient = new QueryClient(queryClientConfig);

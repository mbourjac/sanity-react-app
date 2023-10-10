import { useQuery } from '@tanstack/react-query';
import { appRegistry } from '../../config/config.registry';

const { metadataRepository } = appRegistry;

export const useMetadataQuery = () => {
  const { data: metadata } = useQuery({
    queryKey: ['metadata'],
    queryFn: metadataRepository.getSingleDocument,
  });

  return { metadata };
};

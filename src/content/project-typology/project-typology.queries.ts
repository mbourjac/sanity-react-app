import { useQuery } from '@tanstack/react-query';
import { appRegistry } from '../../config/config.registry';

const { projectTypologyRepository } = appRegistry;

export const useAllProjectTypologiesQuery = () => {
  const {
    data: projectTypologies,
    error: projectTypologiesError,
    isLoading: isProjectTypologiesLoading,
  } = useQuery({
    queryKey: ['projectTypologies'],
    queryFn: projectTypologyRepository.getAllDocuments,
  });

  return {
    projectTypologies,
    projectTypologiesError,
    isProjectTypologiesLoading,
  };
};

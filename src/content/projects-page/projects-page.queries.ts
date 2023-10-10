import { useQuery } from '@tanstack/react-query';
import { appRegistry } from '../../config/config.registry';

const { projectsPageRepository } = appRegistry;

export const useProjectsPageQuery = () => {
  const { data: projectsPage } = useQuery({
    queryKey: ['projectsPage'],
    queryFn: projectsPageRepository.getSingleDocument,
  });

  return { projectsPage };
};

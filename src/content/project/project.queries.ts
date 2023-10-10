import { useQuery } from '@tanstack/react-query';
import { appRegistry } from '../../config/config.registry';
import { useParams } from 'react-router-dom';

const { projectRepository } = appRegistry;

export const useAllProjectsQuery = () => {
  const {
    data: projects,
    error: projectsError,
    isLoading: isProjectsLoading,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: projectRepository.getAllDocuments,
  });

  return { projects, projectsError, isProjectsLoading };
};

export const useNewestProjectQuery = () => {
  const {
    data: newestProject,
    error: newestProjectError,
    isLoading: isNewestProjectLoading,
  } = useQuery({
    queryKey: ['projects', 'newest'],
    queryFn: projectRepository.getNewestDocument,
  });

  return { newestProject, newestProjectError, isNewestProjectLoading };
};

export const useProjectBySlugQuery = () => {
  const { slug } = useParams();

  const {
    data: project,
    error: projectError,
    isLoading: isLoadingProject,
    isFetched: isProjectFetched,
  } = useQuery({
    queryKey: ['project', { slug }],
    queryFn: () => projectRepository.getDocumentBySlug(slug),
  });

  return {
    project,
    projectError,
    isLoadingProject,
    isProjectFetched,
  };
};

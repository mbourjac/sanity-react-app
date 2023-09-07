import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { appRegistry } from '../../config/config.registry';
import { NotFound } from '../../errors/errors.not-found';
import { useQuery } from '@tanstack/react-query';

const { projectRepository } = appRegistry;

export const ProjectDetail = () => {
  const { slug } = useParams();

  const getProject = useCallback(
    () => projectRepository.getDocumentBySlug(slug),
    [slug]
  );

  const { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ['project', { slug }],
    queryFn: getProject,
  });

  if (isLoading) {
    return <p>Loading project...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isFetched && !data) {
    throw new NotFound();
  }

  return <section>{data && <ProjectCard project={data} />}</section>;
};

import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { appRegistry } from '../../config/config.registry';
import { useRepository } from '../../hooks/use-repository';
import { NotFound } from '../../errors/errors.not-found';

const { projectRepository } = appRegistry;

export const ProjectDetail = () => {
  const { slug } = useParams();

  const getProject = useCallback(
    () => projectRepository.getDocumentBySlug(slug),
    [slug]
  );

  const {
    data: project,
    error,
    isLoading,
    hasFetched,
  } = useRepository(getProject);

  if (isLoading) {
    return <p>Loading project...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (hasFetched && !project) {
    throw new NotFound();
  }

  return <section>{project && <ProjectCard project={project} />}</section>;
};

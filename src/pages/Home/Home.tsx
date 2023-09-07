import { appRegistry } from '../../config/config.registry';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { useQuery } from '@tanstack/react-query';

const { projectRepository } = appRegistry;

export const Home = () => {
  const {
    data: project,
    error: projectError,
    isError: isProjectError,
    isLoading: isProjectLoading,
  } = useQuery({
    queryKey: ['homeProject'],
    queryFn: projectRepository.getNewestDocument,
  });

  if (isProjectLoading) {
    return <p>Loading project...</p>;
  }

  if (isProjectError) {
    return <p>{projectError.message}</p>;
  }

  return (
    project && (
      <section>
        <ProjectCard project={project} isLink />
      </section>
    )
  );
};

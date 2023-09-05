import { useRepository } from '../../hooks/use-repository';
import { appRegistry } from '../../config/config.registry';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

const { projectRepository } = appRegistry;

export const Home = () => {
  const {
    data: project,
    error: projectError,
    isLoading: isLoadingProject,
  } = useRepository(projectRepository.getNewestDocument);

  if (isLoadingProject) {
    return <p>Loading project...</p>;
  }

  if (projectError) {
    return <p>{projectError}</p>;
  }

  return (
    project && (
      <section>
        <ProjectCard project={project} isLink />
      </section>
    )
  );
};

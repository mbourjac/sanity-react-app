import { useRepository } from '../../hooks/use-repository';
import { appRegistry } from '../../config/config.registry';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Metadata } from '../../components/Metadata/Metadata';
import { ReactNode } from 'react';

const { projectsPageRepository, projectRepository } = appRegistry;

export const Projects = () => {
  const { data: page } = useRepository(
    projectsPageRepository.getSingleDocument
  );
  const {
    data: projects,
    error: projectsError,
    isLoading: isLoadingProjects,
  } = useRepository(projectRepository.getAllDocuments);

  let projectsContent: ReactNode;

  if (isLoadingProjects) {
    projectsContent = <p>Loading projects...</p>;
  }

  if (projectsError) {
    projectsContent = <p>{projectsError}</p>;
  }

  if (projects) {
    projectsContent = (
      <section>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isLink />
        ))}
      </section>
    );
  }

  return (
    <>
      <Metadata
        title={page?.metadata.title || 'Projects'}
        description={page?.metadata.description}
      />
      <section>
        <h1>{page?.heading || 'All Projects'}</h1>
      </section>
      {projectsContent}
    </>
  );
};

import { appRegistry } from '../../config/config.registry';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Metadata } from '../../components/Metadata/Metadata';
import { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

const { projectsPageRepository, projectRepository } = appRegistry;

export const Projects = () => {
  const {
    data: projects,
    error: projectsError,
    isError: isProjectsError,
    isLoading: isProjectsLoading,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: projectRepository.getAllDocuments,
  });
  const { data: page } = useQuery({
    queryKey: ['projectsPage'],
    queryFn: projectsPageRepository.getSingleDocument,
  });

  let projectsContent: ReactNode;

  if (isProjectsLoading) {
    projectsContent = <p>Loading projects...</p>;
  }

  if (isProjectsError) {
    projectsContent = <p>{projectsError.message}</p>;
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

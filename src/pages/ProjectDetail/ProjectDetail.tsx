import { useParams } from 'react-router-dom';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { appRegistry } from '../../config/config.registry';
import { useRepository } from '../../hooks/use-repository';

const { projectRepository } = appRegistry;

export const ProjectDetail = () => {
  const { slug } = useParams();

  const { data: project } = useRepository(() =>
    projectRepository.getDocumentBySlug(slug)
  );

  return <section>{project && <ProjectCard project={project} />}</section>;
};

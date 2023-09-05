import { Link } from 'react-router-dom';
import { IProject } from '../../types/project.types';

type ProjectCardProps = {
  project: IProject;
  isLink?: boolean;
};

export const ProjectCard = ({
  project: { title, slug },
  isLink,
}: ProjectCardProps) => {
  const cardContent = (
    <article>
      <p>{title}</p>
    </article>
  );

  return isLink ? (
    <Link to={`/projects/${slug}`}>{cardContent}</Link>
  ) : (
    cardContent
  );
};

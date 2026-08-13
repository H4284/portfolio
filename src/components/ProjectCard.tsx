import './ProjectCard.css';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

interface Project {
  title: string;
  period?: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  demoAvailable: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasGithub = project.github.startsWith('http');

  return (
    <FadeIn delay={index * 100}>
      <article className="project-card glass-card">
        <div className="project-card__header">
          {project.period && (
            <time className="project-card__period">{project.period}</time>
          )}
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-card__badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {(hasGithub || project.demoAvailable) && (
          <div className="project-card__actions">
            {hasGithub && (
              <Button
                href={project.github}
                variant="secondary"
                external
                aria-label={`View ${project.title} on GitHub`}
              >
                GitHub
              </Button>
            )}
            {project.demoAvailable && (
              <Button href={project.demo} variant="primary" external>
                Live Demo
              </Button>
            )}
          </div>
        )}
      </article>
    </FadeIn>
  );
}

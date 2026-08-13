import { Section, SectionHeading } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/content';
import './ProjectsSection.css';

export function ProjectsSection() {
  return (
    <Section id="projects" ariaLabelledBy="projects-heading">
      <SectionHeading
        label="Projects"
        title="Featured Work"
        subtitle="Real applications I've built — from backend systems to full web experiences."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

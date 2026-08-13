import './SkillGroup.css';
import { FadeIn } from './FadeIn';

interface SkillGroupProps {
  title: string;
  skills: string[];
  index: number;
}

export function SkillGroup({ title, skills, index }: SkillGroupProps) {
  return (
    <FadeIn delay={index * 80}>
      <div className="skill-group glass-card">
        <h3 className="skill-group__title">{title}</h3>
        <ul className="skill-group__list">
          {skills.map((skill) => (
            <li key={skill} className="skill-group__item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

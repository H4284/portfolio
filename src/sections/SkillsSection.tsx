import { Section, SectionHeading } from '../components/Section';
import { SkillGroup } from '../components/SkillGroup';
import { skillCategories } from '../data/content';
import './SkillsSection.css';

export function SkillsSection() {
  return (
    <Section id="skills" className="skills-section" ariaLabelledBy="skills-heading">
      <SectionHeading
        label="Skills"
        title="Technologies I Work With"
        subtitle="Tools and frameworks I use to build reliable, modern applications."
      />
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillGroup
            key={category.title}
            title={category.title}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

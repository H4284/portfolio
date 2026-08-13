import { Section, SectionHeading } from '../components/Section';
import { Timeline } from '../components/Timeline';
import { site, timeline } from '../data/content';
import './ExperienceSection.css';

export function ExperienceSection() {
  return (
    <Section id="experience" className="experience-section" ariaLabelledBy="experience-heading">
      <SectionHeading
        label="Experience"
        title="Education & Experience"
        titleId="experience-heading"
        subtitle={site.experienceSubtitle}
      />
      <Timeline items={timeline} />
    </Section>
  );
}

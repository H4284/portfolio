import { Section, SectionHeading } from '../components/Section';
import { StrengthCard } from '../components/StrengthCard';
import { strengths } from '../data/content';
import './StrengthsSection.css';

export function StrengthsSection() {
  return (
    <Section id="strengths" ariaLabelledBy="strengths-heading">
      <SectionHeading
        label="Strengths"
        title="What I Bring"
        subtitle="The qualities I bring to every team and every project."
        align="center"
      />
      <div className="strengths-grid">
        {strengths.map((strength, index) => (
          <StrengthCard key={strength.title} {...strength} index={index} />
        ))}
      </div>
    </Section>
  );
}

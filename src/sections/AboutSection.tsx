import { Section, SectionHeading } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { site } from '../data/content';
import './AboutSection.css';

export function AboutSection() {
  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <SectionHeading
        label="About"
        title="About Me"
        titleId="about-heading"
        subtitle={site.about.subtitle}
      />
      <div className="about__grid">
        <FadeIn>
          <div className="about__text glass-card">
            <p className="about__lead">{site.about.lead}</p>
            <ul className="about__list">
              {site.about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={120}>
          <div className="about__aside glass-card">
            <h3 className="about__aside-title">{site.about.asideTitle}</h3>
            <p>{site.about.aside}</p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

import { Section, SectionHeading } from '../components/Section';
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { site } from '../data/content';
import './ContactSection.css';

export function ContactSection() {
  return (
    <Section id="contact" className="contact-section" ariaLabelledBy="contact-heading">
      <SectionHeading
        label="Contact"
        title={site.contactHeadline}
        titleId="contact-heading"
        subtitle={site.contactSubtitle}
        align="center"
      />
      <FadeIn>
        <div className="contact__card glass-card">
          <h3 className="contact__card-title">Get in touch</h3>
          <ul className="contact__links">
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="contact__label">LinkedIn</span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                {site.contactLabels.linkedin}
              </a>
            </li>
            <li>
              <span className="contact__label">GitHub</span>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                {site.contactLabels.github}
              </a>
            </li>
            <li>
              <span className="contact__label">Phone</span>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
          </ul>
          <Button href={`mailto:${site.email}`} variant="primary" className="contact__email-btn">
            Email Me
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}

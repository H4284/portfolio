import './HeroSection.css';
import { site } from '../data/content';
import { Button } from '../components/Button';
import { HeroVisual } from '../components/HeroVisual';
import { FadeIn } from '../components/FadeIn';

export function HeroSection() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <FadeIn>
            <p className="hero__greeting">Hello, world 👋</p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 id="hero-heading" className="hero__name">
              Hi, I&apos;m <span className="gradient-text">{site.fullName}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="hero__title">{site.title}</p>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="hero__intro">{site.heroIntro}</p>
          </FadeIn>
          <FadeIn delay={320}>
            <div className="hero__actions">
              <Button href="#projects" variant="primary">
                View My Projects
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="hero__social">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <HeroVisual />
        </FadeIn>
      </div>
    </section>
  );
}

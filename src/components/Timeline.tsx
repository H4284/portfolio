import './Timeline.css';
import { FadeIn } from './FadeIn';

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, index) => {
        const isCurrent = index === 0;

        return (
          <FadeIn key={`${item.title}-${item.period}`} delay={index * 100}>
            <div className="timeline__item">
              <div
                className={`timeline__marker${isCurrent ? ' timeline__marker--current' : ''}`}
                aria-hidden="true"
              />
              <div className="timeline__content glass-card">
                <time className="timeline__period">{item.period}</time>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__org">{item.organization}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

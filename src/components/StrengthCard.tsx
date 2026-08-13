import './StrengthCard.css';
import { FadeIn } from './FadeIn';
import { StrengthIcon } from './Icons';

interface StrengthCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function StrengthCard({
  title,
  description,
  icon,
  index,
}: StrengthCardProps) {
  return (
    <FadeIn delay={index * 80}>
      <article className="strength-card glass-card">
        <StrengthIcon icon={icon} />
        <h3 className="strength-card__title">{title}</h3>
        <p className="strength-card__desc">{description}</p>
      </article>
    </FadeIn>
  );
}

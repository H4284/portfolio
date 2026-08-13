import './HeroVisual.css';

const codeLines = [
  { indent: 0, parts: [{ text: 'const', type: 'keyword' }, { text: ' developer = {', type: 'plain' }] },
  { indent: 1, parts: [{ text: 'name:', type: 'property' }, { text: " 'Hava Jusufi',", type: 'string' }] },
  { indent: 1, parts: [{ text: 'role:', type: 'property' }, { text: " 'Junior Software Developer',", type: 'string' }] },
  { indent: 1, parts: [{ text: 'focus:', type: 'property' }, { text: " ['backend', 'full-stack'],", type: 'string' }] },
  { indent: 1, parts: [{ text: 'build:', type: 'property' }, { text: ' (idea) =>', type: 'plain' }, { text: ' ship(idea)', type: 'function' }] },
  { indent: 0, parts: [{ text: '};', type: 'plain' }] },
];

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />
      <div className="hero-visual__window glass-card">
        <div className="hero-visual__titlebar">
          <span className="hero-visual__dot hero-visual__dot--red" />
          <span className="hero-visual__dot hero-visual__dot--yellow" />
          <span className="hero-visual__dot hero-visual__dot--green" />
          <span className="hero-visual__filename">developer.ts</span>
        </div>
        <pre className="hero-visual__code">
          <code>
            {codeLines.map((line, i) => (
              <span key={i} className="hero-visual__line" style={{ animationDelay: `${i * 0.1}s` }}>
                {'  '.repeat(line.indent)}
                {line.parts.map((part, j) => (
                  <span key={j} className={`hero-visual__token hero-visual__token--${part.type}`}>
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>
      </div>
      <div className="hero-visual__orbit hero-visual__orbit--1" />
      <div className="hero-visual__orbit hero-visual__orbit--2" />
    </div>
  );
}

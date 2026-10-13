import './HeroPortrait.css';

export function HeroPortrait() {
  return (
    <figure className="hero-portrait">
      <div className="hero-portrait__glow" aria-hidden="true" />
      <div className="hero-portrait__ring">
        <div className="hero-portrait__frame">
          <img
            src="/assets/profile.jpg"
            alt="Hava Jusufi"
            className="hero-portrait__image"
            width={280}
            height={280}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </figure>
  );
}

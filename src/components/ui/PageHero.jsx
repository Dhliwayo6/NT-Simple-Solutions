
export default function PageHero({ label, title, subtitle }) {
  return (
    <div className="page-hero">
      {/* Background layers */}
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="page-hero__grid" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9333EA" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg-grid)" />
        </svg>
      </div>
      <div className="page-hero__orb" aria-hidden="true" />

      <div className="page-hero__content">
        <span className="section-label">{label}</span>
        <h1 className="page-hero__title display-heading">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

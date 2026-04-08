import AnimatedSection from "./ui/AnimatedSection";
import { SERVICES } from "./../data/siteData";
import "./../styles/sections.css";

export default function Services() {
  return (
    <section id="services" className="services">
      {/* Dot-grid texture */}
      <div
        style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="#F97316" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <AnimatedSection>
        <div className="services__header">
          <span className="section-label">What We Do</span>
          <h2 className="services__heading display-heading">OUR CORE SERVICES</h2>
          <p className="services__subtext">
            We eliminate project fragmentation by providing all essential
            disciplines in a single, accountable team.
          </p>
        </div>
      </AnimatedSection>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <div className="service-card__sub">{s.sub}</div>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

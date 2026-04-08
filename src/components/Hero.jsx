import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Hero.css";
import { HERO_STATS } from "./../data/siteData";

const CYCLING_WORDS = ["Build", "Design", "Engineer", "Deliver"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(
      () => setWordIdx((p) => (p + 1) % CYCLING_WORDS.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero__bg-image" aria-hidden="true" />

      <div className="hero__grid" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9333EA" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="hero__orb hero__orb--orange" aria-hidden="true" />
      <div className="hero__orb hero__orb--purple" aria-hidden="true" />
      <div className="hero__orb hero__orb--violet" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          <span className="hero__eyebrow-text">
            Construction · Architecture · Engineering
          </span>
        </div>

        <h1 className="hero__heading display-heading">
          Simple Solutions to{" "}
          <span style={{ color: "var(--color-orange)" }}>Real Life</span>{" "}
          Problems
        </h1>

        <p className="hero__subheading">
          NT Simple Solutions Construction, one team, one point of
          accountability, and a guarantee of superior execution across
          construction, architecture, and engineering.
        </p>

        <div className="hero__cta-group">
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Start Your Project →
          </button>
          <button className="btn-secondary" onClick={() => navigate("/projects")}>
            View Projects
          </button>
        </div>

        <div className="hero__stats">
          {HERO_STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="hero__stat-number">{value}</div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

// src/components/sections/Projects.jsx
import AnimatedSection from "./ui/AnimatedSection";
import { PROJECT_IMAGES, CLIENTS } from "./../data/siteData";
import "./../styles/sections.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      {/* Header */}
      <AnimatedSection>
        <div className="projects__header">
          <div>
            <span className="section-label" style={{ color: "var(--color-orange)" }}>
              Our Work
            </span>
            <h2 className="projects__heading display-heading">
              SOME OF OUR PROJECTS
            </h2>
          </div>
          <p className="projects__sub">
            Residential builds, commercial structures, and institutional
            projects delivered with care and precision.
          </p>
        </div>
      </AnimatedSection>

      {/* Mosaic grid */}
      <div className="projects__mosaic">
        {PROJECT_IMAGES.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="project-tile">
              <a href={img.src} target="_blank" rel="noopener noreferrer">
                <img src={img.src} alt={img.alt} loading="lazy" />

                <div className="project-tile__overlay">
                  <div>
                    <div className="project-tile__category">{img.category}</div>
                    <div className="project-tile__title">{img.title}</div>
                  </div>
                </div>
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Clients panel */}
      {/* <AnimatedSection delay={0.3}>
        <div className="projects__clients">
          <h3 className="projects__clients-heading display-heading">
            SELECTED CLIENTS
          </h3>
          <div className="projects__clients-chips">
            {CLIENTS.map((c) => (
              <span key={c} className="projects__client-chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection> */}
    </section>
  );
}

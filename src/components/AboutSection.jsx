import AnimatedSection from "./ui/AnimatedSection";
import "./../styles/sections.css";
import { FaBullseye, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        {/* Left — brand card */}
        <AnimatedSection>
          <div className="about__card">
            <div className="about__card-watermark">WHO WE ARE</div>
            <h2 className="about__card-heading display-heading">
              COMPANY OVERVIEW
            </h2>
            <p className="about__card-text">
              At <strong>NT Simple Solutions Construction</strong>, we believe
              world-class construction and design should be straightforward for
              the client. Founded on turning complex challenges into clear,
              deliverable outcomes, we operate as a unified powerhouse merging
              expert Architectural Vision, rigorous Structural Engineering,
              proactive Project Management, and precise Costing Analysis under
              one roof.
            </p>
            <div className="about__card-highlight">
              One team. One point of accountability. Superior execution.
            </div>
          </div>
        </AnimatedSection>

        {/* Right — vision / mission / values */}
        <AnimatedSection delay={0.18}>
          <span className="about__info-label section-label">Our Foundation</span>
          <h2 className="about__info-heading display-heading">
            VISION, MISSION
            <br />&amp; VALUES
          </h2>

          <div className="about__cards-stack">
            <div className="about__mini-card">
              <span className="about__mini-card-icon"><FaBullseye /></span>
              <div>
                <div className="about__mini-card-title">Vision</div>
                <p className="about__mini-card-text">
                  To be the leading single source for construction solutions,
                  building trust and structures that stand the test of time.
                </p>
              </div>
            </div>

            <div className="about__mini-card">
              <span className="about__mini-card-icon"><FaRocket /></span>
              <div>
                <div className="about__mini-card-title">Mission</div>
                <p className="about__mini-card-text">
                  To simplify the complex process of construction, providing
                  clear, integrated solutions with absolute transparency and
                  accountability - turning client visions into enduring
                  structures.
                </p>
              </div>
            </div>
          </div>

          <div className="about__values">
            {["Integrity", "Integration", "Precision", "Clarity", "Accountability"].map(
              (v) => (
                <span key={v} className="about__value-tag">
                  {v}
                </span>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

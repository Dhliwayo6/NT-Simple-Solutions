import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Projects from "../components/Projects";
import AboutSection from "../components/AboutSection";
import AnimatedSection from "../components/ui/AnimatedSection";
import "../styles/sections.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-wrapper">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <AnimatedSection>
            <div className="stats-bar__grid">
              <div className="stats-bar__item">
                <span className="stats-bar__number">5+</span>
                <span className="stats-bar__label">Years Experience</span>
              </div>
              <div className="stats-bar__item">
                <span className="stats-bar__number">50+</span>
                <span className="stats-bar__label">Projects Completed</span>
              </div>
              <div className="stats-bar__item">
                <span className="stats-bar__number">3</span>
                <span className="stats-bar__label">Core Disciplines</span>
              </div>
              <div className="stats-bar__item">
                <span className="stats-bar__number">1</span>
                <span className="stats-bar__label">Point of Contact</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Services Preview */}
      <ServicesSection />

      {/* Section 4: Projects Preview */}
      <Projects />

      {/* Section 5: About Strip */}
      <AboutSection />

      {/* Section 6: CTA Section */}
      <section className="cta-bar section-padding">
        <div className="container">
          <AnimatedSection className="cta-bar__content">
            <h2 className="display-heading cta-bar__title">
              Ready to Start Your Project?
            </h2>
            <p className="cta-bar__subtext">
              Get in touch and we will walk you through every step — from the first sketch to the final handover.
            </p>
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Request a Quote
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

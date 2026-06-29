import PageHero from "../components/ui/PageHero";
import AnimatedSection from "../components/ui/AnimatedSection";

// Hero image import
import heroBg from "../images/18.jpeg";

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        label="Who We Are"
        title="About NT Simple Solutions"
        subtitle="Founded on the belief that construction should be straightforward for the client."
        bgImage={heroBg}
      />

      {/* Company Background */}
      <section className="about-page__who-we-are section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="about-page__who-we-are-content">
              <h2 className="display-heading about-page__who-we-are-title">Who We Are</h2>
              <p className="about-page__who-we-are-text">
                At NT Simple Solutions Construction, we believe that world-class construction and design should be straightforward for the client. We operate as a unified team — merging architectural vision, structural engineering, project management, and precise costing under one roof. This means one team, one point of accountability, and a guarantee of superior execution. We simplify the process so you can focus on the vision.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="about-page__vmg section-padding">
        <div className="container">
          <div className="vmg-grid">
            <AnimatedSection delay={0.1}>
              <div className="vmg-card">
                <h3 className="vmg-card__title">Vision</h3>
                <p className="vmg-card__text">
                  To be the leading single source for construction solutions, building trust and structures that stand the test of time.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="vmg-card">
                <h3 className="vmg-card__title">Mission</h3>
                <p className="vmg-card__text">
                  To simplify the complex process of construction. We commit to providing clear, integrated solutions and maintaining absolute transparency and accountability, turning client visions into successful, enduring structures.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="vmg-card">
                <h3 className="vmg-card__title">Core Values</h3>
                <ul className="vmg-card__list">
                  <li className="vmg-card__list-item">
                    <strong>Integrity:</strong> Uncompromising honesty and transparency in all dealings.
                  </li>
                  <li className="vmg-card__list-item">
                    <strong>Integration:</strong> Operating as a single, unified team for maximum project efficiency.
                  </li>
                  <li className="vmg-card__list-item">
                    <strong>Precision:</strong> Meticulous attention to detail in every phase, ensuring enduring quality.
                  </li>
                  <li className="vmg-card__list-item">
                    <strong>Clarity:</strong> Straightforward communication and transparent processes for the client.
                  </li>
                  <li className="vmg-card__list-item">
                    <strong>Accountability:</strong> Taking full ownership of commitments and guaranteeing successful delivery.
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Strategic Partners */}
      <section className="about-page__network section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="about-page__network-header">
              <span className="section-label">Our Network</span>
              <h2 className="display-heading about-page__network-title">Strategic Partners</h2>
              <p className="about-page__network-subtitle">
                We collaborate with trusted industry partners to deliver comprehensive property development and construction solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="partners-grid">
            <AnimatedSection delay={0.1}>
              <div className="partner-card">
                <span className="partner-name">Phuthi Properties</span>
                <span className="partner-desc">Real Estate Company</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="partner-card">
                <span className="partner-name">White Oxy Properties</span>
                <span className="partner-desc">Real Estate Company</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="partner-card">
                <span className="partner-name">Mo Quach Drafting</span>
                <span className="partner-desc">Architectural & Drafting</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

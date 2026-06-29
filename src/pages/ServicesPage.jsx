import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import AnimatedSection from "../components/ui/AnimatedSection";

// Static image imports
import heroBg from "../images/6.jpeg";
import imgConstruction from "../images/3.jpeg";
import imgDesign from "../images/10.jpeg";
import imgEngineering from "../images/12.jpeg";
import imgProjectMgmt from "../images/13.jpeg";
import imgCosting from "../images/15.jpeg";

const SERVICES_DATA = [
  {
    title: "Construction & Execution",
    image: imgConstruction,
    desc: "We manage and execute new builds, renovations, and general contracting projects from foundation to final fit-out. Our site teams work under direct leadership from our directors, with no subcontracted management layer between you and the people building your project.",
  },
  {
    title: "Architecture & Design",
    image: imgDesign,
    desc: "We produce conceptual plans and full working drawings, from high-density commercial buildings down to low-density residential plans. Every drawing we produce is buildable — not just presentable.",
  },
  {
    title: "Structural Engineering",
    image: imgEngineering,
    desc: "We handle structural design and analysis, produce detailed drawings, and provide certification. Our structural work is done in-house, which means faster turnaround and complete consistency with the architectural drawings.",
  },
  {
    title: "Strategic Project Management",
    image: imgProjectMgmt,
    desc: "Scheduling, contractor coordination, risk management, and quality control — we run the site so you do not have to. Every project has a named project manager who is your single point of contact throughout.",
  },
  {
    title: "Costing & Financial Control",
    image: imgCosting,
    desc: "We provide detailed budget forecasting and procurement management before a single brick is laid. No hidden costs, no post-tender surprises. Our costing is transparent by design.",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <PageHero
        label="What We Do"
        title="Our Services"
        subtitle="Five disciplines. One team. Zero handoffs."
        bgImage={heroBg}
      />

      <div className="services-page__list">
        <div className="container">
          {SERVICES_DATA.map((service, idx) => (
            <div key={service.title} className="service-detail-block">
              <AnimatedSection delay={0.1}>
                <div className="service-detail-block__grid">
                  <div className="service-detail-block__image-col">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-detail-block__img"
                    />
                  </div>
                  <div className="service-detail-block__content-col">
                    <h2 className="service-detail-block__title">{service.title}</h2>
                    <p className="service-detail-block__desc">{service.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>

      <section className="services-page__cta">
        <div className="container">
          <AnimatedSection className="services-page__cta-content">
            <h3 className="services-page__cta-title">
              Have a specific project in mind? Let us talk.
            </h3>
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Get a Quote
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

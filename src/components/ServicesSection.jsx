import { Link } from "react-router-dom";
import AnimatedSection from "./ui/AnimatedSection";
import imgConstruction from "../images/3.jpeg";
import imgDesign from "../images/15.jpeg";
import imgEngineering from "../images/17.jpeg";
import "../styles/sections.css";

const SERVICES_PREVIEW = [
  {
    image: imgConstruction,
    title: "Construction & Execution",
    desc: "From foundation to finish, we deliver with precision, speed, and unwavering quality control on every site.",
  },
  {
    image: imgDesign,
    title: "Architecture & Design",
    desc: "High to low-density residential plans. Beautiful, functional spaces brought from concept to certified blueprint.",
  },
  {
    image: imgEngineering,
    title: "Structural Engineering",
    desc: "Rigorous structural analysis and detailed engineering drawings ensuring your build is fully safe and certified.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-preview section-padding">
      <div className="container">
        <AnimatedSection>
          <div className="services-preview__header">
            <span className="section-label">What We Do</span>
            <h2 className="display-heading services-preview__title">
              Integrated Construction Solutions
            </h2>
          </div>
        </AnimatedSection>

        <div className="services-preview__grid">
          {SERVICES_PREVIEW.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.15}>
              <div className="service-card-preview">
                <div className="service-card-preview__img-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-preview__img"
                  />
                </div>
                <div className="service-card-preview__content">
                  <h3 className="service-card-preview__title">{service.title}</h3>
                  <p className="service-card-preview__desc">{service.desc}</p>
                  <Link to="/services" className="service-card-preview__link">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

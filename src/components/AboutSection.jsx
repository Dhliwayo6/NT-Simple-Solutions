import { Link } from "react-router-dom";
import AnimatedSection from "./ui/AnimatedSection";
import aboutImg from "../images/8.jpeg";
import "../styles/sections.css";

export default function AboutSection() {
  return (
    <section className="about-preview section-padding">
      <div className="container">
        <div className="about-preview__grid">
          <AnimatedSection className="about-preview__image-col">
            <img
              src={aboutImg}
              alt="NT Simple Solutions Construction Team Site"
              className="about-preview__img"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="about-preview__content-col">
            <span className="about-preview__label">About Us</span>
            <h2 className="display-heading about-preview__title">
              One Team. Total Accountability.
            </h2>
            <p className="about-preview__text">
              We were founded on the principle of turning complex challenges into clear, deliverable outcomes. We merge expert architectural vision, rigorous structural engineering, proactive project management, and precise costing under one roof — so you deal with one team and one bill, not five separate firms.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

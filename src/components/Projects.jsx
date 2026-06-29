import { useNavigate } from "react-router-dom";
import AnimatedSection from "./ui/AnimatedSection";
import img1 from "../images/2.jpeg";
import img2 from "../images/3.jpeg";
import img3 from "../images/4.jpeg";
import img4 from "../images/5.jpeg";
import "../styles/sections.css";

const PREVIEW_PROJECTS = [
  { image: img1, title: "Foundation & Columns", category: "Residential" },
  { image: img2, title: "Brickwork Construction", category: "Residential" },
  { image: img3, title: "Commercial Framework", category: "Commercial" },
  { image: img4, title: "Concrete Slab Support", category: "Residential" },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects-preview section-padding">
      <div className="container">
        <AnimatedSection>
          <div className="projects-preview__header">
            <span className="section-label">Our Work</span>
            <h2 className="display-heading projects-preview__title">
              Our Work Speaks for Itself
            </h2>
          </div>
        </AnimatedSection>

        <div className="projects-preview__grid">
          {PREVIEW_PROJECTS.map((proj, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="project-card-preview" onClick={() => navigate("/projects")}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-card-preview__img"
                />
                <div className="project-card-preview__overlay">
                  <span className="project-card-preview__category">{proj.category}</span>
                  <h3 className="project-card-preview__title">{proj.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="projects-preview__cta-wrapper">
          <button className="btn-primary" onClick={() => navigate("/projects")}>
            Explore All Projects
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

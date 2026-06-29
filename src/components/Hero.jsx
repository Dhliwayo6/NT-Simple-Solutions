import { useNavigate } from "react-router-dom";
import heroBg from "../images/1.jpg";
import "../styles/Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__overlay" />
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Building Zimbabwe's Future
          </h1>
          <p className="hero__subheading">
            Architecture. Engineering. Construction. One team. One commitment.
          </p>
          <div className="hero__cta-group">
            <button className="btn-primary" onClick={() => navigate("/projects")}>
              View Our Projects
            </button>
            <button className="btn-outline btn-outline--white" onClick={() => navigate("/contact")}>
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

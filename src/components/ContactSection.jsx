import { useState } from "react";
import AnimatedSection from "./ui/AnimatedSection";
import { CONTACT_INFO } from "./../data/siteData";
import "./../styles/sections.css";

const SERVICES_OPTIONS = [
  "Construction & Execution",
  "Architecture & Design",
  "Structural Engineering",
  "Strategic Project Management",
  "Costing & Financial Control",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__grid">
        {/* Left — info */}
        <AnimatedSection>
          <span className="section-label">Get In Touch</span>
          <h2 className="contact__heading display-heading">
            LOOKING FORWARD TO HANDLING YOUR PROJECT
          </h2>
          <div className="contact__info-list">
          {CONTACT_INFO.map(({ icon, label, value, link }) => (
            <div key={label} className="contact__info-item">
              <div className="contact__info-icon">{icon}</div>
              <div>
                <div className="contact__info-label">{label}</div>
                <div className="contact__info-val">
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        </AnimatedSection>

        {/* Right — form */}
        <AnimatedSection delay={0.2}>
          <div className="contact__form-card">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3 className="contact__success-heading display-heading">
                  MESSAGE SENT!
                </h3>
                <p className="contact__success-text">
                  We'll be in touch shortly about your project.
                </p>
                <button className="btn-reset" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="contact__form-heading display-heading">
                  START YOUR PROJECT
                </h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-input"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-input"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+263 ..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Service Needed</label>
                  <select
                    className="form-select"
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details</label>
                  <textarea
                    className="form-textarea"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Tell us about your project…"
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

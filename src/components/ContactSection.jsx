import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedSection from "./ui/AnimatedSection";
import "../styles/sections.css";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "mdarzrqa";

const PROJECT_TYPES = [
  "Construction & Execution",
  "Architecture & Design",
  "Structural Engineering",
  "Strategic Project Management",
  "Costing & Financial Control",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [state, sendToFormspree, resetFormspree] = useForm(FORMSPREE_ID);

  // Clear local form data on success
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    }
  }, [state.succeeded]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await sendToFormspree(e);
  };

  const handleReset = () => {
    resetFormspree();
    setErrors({});
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact__grid">
          {/* Left — info */}
          <AnimatedSection className="contact__info-col">
            <span className="section-label">Contact Details</span>
            <h2 className="contact__heading display-heading">
              Looking forward to handling your project
            </h2>

            <div className="contact__info-list">
              {/* Address */}
              <a 
                href="https://maps.google.com/?q=NRZ+Building+Bulawayo+Zimbabwe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact__info-item contact__info-link-wrapper"
              >
                <div className="contact__info-icon" aria-hidden="true">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Address</div>
                  <div className="contact__info-val">
                    Suite 701, 7th Floor, NRZ Building, Bulawayo, Zimbabwe
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="contact__info-item">
                <div className="contact__info-icon" aria-hidden="true">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Phone</div>
                  <div className="contact__info-val">
                    <a href="tel:+263777666550">+263 777 666 550</a>
                    <span style={{ margin: "0 var(--space-2)", color: "var(--color-border)" }}>|</span>
                    <a href="tel:+263784250192">+263 784 250 192</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a 
                href="mailto:ntsimplesolutionsconstruction@gmail.com" 
                className="contact__info-item contact__info-link-wrapper"
              >
                <div className="contact__info-icon" aria-hidden="true">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-val">
                    ntsimplesolutionsconstruction@gmail.com
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/263777666550" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact__info-item contact__info-link-wrapper"
              >
                <div className="contact__info-icon" aria-hidden="true">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <div className="contact__info-label">WhatsApp</div>
                  <div className="contact__info-val">
                    Chat on WhatsApp
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/ntsimplesolutionsconstruction" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact__info-item contact__info-link-wrapper"
              >
                <div className="contact__info-icon" aria-hidden="true">
                  <FaInstagram size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Instagram</div>
                  <div className="contact__info-val">
                    @ntsimplesolutionsconstruction
                  </div>
                </div>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@ntsimplesolutions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact__info-item contact__info-link-wrapper"
              >
                <div className="contact__info-icon" aria-hidden="true">
                  <FaTiktok size={20} />
                </div>
                <div>
                  <div className="contact__info-label">TikTok</div>
                  <div className="contact__info-val">
                    @ntsimplesolutions
                  </div>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.2} className="contact__form-col">
            <div className="contact__form-card">
              {state.succeeded ? (
                <div className="form-success">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "var(--space-2)" }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="display-heading" style={{ color: "var(--color-white)" }}>Thank you — we will be in touch soon.</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)" }}>
                    Your quote request has been received. The NT Simple Solutions team typically responds within 1 business day.
                  </p>
                  <button className="btn-outline" onClick={handleReset}>
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="contact__form-heading display-heading">
                    Request a Quote
                  </h3>

                  {state.errors && state.errors.length > 0 && (
                    <div className="form-error-global">
                      Something went wrong. Please try again or contact us directly by phone.
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span id="name-error" className="field-error">
                        {errors.name}
                      </span>
                    )}
                    <ValidationError 
                      prefix="Name" 
                      field="name" 
                      errors={state.errors} 
                      className="field-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <span id="email-error" className="field-error">
                        {errors.email}
                      </span>
                    )}
                    <ValidationError 
                      prefix="Email" 
                      field="email" 
                      errors={state.errors} 
                      className="field-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Include country code (e.g., +263, +44, +1)"
                    />
                    <ValidationError 
                      prefix="Phone" 
                      field="phone" 
                      errors={state.errors} 
                      className="field-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="form-select"
                      value={formData.projectType}
                      onChange={handleChange}
                      aria-invalid={!!errors.projectType}
                      aria-describedby={errors.projectType ? "projectType-error" : undefined}
                    >
                      <option value="">Select a project type</option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <span id="projectType-error" className="field-error">
                        {errors.projectType}
                      </span>
                    )}
                    <ValidationError 
                      prefix="Project Type" 
                      field="projectType" 
                      errors={state.errors} 
                      className="field-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Tell us about your project *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      placeholder="Describe your project size, location, timeline..."
                    />
                    {errors.message && (
                      <span id="message-error" className="field-error">
                        {errors.message}
                      </span>
                    )}
                    <ValidationError 
                      prefix="Message" 
                      field="message" 
                      errors={state.errors} 
                      className="field-error"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Request a Quote"}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

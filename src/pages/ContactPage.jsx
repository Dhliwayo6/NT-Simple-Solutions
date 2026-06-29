import PageHero from "../components/ui/PageHero";
import Contact from "../components/ContactSection";

// Hero image import
import heroBg from "../images/5.jpeg";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHero
        label="Get in Touch"
        title="Get in Touch"
        subtitle="Tell us about your project and we will get back to you within one business day."
        bgImage={heroBg}
      />
      <Contact />
    </div>
  );
}

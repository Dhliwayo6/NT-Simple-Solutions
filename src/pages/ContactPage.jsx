import PageHero from "./../components/ui/PageHero";
import Contact from "./../components/ContactSection";
import Footer from "./../components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="START YOUR PROJECT"
        subtitle="Looking forward to handling your project. Reach out and let's build something great."
      />
      <Contact />
      <Footer />
    </>
  );
}

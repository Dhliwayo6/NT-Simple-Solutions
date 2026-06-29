import { useState, useEffect, useRef } from "react";
import PageHero from "../components/ui/PageHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import { GALLERY_IMAGES } from "../data/siteData";

// Hero image import
import heroBg from "../images/17.jpeg";

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const triggerRef = useRef(null);
  const lightboxRef = useRef(null);
  const closeButtonRef = useRef(null);

  const openLightbox = (index, e) => {
    // Save the element that triggered the lightbox for returning focus later
    triggerRef.current = e.currentTarget;
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    // Return focus to the element that opened the lightbox
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "Tab") {
      if (!lightboxRef.current) return;
      const focusable = lightboxRef.current.querySelectorAll("button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Focus the close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <div className="projects-page">
      <PageHero
        label="Our Work"
        title="Our Projects"
        subtitle="Real work. Real clients. Built to last."
        bgImage={heroBg}
      />

      <section className="projects-page__gallery">
        <div className="container">
          <AnimatedSection>
            <div className="gallery-grid">
              {GALLERY_IMAGES.map((image, idx) => (
                <button
                  key={idx}
                  className="gallery-item"
                  onClick={(e) => openLightbox(idx, e)}
                  aria-label={`Open image: ${image.caption}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-item__img"
                    loading="lazy"
                  />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__caption">{image.caption}</span>
                  </div>
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Custom Lightbox */}
      <div
        ref={lightboxRef}
        className={`lightbox ${activeIndex !== null ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
      >
        {activeIndex !== null && (
          <div className="lightbox__content">
            <button
              ref={closeButtonRef}
              className="lightbox__close-btn"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              &times;
            </button>

            <button
              className="lightbox__nav-btn lightbox__nav-btn--prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              &#10094;
            </button>

            <img
              src={GALLERY_IMAGES[activeIndex].src}
              alt={GALLERY_IMAGES[activeIndex].alt}
              className="lightbox__img"
            />

            <p className="lightbox__caption">
              {GALLERY_IMAGES[activeIndex].caption}
            </p>

            <button
              className="lightbox__nav-btn lightbox__nav-btn--next"
              onClick={nextImage}
              aria-label="Next image"
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

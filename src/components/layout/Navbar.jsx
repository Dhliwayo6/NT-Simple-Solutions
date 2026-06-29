import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          {/* Logo Brand */}
          <Link to="/" className="navbar__brand" aria-label="NT Simple Solutions Construction Home">
            <img src="/logo.png" alt="NT Simple Solutions Logo" className="navbar__logo-img" />
          </Link>

          {/* Desktop Links */}
          <nav className="navbar__desktop-nav" aria-label="Main navigation">
            <ul className="navbar__links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? "navbar__link--active" : ""}`
                    }
                    end={link.path === "/"}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className="btn-primary navbar__quote-btn" onClick={() => navigate("/contact")}>
              Get a Quote
            </button>
          </nav>

          {/* Hamburger Menu (Mobile) */}
          <button
            className={`navbar__hamburger ${isOpen ? "navbar__hamburger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="navbar__hamburger-bar"></span>
            <span className="navbar__hamburger-bar"></span>
            <span className="navbar__hamburger-bar"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`navbar-drawer ${isOpen ? "navbar-drawer--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="navbar-drawer__overlay" onClick={closeMenu} />
        <div className="navbar-drawer__content">
          <nav className="navbar-drawer__nav" aria-label="Mobile navigation">
            <ul className="navbar-drawer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar-drawer__link ${isActive ? "navbar-drawer__link--active" : ""}`
                    }
                    end={link.path === "/"}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-drawer__footer">
            <a href="tel:+263777666550" className="navbar-drawer__contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +263 777 666 550
            </a>
            <a href="https://wa.me/263777666550" target="_blank" rel="noopener noreferrer" className="navbar-drawer__contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Chat on WhatsApp
            </a>
            <button className="btn-primary navbar-drawer__quote-btn" onClick={() => { closeMenu(); navigate("/contact"); }}>
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

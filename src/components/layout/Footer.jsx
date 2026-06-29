import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__grid">
          {/* Column 1: Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <img src="/logo.png" alt="NT Simple Solutions Logo" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">"Simple Solutions to Real Life Problems"</p>
            <p className="footer__about-short">
              Providing premier construction, architectural design, and structural engineering services across Zimbabwe.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col footer__col--links">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer__col footer__col--contact">
            <h3 className="footer__title">Contact Info</h3>
            <address className="footer__address">
              <p className="footer__address-text">
                Suite 701, 7th Floor, NRZ Building, Bulawayo, Zimbabwe
              </p>
              <p>
                <a href="tel:+263777666550" className="footer__contact-link">
                  +263 777 666 550
                </a>
              </p>
              <p>
                <a href="tel:+263784250192" className="footer__contact-link">
                  +263 784 250 192
                </a>
              </p>
              <p>
                <a href="mailto:ntsimplesolutionsconstruction@gmail.com" className="footer__contact-link">
                  ntsimplesolutionsconstruction@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="footer__social-row">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__social-link"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://instagram.com/ntsimplesolutionsconstruction"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer__social-link"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://tiktok.com/@ntsimplesolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="footer__social-link"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://wa.me/263777666550"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="footer__social-link"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Copyright Bar */}
        <div className="footer__copyright-row">
          <p className="footer__copyright-text">
            &copy; 2025 NT Simple Solutions Construction. All rights reserved.
          </p>
          <a href="#" className="footer__privacy-link">
            {/* TODO: link to privacy page */}
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

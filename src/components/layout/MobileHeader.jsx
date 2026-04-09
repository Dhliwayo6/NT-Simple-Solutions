import { useNavigate } from "react-router-dom";
import "../../styles/MobileHeader.css";

const HamburgerIcon = ({ isOpen }) =>
  isOpen ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" width="22" height="22">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" width="22" height="22">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

export default function MobileHeader({ isOpen, onToggle }) {
  const navigate = useNavigate();

  return (
    <header className="mobile-header">
      <button
        className={`mobile-header__hamburger${isOpen ? " open" : ""}`}
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <HamburgerIcon isOpen={isOpen} />
      </button>

      <div
        className="mobile-header__brand"
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
      >
        <div className="mobile-header__logo-icon">
          <span />
          <span />
          <span />
        </div>
        <div>
          <div className="mobile-header__brand-name">
            <em>NT</em> Simple Solutions™
          </div>
          <div className="mobile-header__brand-sub">Construction</div>
        </div>
      </div>

      <button
        className="mobile-header__cta"
        onClick={() => navigate("/contact")}
        aria-label="Get a Quote"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" width="18" height="18">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
            A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012
            0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45
            2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45
            c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        <span>Quote</span>
      </button>
    </header>
  );
}

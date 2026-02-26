import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle the light 'scrolled' navbar when scrolled down 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case of page reload
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --brand-primary: #007BFF;
          --brand-secondary: #00E5FF;
          --brand-gradient: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
          --text-main: #ffffff;
          --text-muted: #e2e8f0; /* Brighter default text color for links */
          --glass-bg: rgba(5, 9, 20, 0.7); /* Deep cyber blue with transparency */
          --glass-border: rgba(255, 255, 255, 0.08);
        }

        /* ================= NAVBAR ================= */

        .navbar {
          position: fixed; /* Changed to fixed so hero sits beneath */
          top: 0;
          width: 100%;
          z-index: 1000;
          min-height: 80px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px) saturate(1.5);
          -webkit-backdrop-filter: blur(20px) saturate(1.5);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
          /* Removed transition per user request */
        }
        
        .navbar.scrolled {
          background: #ffffff;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 4%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          perspective: 1000px;
        }

        /* Animated glowing aura behind the logo */
        .logo-link::before {
          content: "";
          position: absolute;
          width: 140%;
          height: 140%;
          left: -20%;
          top: -20%;
          background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(255,255,255,0) 65%);
          z-index: -1;
          opacity: 0.6;
          transition: opacity 0.5s ease, transform 0.5s ease;
          border-radius: 50%;
          animation: ambientGlow 4s ease-in-out infinite alternate;
        }

        @keyframes ambientGlow {
          0% { transform: scale(0.9); opacity: 0.3; }
          100% { transform: scale(1.1); opacity: 0.7; }
        }

        .logo-link:hover {
          transform: translateY(-2px) scale(1.02);
        }

        .logo-link:hover::before {
          opacity: 1;
          transform: scale(1.3);
          animation-play-state: paused;
        }

        /* SYMBOL ENHANCEMENT */
        .logo-symbol-wrapper {
          width: 60px;
          height: 55px;
          overflow: hidden;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.08));
          transition: filter 0.4s ease;
        }

        .logo-link:hover .logo-symbol-wrapper {
          filter: drop-shadow(0 8px 16px rgba(99, 102, 241, 0.35));
        }

        .logo-symbol-wrapper img {
          height: 100%;
          width: auto;
          max-width: none;
          object-fit: contain;
          object-position: left center;
          transform: scale(1.1);
          transform-origin: center center;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          filter: contrast(1.08) saturate(1.1) brightness(1.02);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .logo-link:hover .logo-symbol-wrapper img {
          transform: scale(1.15);
        }

        /* CRISP HTML TEXT */
        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
          margin-left: 2px;
          transition: transform 0.3s ease;
        }

        .logo-link:hover .logo-text-wrapper {
          transform: translateX(2px);
          
        }

        .logo-text-top {
          font-size: 1.05rem;
          font-weight: 500;
          color: #e2e8f0;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .navbar.scrolled .logo-text-top {
          color: #334155;
        }

        .logo-link:hover .logo-text-top,
        .navbar.scrolled .logo-link:hover .logo-text-top {
          color: var(--brand-primary);
        }

        .logo-text-bottom {
          font-size: 1.25rem;
          font-weight: 800;
          /* Animated Gradient Shine */
          background: linear-gradient(
            to right,
            #ea580c 0%,
            #f97316 20%,
            #fb923c 40%,
            #f97316 60%,
            #ea580c 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          animation: shineFlow 5s linear infinite;
        }

        @keyframes shineFlow {
          to { background-position: 200% center; }
        }

        /* ================= MENU ================= */

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .navbar .nav-link {
          position: relative;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700; /* Increased weight for visibility */
          color: #ffffff;
          padding: 0.5rem 0;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          white-space: nowrap;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .navbar.scrolled .nav-link {
          color: #475569;
        }

        .navbar .nav-link:hover {
          color: #ffffff;
          text-shadow: 0 0 10px  #ffffff;
        }
        
        .navbar.scrolled .nav-link:hover {
          color: var(--brand-primary);
          text-shadow: none;
        }

        .navbar .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: var(--brand-gradient);
          transition: width 0.3s ease, left 0.3s ease;
          border-radius: 2px;
          box-shadow: 0 0 8px var(--brand-secondary);
        }

        .navbar .nav-link:hover::after {
          width: 100%;
          left: 0;
        }

        /* ================= DROPDOWN ================= */

        .dropdown {
          position: relative;
          padding: 1rem 0;
        }

        .dropdown-trigger {
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 700; /* Increased weight for visibility */
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .navbar.scrolled .dropdown-trigger {
          color: #475569;
        }

        .dropdown-trigger:hover {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(0, 123, 255, 0.6);
        }
        
        .navbar.scrolled .dropdown-trigger:hover {
          color: var(--brand-primary);
          text-shadow: none;
        }

        .arrow {
          font-size: 0.65rem;
          transition: transform 0.4s ease;
          opacity: 0.8;
        }

        .dropdown:hover .arrow {
          transform: rotate(180deg);
        }

        .dropdown::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 15px;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          min-width: 260px;
          background: rgba(10, 15, 30, 0.95);
          backdrop-filter: blur(25px);
          border-radius: 16px;
          padding: 0.75rem;
          border: 1px solid rgba(0, 229, 255, 0.2);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 123, 255, 0.05);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 999;
        }
        
        .navbar.scrolled .dropdown-menu {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }
        
        .navbar.scrolled .dropdown-menu a {
          color: Black;
        }

        .dropdown-menu a:hover,
        .navbar.scrolled .dropdown-menu a:hover {
          background: rgba(99, 102, 241, 0.06);
          color: var(--brand-primary);
          transform: translateX(6px);
        }

        /* ================= CTA BUTTON ================= */

        .contact-btn {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 0.68rem 1.8rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #0ea5ff 0%, #0f7bff 48%, #1ed8ff 100%);
          color: #fff !important;
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          box-shadow: 0 10px 26px rgba(14, 165, 255, 0.38), inset 0 0 0 1px rgba(255, 255, 255, 0.18);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.28s ease, box-shadow 0.28s ease, filter 0.28s ease;
        }

        .contact-btn::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0));
          opacity: 0.55;
          z-index: -1;
          pointer-events: none;
        }

        .contact-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(120deg, transparent 15%, rgba(255,255,255,0.38) 48%, transparent 82%);
          transform: translateX(-140%);
          transition: transform 0.75s ease;
          pointer-events: none;
        }

        .navbar.scrolled .contact-btn {
          color: #fff !important;
          box-shadow: 0 9px 22px rgba(14, 165, 255, 0.28), inset 0 0 0 1px rgba(255, 255, 255, 0.18);
        }

        .contact-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 14px 30px rgba(14, 165, 255, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.28);
          filter: saturate(1.1);
        }

        .contact-btn:hover::after {
          transform: translateX(140%);
        }
        
        .contact-btn:active {
          transform: translateY(0) scale(0.99);
        }

        /* ================= HAMBURGER MENU ================= */

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 8px;
          z-index: 1001;
        }

        .navbar .hamburger line {
          width: 26px;
          height: 2.5px;
          background: #ffffff;
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: block;
        }

        .hamburger.open line:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
          background: var(--brand-primary);
        }

        .hamburger.open line:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }

        .hamburger.open line:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -4px);
          background: var(--brand-primary);
        }
        
        .navbar.scrolled .hamburger line {
          background: #334155;
        }
        .navbar.scrolled .hamburger.open line:nth-child(1),
        .navbar.scrolled .hamburger.open line:nth-child(3) {
          background: var(--brand-primary);
        }

        /* ================= MOBILE MENU ================= */

        .mobile-menu {
          position: fixed;
          top: 76px;
          left: 0;
          width: 100%;
          min-height: calc(100vh - 76px);
          background: rgba(10, 15, 30, 0.98); /* Changed to dark cyber blue */
          backdrop-filter: blur(20px);
          display: none;
          flex-direction: column;
          padding: 2rem 6%;
          gap: 0.5rem;
          overflow-y: auto;
          z-index: 999;
          transform: translateY(-10px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .mobile-menu.open {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }

        .mobile-menu a, .mobile-menu .dropdown-trigger {
          padding: 1rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff; /* Explicitly white main links */
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08); /* Light subtle border */
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .mobile-menu a:hover, .mobile-menu .dropdown-trigger:hover {
          color: var(--brand-primary);
        }

        .mobile-dropdown-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.03);
          border-radius: 12px;
          margin-top: 0.5rem;
          border: 1px solid rgba(226, 232, 240, 0.6);
        }

        .mobile-dropdown-menu.open {
          display: flex;
          animation: slideDown 0.3s ease forwards;
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-dropdown-menu a {
          border: none;
          padding: 0.75rem 0;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .mobile-dropdown-menu a:hover {
          color: var(--brand-primary);
          padding-left: 8px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1024px) {
          .nav-menu {
            gap: 1.25rem;
          }
          .navbar .nav-link, .dropdown-trigger {
            font-size: 0.85rem;
          }
          .logo-symbol-wrapper {
            width: 65px;
            height: 48px;
          }
          .logo-text-top {
            font-size: 0.95rem;
          }
          .logo-text-bottom {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 4%;
          }
          
          .nav-menu {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .logo-symbol-wrapper {
            width: 60px;
            height: 44px;
          }

          .logo-text-top {
            font-size: 0.9rem;
          }
          
          .logo-text-bottom {
            font-size: 1rem;
          }

          .dropdown-menu {
            display: none !important;
          }
        }
      `}</style>

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* LOGO */}
          <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
            <div className="logo-symbol-wrapper">
              <img
                src="/images/glogo.png"
                alt="Galacticos Symbol"
              />
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-text-top">Galacticos</span>
              <span className="logo-text-bottom">Network</span>
            </div>
          </Link>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <line></line>
            <line></line>
            <line></line>
          </button>

          {/* NAV */}
          <nav className="nav-menu">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/about-us">ABOUT US</Link>

            <div className="dropdown">
              <div className="dropdown-trigger">
                SERVICES <span className="arrow">▼</span>
              </div>

              <div className="dropdown-menu">
                <Link to="/services/application-engineering">Application Engineering</Link>
                <Link to="/services/cloud">Cloud Solutions</Link>
                <Link to="/services/devops">DevOps & Automation</Link>
                <Link to="/services/data-engineering">Data Engineering</Link>
                <Link to="/services/cloud-saas">Cloud SaaS</Link>
                <Link to="/services/quality-engineering">Quality Engineering</Link>
                <Link to="/services/ui-ux">UX / UI Design</Link>
                <Link to="/services/mobility">Mobility</Link>
                <Link to="/services/erp">ERP </Link>
              </div>
            </div>

            <Link className="nav-link" to="/investors">EXPERTISE</Link>
            <Link className="nav-link" to="/careers">CAREERS</Link>
            <Link className="nav-link contact-btn" to="/contact">CONTACT US</Link>
          </nav>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about-us" className="nav-link" onClick={() => setMenuOpen(false)}>ABOUT US</Link>

          <div className="dropdown">
            <div
              className="dropdown-trigger"
              onClick={() => {
                const el = document.querySelector('.mobile-dropdown-menu');
                el?.classList.toggle('open');
              }}
            >
              SERVICES <span className="arrow">▼</span>
            </div>
            <div className="mobile-dropdown-menu">
              <Link to="/services/application-engineering" onClick={() => setMenuOpen(false)}>Application Engineering</Link>
              <Link to="/services/cloud" onClick={() => setMenuOpen(false)}>Cloud Solutions</Link>
              <Link to="/services/devops" onClick={() => setMenuOpen(false)}>DevOps & Automation</Link>
              <Link to="/services/data-engineering" onClick={() => setMenuOpen(false)}>Data Engineering</Link>
              <Link to="/services/cloud-saas" onClick={() => setMenuOpen(false)}>Cloud SaaS</Link>
              <Link to="/services/quality-engineering" onClick={() => setMenuOpen(false)}>Quality Engineering</Link>
              <Link to="/services/ui-ux" onClick={() => setMenuOpen(false)}>UX / UI Design</Link>
              <Link to="/services/mobility" onClick={() => setMenuOpen(false)}>Mobility</Link>
              <Link to="/services/erp" onClick={() => setMenuOpen(false)}>ERP</Link>
            </div>
          </div>

          <Link to="/investors" className="nav-link" onClick={() => setMenuOpen(false)}>EXPERTISE</Link>
          <Link to="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>CAREERS</Link>
          <Link to="/contact" className="contact-btn" style={{ textAlign: 'center', marginTop: '10px' }} onClick={() => setMenuOpen(false)}>CONTACT US</Link>
        </div>
      </header>
    </>
  );
}

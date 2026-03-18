import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --brand-primary: rgb(3, 14, 27);
          --brand-secondary: rgb(1, 16, 18);
          --brand-gradient: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
          --text-dark: #222222;
          --text-muted: #555555;
          --bg-white: #ffffff;
          --border-light: rgba(0, 0, 0, 0.08);
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          min-height: 80px;
          background: var(--bg-white);
          border-bottom: 1px solid var(--border-light);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
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

        /* --- LOGO STYLING --- */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          flex-shrink: 0;
          position: relative;
          perspective: 1000px;
        }

        .logo-link::before {
          content: "";
          position: absolute;
          width: 140%;
          height: 140%;
          left: -20%;
          top: -20%;
          background: radial-gradient(circle, rgba(0,123,255,0.1) 0%, rgba(255,255,255,0) 65%);
          z-index: -1;
          opacity: 0.4;
          border-radius: 50%;
          animation: ambientGlow 4s ease-in-out infinite alternate;
        }

        @keyframes ambientGlow {
          0% { transform: scale(0.9); opacity: 0.2; }
          100% { transform: scale(1.1); opacity: 0.5; }
        }

        .logo-symbol-wrapper {
          width: 60px;
          height: 55px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .logo-symbol-wrapper img {
          height: 100%;
          width: auto;
          object-fit: contain;
          filter: contrast(1.08) saturate(1.1) brightness(1.02);
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
        }

        .logo-text-top {
          font-size: 1.05rem;
          font-weight: 500;
          color: #666666;
        }

        .logo-text-bottom {
          font-size: 1.25rem;
          font-weight: 800;
          background: linear-gradient(to right, #ea580c 0%, #f97316 20%, #fb923c 40%, #f97316 60%, #ea580c 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shineFlow 5s linear infinite;
        }

        @keyframes shineFlow { to { background-position: 200% center; } }

        /* --- DESKTOP NAV --- */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .navbar .nav-link, .dropdown-trigger {
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
        }

        .navbar .nav-link:hover, .navbar .nav-link.active, .dropdown-trigger:hover {
          color: #ea580c;
        }

        .dropdown { position: relative; }

        @media (min-width: 769px) {
          .dropdown { padding: 1rem 0; }
          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            min-width: 260px;
            background: #ffffff;
            border-radius: 12px;
            padding: 0.75rem;
            border: 1px solid var(--border-light);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            opacity: 0;
            visibility: hidden;
            transition: 0.3s;
          }
          .dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }
          .dropdown-menu a {
            display: block;
            padding: 0.7rem 1rem;
            color: var(--text-dark);
            text-decoration: none;
            font-size: 0.9rem;
            border-radius: 6px;
          }
          .dropdown-menu a:hover { background: #fdf2f2; color: #ea580c; }
        }

        /* --- HAMBURGER --- */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .hamburger line {
          width: 26px;
          height: 2.5px;
          background: var(--text-dark);
          transition: 0.3s;
        }

        .hamburger.open line:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.open line:nth-child(2) { opacity: 0; }
        .hamburger.open line:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

        /* --- MOBILE MENU --- */
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          height: calc(100vh - 80px);
          background: #ffffff;
          display: none;
          flex-direction: column;
          padding: 1.5rem 6%;
          z-index: 999;
          overflow-y: auto;
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu .nav-link, 
        .mobile-menu .dropdown-trigger {
          padding: 1rem 0;
          font-size: 1.1rem;
          font-weight: 700;
          border-bottom: 1px solid var(--border-light);
          color: var(--text-dark);
          display: block;
          text-decoration: none;
        }

        .mobile-dropdown-menu {
          display: none;
          flex-direction: column;
          background: #fafafa;
          padding-left: 1.2rem;
        }

        .mobile-dropdown-menu.open { display: flex; }

        .mobile-dropdown-menu a {
          padding: 0.8rem 0;
          font-size: 0.95rem;
          color: var(--text-muted);
          text-decoration: none;
          border-bottom: 1px solid #f0f0f0;
        }

        @media (max-width: 768px) {
          .nav-menu { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <header className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
            <div className="logo-symbol-wrapper">
              <img src="/images/glogo.png" alt="Galacticos" />
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-text-top">Galacticos</span>
              <span className="logo-text-bottom">Network</span>
            </div>
          </NavLink>

          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <line></line><line></line><line></line>
          </button>

          <nav className="nav-menu">
            <NavLink className="nav-link" to="/" end>HOME</NavLink>
            <NavLink className="nav-link" to="/about-us">ABOUT US</NavLink>
            <div className="dropdown">
              <div className="dropdown-trigger">SERVICES ▼</div>
              <div className="dropdown-menu">
                <NavLink to="/services/application-engineering">Application Engineering</NavLink>
                <NavLink to="/services/cloud">Cloud Solutions</NavLink>
                <NavLink to="/services/devops">DevOps & Automation</NavLink>
                <NavLink to="/services/data-engineering">Data Engineering</NavLink>
                <NavLink to="/services/cloud-saas">Cloud SaaS</NavLink>
                <NavLink to="/services/quality-engineering">Quality Engineering</NavLink>
                <NavLink to="/services/ui-ux">UX / UI Design</NavLink>
                <NavLink to="/services/mobility">Mobility</NavLink>
                <NavLink to="/services/erp">ERP</NavLink>
              </div>
            </div>
            <NavLink className="nav-link" to="/expertise">EXPERTISE</NavLink>
            <NavLink className="nav-link" to="/careers">CAREERS</NavLink>
            <NavLink className="nav-link" to="/contact">CONTACT US</NavLink>
          </nav>
        </div>

        {/* Mobile Menu Content */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)} end>HOME</NavLink>
          <NavLink to="/about-us" className="nav-link" onClick={() => setMenuOpen(false)}>ABOUT US</NavLink>

          <div className="dropdown">
            <div className="dropdown-trigger" onClick={() => document.querySelector('.mobile-dropdown-menu')?.classList.toggle('open')}>
              SERVICES ▼
            </div>
            <div className="mobile-dropdown-menu">
              <NavLink to="/services/application-engineering" onClick={() => setMenuOpen(false)}>Application Engineering</NavLink>
              <NavLink to="/services/cloud" onClick={() => setMenuOpen(false)}>Cloud Solutions</NavLink>
              <NavLink to="/services/devops" onClick={() => setMenuOpen(false)}>DevOps & Automation</NavLink>
              <NavLink to="/services/data-engineering" onClick={() => setMenuOpen(false)}>Data Engineering</NavLink>
              <NavLink to="/services/cloud-saas" onClick={() => setMenuOpen(false)}>Cloud SaaS</NavLink>
              <NavLink to="/services/quality-engineering" onClick={() => setMenuOpen(false)}>Quality Engineering</NavLink>
              <NavLink to="/services/ui-ux" onClick={() => setMenuOpen(false)}>UX / UI Design</NavLink>
              <NavLink to="/services/mobility" onClick={() => setMenuOpen(false)}>Mobility</NavLink>
              <NavLink to="/services/erp" onClick={() => setMenuOpen(false)}>ERP</NavLink>
            </div>
          </div>

          <NavLink to="/expertise" className="nav-link" onClick={() => setMenuOpen(false)}>EXPERTISE</NavLink>
          <NavLink to="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>CAREERS</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>
        </div>
      </header>
    </>
  );
}
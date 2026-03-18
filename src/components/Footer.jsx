import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const footerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const el = footerRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <footer ref={footerRef} className="gn-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        :root {
          --footer-bg: #030014;
          --footer-line: rgba(255, 255, 255, 0.1);
          --footer-line-bright: rgba(255, 255, 255, 0.2);
          --text-glow: 0 0 10px rgba(255,255,255,0.3);
          --footer-text-primary: #ffffff;
          --footer-text-secondary: #94a3b8;
          --footer-text-muted: #64748b;
          --footer-accent-1: #06b6d4;  /* Cyan */
          --footer-accent-2: #3b82f6;  /* Blue */
          --footer-accent-3: #8b5cf6;  /* Purple */
          --footer-accent-4: #ec4899;  /* Pink */
        }

        .gn-footer {
          background: var(--footer-bg);
          color: var(--footer-text-primary);
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--footer-line);
        }

        /* Ambient cursor glow */
        .gn-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            800px circle at ${mousePos.x}% ${mousePos.y}%,
            rgba(6, 182, 212, 0.15) 0%,
            rgba(139, 92, 246, 0.1) 30%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 1;
          transition: background 0.1s ease;
        }

        /* Animated glowing orbs */
        .gn-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          z-index: 0;
          animation: floatOrb 20s infinite ease-in-out alternate;
        }
        .gn-orb-1 {
          top: -10%; left: -5%; width: 400px; height: 400px;
          background: var(--footer-accent-3);
          animation-delay: 0s;
        }
        .gn-orb-2 {
          bottom: -10%; right: -5%; width: 500px; height: 500px;
          background: var(--footer-accent-1);
          animation-delay: -5s;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, 50px) scale(1.1); }
        }

        /* Architectural grid */
        .gn-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
          z-index: 0;
        }

        .gn-inner {
          position: relative;
          z-index: 2;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0;
          width: 100%;
        }

        /* ── HERO ROW — 1px top/bottom padding ── */
        .gn-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1px 26px 1px;
          border-bottom: 1px solid var(--footer-line);
          gap: 1px;
        }

        .gn-wordmark-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--footer-accent-1);
          margin: 0 0 1px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .gn-wordmark-label::before {
          content: '';
          width: 30px;
          height: 1px;
          background: var(--footer-accent-1);
        }

        .gn-wordmark-name {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -1px;
          color: #ffffff;
          margin: 0 0 1px 0;
          padding: 0;
          display: block;
          text-shadow: 0 0 30px rgba(255,255,255,0.2);
          white-space: nowrap;
        }

        .gn-wordmark-name span {
          background: linear-gradient(135deg, var(--footer-accent-1), var(--footer-accent-3));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gn-tagline {
          width: 100%;
          margin: 0;
          text-align: center;
        }

        .gn-tagline p {
          font-size: 16px;
          font-weight: 400;
          color: var(--footer-text-secondary);
          line-height: 1.65;
          margin: 0;
          width: 100%;
        }

        .gn-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #ffffff;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--footer-line-bright);
          backdrop-filter: blur(10px);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 13px 24px;
          border-radius: 30px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
          vertical-align: top;
        }

        .gn-cta-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--footer-accent-1), var(--footer-accent-2));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .gn-cta-link:hover {
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
        }

        .gn-cta-link:hover::before { opacity: 1; }
        .gn-cta-link span, .gn-cta-link svg { position: relative; z-index: 1; text-shadow: var(--text-glow); }
        .gn-cta-link svg { transition: transform 0.3s ease; }
        .gn-cta-link:hover svg { transform: translateX(5px); }

        /* ── MAIN COLUMNS ── */
        .gn-cols {
          display: grid;
          grid-template-columns: 2fr 1fr 1.6fr 1.2fr;
          gap: 0;
          border-bottom: 1px solid var(--footer-line);
          background: transparent;
          backdrop-filter: none;
        }

        .gn-col {
          padding: 24px 26px;
          border-right: none;
        }

        .gn-col:last-child { border-right: none; }

        .gn-col-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }

        .gn-col-head-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--footer-line-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--footer-accent-1);
        }

        .gn-col-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--footer-text-primary);
          margin: 0;
        }

        .gn-about-desc {
          font-size: 14px;
          font-weight: 400;
          color: var(--footer-text-secondary);
          line-height: 1.65;
          margin: 0 0 22px;
        }

        .gn-socials {
          display: flex;
          gap: 12px;
        }

        .gn-social {
          width: 44px;
          height: 44px;
          border: 1px solid var(--footer-line-bright);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--footer-text-primary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255,255,255,0.02);
          position: relative;
          overflow: hidden;
        }

        .gn-social::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--footer-accent-3), var(--footer-accent-4));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gn-social:hover {
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
        }

        .gn-social:hover::before { opacity: 1; }
        .gn-social svg { position: relative; z-index: 1; width: 18px; height: 18px; }

        .gn-nav {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .gn-nav li + li { margin-top: 8px; }

        .gn-nav a {
          text-decoration: none;
          color: var(--footer-text-secondary);
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 0;
          transition: all 0.3s ease;
        }

        .gn-nav a .nav-arrow {
          color: var(--footer-accent-1);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gn-nav a:hover { 
          color: var(--footer-text-primary); 
          text-shadow: var(--text-glow);
          transform: translateX(5px);
        }

        .gn-nav a:hover .nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .gn-services {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .gn-service-item {
          text-decoration: none;
          padding: 12px 16px;
          border: 1px solid var(--footer-line);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255,255,255,0.02);
          position: relative;
          overflow: hidden;
        }

        .gn-service-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gn-service-item:hover { 
          border-color: var(--footer-accent-1);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .gn-service-item:hover::before { opacity: 1; }

        .gn-service-icon {
          font-size: 18px;
          line-height: 1;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.3));
        }

        .gn-service-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--footer-text-secondary);
          transition: color 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .gn-service-item:hover .gn-service-label { 
          color: var(--footer-text-primary); 
          text-shadow: var(--text-glow);
        }

        .gn-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gn-stat {
          position: relative;
          padding-left: 20px;
        }

        .gn-stat::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--footer-accent-1), transparent);
        }

        .gn-stat-num {
          font-size: 34px;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, var(--footer-text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 4px;
        }
        
        .gn-stat-label {
          font-size: 13px;
          color: var(--footer-text-secondary);
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ── BOTTOM BAR — 1px top/bottom padding ── */
        .gn-bottom {
          padding: 1px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .gn-bottom-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .gn-copyright {
          font-size: 13px;
          font-weight: 500;
          color: var(--footer-text-muted);
          letter-spacing: 1px;
        }

        .gn-dot-divider {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--footer-text-muted);
          opacity: 0.5;
        }

        .gn-legal {
          display: flex;
          gap: 24px;
        }

        .gn-legal a {
          font-size: 13px;
          font-weight: 500;
          color: var(--footer-text-muted);
          text-decoration: none;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .gn-legal a:hover { 
          color: var(--footer-accent-1); 
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.4);
        }

        .gn-status {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: var(--footer-text-primary);
          letter-spacing: 1px;
          padding: 8px 16px;
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.2);
          border-radius: 20px;
        }

        .gn-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 12px rgba(74, 222, 128, 0.6);
          animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 12px rgba(74, 222, 128, 0.6); }
          50% { transform: scale(1.2); opacity: 0.7; box-shadow: 0 0 20px rgba(74, 222, 128, 0.8); }
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .gn-cols { grid-template-columns: 1.5fr 1fr 1.5fr; }
          .gn-col:first-child { grid-column: 1 / -1; }
        }

        @media (max-width: 900px) {
          .gn-cols { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .gn-cols { grid-template-columns: 1fr; }
          .gn-col { padding: 22px 26px; }
          .gn-hero, .gn-bottom { padding-left: 26px; padding-right: 26px; }
          .gn-wordmark-name { 
            font-size: 36px; 
            white-space: normal;
          }
          .gn-tagline p {
            white-space: normal;
          }
        }
      `}</style>

      <div className="gn-grid-bg" />
      <div className="gn-orb gn-orb-1" />
      <div className="gn-orb gn-orb-2" />

      <div className="gn-inner">
        {/* HERO SECTION */}
        <div className="gn-hero">
          <h2 className="gn-wordmark-name">
            Galacticos <span>Network</span>
          </h2>

          <div className="gn-tagline">
            <p>
              A global technology consulting partner delivering cloud, data, and intelligent automation
              through offshore delivery excellence.
            </p>
          </div>

          <Link to="/contact" className="gn-cta-link">
            <span>Talk to Our Experts</span>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* MAIN COLUMNS */}
        <div className="gn-cols">
          {/* About */}
          <div className="gn-col">
            <div className="gn-col-head">
              <div className="gn-col-head-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="gn-col-title">About</h4>
            </div>
            <p className="gn-about-desc">
              We bridge the gap between strategy and execution — pairing certified engineers
              with a delivery model built for scale, speed, and precision.
            </p>
            <div className="gn-socials">
              <a href="https://www.linkedin.com/company/galacticos-network/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="gn-social" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com/galacticosnetwork" target="_blank" rel="noopener noreferrer" className="gn-social" aria-label="X / Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://facebook.com/galacticosnetwork" target="_blank" rel="noopener noreferrer" className="gn-social" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="gn-col">
            <div className="gn-col-head">
              <div className="gn-col-head-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h4 className="gn-col-title">Company</h4>
            </div>
            <ul className="gn-nav">
              {[
                { to: '/about-us', label: 'About Us' },
                { to: '/expertise', label: 'Expertise' },
                { to: '/careers', label: 'Careers' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>
                    <svg className="nav-arrow" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Area */}
          <div className="gn-col">
            <div className="gn-col-head">
              <div className="gn-col-head-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="gn-col-title">Focus Area</h4>
            </div>
            <div className="gn-services">
              {[
                { to: '/services/cloud', icon: '☁️', label: 'Cloud Solutions' },
                { to: '/services/devops', icon: '⚙️', label: 'DevOps Engineering' },
                { to: '/services/data-engineering', icon: '🤖', label: 'AI & Data Science' },
                { to: '/services/erp', icon: '🏢', label: 'ERP Services' },
                { to: '/services/ui-ux', icon: '🎨', label: 'UX/UI Design' },
              ].map(({ to, icon, label }) => (
                <Link key={to} to={to} className="gn-service-item">
                  <span className="gn-service-icon">{icon}</span>
                  <span className="gn-service-label">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="gn-col">
            <div className="gn-col-head">
              <div className="gn-col-head-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 className="gn-col-title">By the Numbers</h4>
            </div>
            <div className="gn-stats">
              <div className="gn-stat">
                <div className="gn-stat-num">25+</div>
                <div className="gn-stat-label">Global Clients</div>
              </div>
              <div className="gn-stat">
                <div className="gn-stat-num">98%</div>
                <div className="gn-stat-label">Client Retention</div>
              </div>
              <div className="gn-stat">
                <div className="gn-stat-num">12×</div>
                <div className="gn-stat-label">Faster Time-to-Deploy</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="gn-bottom">
          <div className="gn-bottom-left">
            <span className="gn-copyright">© {currentYear} Galacticos Network</span>
            <div className="gn-dot-divider" />
            <div className="gn-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
          <div className="gn-status">
            <div className="gn-status-dot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
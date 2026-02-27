import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="cp-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-root {
          font-family: 'Inter', sans-serif;
          background: #03080f;
          min-height: 100vh;
          color: #fff;
          overflow-x: hidden;
          position: relative;
        }
        .cp-root::before {
          content: '';
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 55% 50% at 0% 0%, rgba(99,102,241,0.1) 0%, transparent 65%),
            radial-gradient(ellipse 45% 45% at 100% 100%, rgba(14,165,233,0.08) 0%, transparent 65%);
        }

        /* ── HERO ── */
        .cp-hero {
          position: relative; z-index: 2;
          padding: 100px 8% 80px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column;
        }

        .cp-hero-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 28px;
          display: flex; align-items: center; gap: 12px;
        }
        .cp-hero-label::before {
          content: '';
          display: inline-block; width: 32px; height: 1px;
          background: rgba(255,255,255,0.25);
        }

        .cp-hero h1 {
          font-size: 42px;
          font-weight: 700; line-height: 1.2;
          letter-spacing: -0.5px; color: #fff;
          max-width: 700px; margin-bottom: 32px;
        }
        .cp-hero h1 em {
          font-style: normal;
          background: linear-gradient(90deg, #818cf8, #38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .cp-hero-meta {
          display: flex; gap: 40px; flex-wrap: wrap;
        }
        .cp-meta-item {
          display: flex; flex-direction: column; gap: 4px;
        }
        .cp-meta-key {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .cp-meta-val {
          font-size: 16px; font-weight: 400;
          color: rgba(255,255,255,0.75);
        }

        /* ── BODY ── */
        .cp-body {
          position: relative; z-index: 1;
          padding: 60px 8%;
        }
        .cp-body p {
          font-size: 16px; line-height: 1.7;
          color: rgba(255,255,255,0.5);
          max-width: 780px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .cp-hero { padding: 70px 6% 60px; }
          .cp-hero h1 { font-size: 32px; }
          .cp-body { padding: 52px 6%; }
        }
        @media (max-width: 580px) {
          .cp-hero { padding: 60px 5% 50px; }
          .cp-body { padding: 40px 5%; }
        }
      `}</style>

      {/* HERO */}
      <header className="cp-hero">
        
        <h1>Cookie <em>Policy</em></h1>
        <div className="cp-hero-meta">
          <div className="cp-meta-item">
            <span className="cp-meta-key">Entity</span>
            <span className="cp-meta-val">Galacticos Network</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="cp-body">
        <p>
          This website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionalities of the site. We use both session and persistent cookies for essential site operations and analytics. Third-party services may also set cookies for advertising or analytics purposes.
        </p>
      </div>

    </div>
  );
}
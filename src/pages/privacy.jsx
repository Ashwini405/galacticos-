import React, { useEffect, useRef, useState } from 'react';

const sections = [
  {
    id: 'information-we-collect',
    num: '01',
    title: 'Information We Collect',
    body: 'We may collect and process the following categories of personal data:',
    list: [
      'Name, email address, phone number, company name, and other details submitted through contact or inquiry forms',
      'Business information shared for service discussions or proposals',
      'Technical data such as IP address, browser type, device information, and operating system',
      'Usage data including pages visited, time spent on the website, and interaction patterns',
      'Communication data when you contact us via email, forms, or other channels',
    ],
  },
  {
    id: 'how-we-use',
    num: '02',
    title: 'How We Use Your Information',
    body: 'Your information is used for the following purposes:',
    list: [
      'To respond to inquiries and provide requested services',
      'To improve our website, solutions, and user experience',
      'To analyze website performance and usage trends',
      'To communicate with you about our services, insights, or updates',
      'To maintain security and prevent unauthorized access or misuse',
      'To comply with legal and regulatory obligations',
    ],
  },
  {
    id: 'legal-basis',
    num: '03',
    title: 'Legal Basis for Processing',
    body: 'We process your personal data based on one or more of the following:',
    list: [
      'Your consent',
      'Performance of a contract or pre-contractual request',
      'Compliance with legal obligations',
      'Legitimate business interests such as improving our services and security',
    ],
  },
  {
    id: 'data-sharing',
    num: '04',
    title: 'Data Sharing and Disclosure',
    body: 'We do not sell your personal data. We may share your information with trusted third-party service providers who support our business operations, such as cloud hosting, analytics, CRM, and communication platforms. These parties are contractually obligated to protect your data and use it only for the intended purpose. We may also disclose your information if required by law, regulation, or legal process.',
  },
  {
    id: 'international-transfers',
    num: '05',
    title: 'International Data Transfers',
    body: 'As a global digital services organization, your data may be processed in locations outside your country. We ensure that such transfers are protected by appropriate safeguards and applicable data protection laws.',
  },
  {
    id: 'data-security',
    num: '06',
    title: 'Data Security',
    body: 'We implement industry-standard technical and organizational security measures to protect your data against unauthorized access, loss, misuse, or alteration.',
  },
  {
    id: 'data-retention',
    num: '07',
    title: 'Data Retention',
    body: 'We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, contractual, and business requirements.',
  },
  {
    id: 'your-rights',
    num: '08',
    title: 'Your Rights',
    body: 'Depending on applicable laws, you may have the right to:',
    list: [
      'Access the personal data we hold about you',
      'Request correction or deletion of your data',
      'Withdraw consent at any time',
      'Object to or restrict certain processing activities',
      'Request data portability',
    ],
  },
  {
    id: 'cookies',
    num: '09',
    title: 'Cookies and Tracking Technologies',
    body: 'Our website uses cookies and similar technologies to enhance user experience and analyze performance. For more details, please refer to our Cookie Policy.',
  },
  {
    id: 'third-party-links',
    num: '10',
    title: 'Third-Party Links',
    body: 'Our website may contain links to external websites. We are not responsible for the privacy practices or content of such third-party sites.',
  },
  {
    id: 'updates',
    num: '11',
    title: 'Updates to This Policy',
    body: 'We may update this Privacy Policy from time to time to reflect changes in legal, technical, or business developments. The updated version will be posted on this page with the revised effective date.',
  },
];

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [scrollPct, setScrollPct] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(pct, 100));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="tc-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tc-root {
          font-family: 'Inter', sans-serif;
          background: radial-gradient(ellipse 120% 80% at 50% 0%, #0f0826 0%, #060d1f 40%, #03080f 70%, #0a0415 100%);
          min-height: 100vh;
          color: #ffffff;
          position: relative;
          overflow-x: hidden;
        }

        .tc-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
          pointer-events: none; z-index: 0;
        }

        .tc-root::after {
          content: '';
          position: fixed; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 5% 10%, rgba(99,102,241,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 95% 90%, rgba(14,165,233,0.1) 0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }

        .tc-progress {
          position: fixed; top: 0; left: 0; height: 2px; z-index: 100;
          background: linear-gradient(90deg, #6366f1, #0ea5e9, #a78bfa);
          transition: width 0.1s linear;
        }

        /* ── HERO ── */
        .tc-hero {
          position: relative; z-index: 2;
          padding: 100px 8% 80px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column;
        }

        .tc-hero-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 28px;
          display: flex; align-items: center; gap: 12px;
        }
        .tc-hero-label::before {
          content: '';
          display: inline-block; width: 32px; height: 1px;
          background: rgba(255,255,255,0.25);
        }

        .tc-hero h1 {
          font-size: 42px; font-weight: 700;
          line-height: 1.2; letter-spacing: -0.5px;
          color: #ffffff; max-width: 700px; margin-bottom: 32px;
        }
        .tc-hero h1 em {
          font-style: normal;
          background: linear-gradient(90deg, #818cf8, #38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .tc-hero-meta { display: flex; gap: 40px; flex-wrap: wrap; }
        .tc-meta-item { display: flex; flex-direction: column; gap: 4px; }
        .tc-meta-key {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .tc-meta-val { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.75); }

        /* ── LAYOUT ── */
        .tc-body {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 260px 1fr;
          max-width: 1300px; margin: 0 auto;
          padding: 0 4%; gap: 0; align-items: start;
        }

        /* Sidebar */
        .tc-sidebar {
          position: sticky; top: 100px;
          padding: 60px 0 60px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .tc-sidebar-title {
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 24px; padding-right: 32px;
        }
        .tc-nav { list-style: none; }
        .tc-nav li { position: relative; }
        .tc-nav-btn {
          display: flex; align-items: center; gap: 12px;
          width: 100%; background: none; border: none;
          cursor: pointer; padding: 9px 32px 9px 0;
          text-align: left; transition: all 0.2s ease;
        }
        .tc-nav-num {
          font-size: 10px; font-weight: 600;
          color: rgba(255,255,255,0.2);
          font-variant-numeric: tabular-nums;
          min-width: 20px; transition: color 0.2s;
        }
        .tc-nav-text {
          font-size: 13px; font-weight: 400;
          color: rgba(255,255,255,0.35);
          transition: color 0.2s; line-height: 1.4;
        }
        .tc-nav-btn:hover .tc-nav-text { color: rgba(255,255,255,0.7); }
        .tc-nav-btn:hover .tc-nav-num  { color: rgba(255,255,255,0.5); }
        .tc-nav li.active .tc-nav-text { color: #ffffff; font-weight: 500; }
        .tc-nav li.active .tc-nav-num  { color: #818cf8; }
        .tc-nav li.active::before {
          content: '';
          position: absolute; left: -1px; top: 50%;
          transform: translateY(-50%);
          width: 2px; height: 70%;
          background: linear-gradient(180deg, #6366f1, #38bdf8);
          border-radius: 2px;
        }

        /* Content */
        .tc-content { padding: 60px 0 60px 72px; }

        .tc-intro {
          margin-bottom: 64px; padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .tc-intro p {
          font-size: 16px; line-height: 1.7;
          color: rgba(255,255,255,0.6); margin-bottom: 20px;
        }
        .tc-intro p:last-child { margin-bottom: 0; }
        .tc-intro strong { color: #ffffff; font-weight: 600; }

        .tc-section {
          padding: 52px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative; scroll-margin-top: 120px;
        }
        .tc-section:last-of-type { border-bottom: none; }

        .tc-section-head {
          display: flex; align-items: flex-start; gap: 28px; margin-bottom: 28px;
        }
        .tc-section-num {
          font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.18); padding-top: 5px;
          min-width: 28px; font-variant-numeric: tabular-nums;
        }
        .tc-section-title {
          font-size: 16px; font-weight: 600; color: #ffffff;
          letter-spacing: -0.01em; line-height: 1.4; position: relative;
        }
        .tc-section-title::after {
          content: ''; display: block; margin-top: 10px;
          width: 32px; height: 2px;
          background: linear-gradient(90deg, #6366f1, transparent); border-radius: 2px;
        }

        .tc-section p {
          font-size: 16px; line-height: 1.7;
          color: rgba(255,255,255,0.55); padding-left: 56px;
        }
        .tc-section strong { color: #e2e8f0; font-weight: 600; }

        .tc-list { list-style: none; padding-left: 56px; margin-top: 20px; }
        .tc-list li {
          font-size: 16px; line-height: 1.7;
          color: rgba(255,255,255,0.5); margin-bottom: 12px;
          display: flex; align-items: flex-start; gap: 14px;
        }
        .tc-list li::before {
          content: ''; display: block; flex-shrink: 0;
          width: 5px; height: 5px; border-radius: 50%;
          background: #6366f1; margin-top: 9px;
        }

        /* Footer note */
        .tc-footer-note {
          position: relative; z-index: 2;
          margin: 0 auto; max-width: 1300px;
          padding: 48px 4% 80px;
          display: flex; align-items: center; gap: 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .tc-footer-note-bar {
          width: 3px; height: 60px; flex-shrink: 0;
          background: linear-gradient(180deg, #6366f1, #38bdf8); border-radius: 3px;
        }
        .tc-footer-note p {
          font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.45);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .tc-body { grid-template-columns: 1fr; }
          .tc-sidebar { display: none; }
          .tc-content { padding: 40px 0; }
          .tc-hero { padding: 70px 6% 60px; }
          .tc-hero h1 { font-size: 32px; }
          .tc-footer-note { padding: 40px 6% 60px; }
        }
        @media (max-width: 580px) {
          .tc-hero { padding: 60px 5% 50px; }
          .tc-section p, .tc-list { padding-left: 36px; }
        }
      `}</style>

      <div className="tc-progress" style={{ width: `${scrollPct}%` }} />

      {/* Hero */}
      <header className="tc-hero">
        
        <h1>Privacy <em>Policy</em></h1>
        <div className="tc-hero-meta">
          <div className="tc-meta-item">
            <span className="tc-meta-key">Entity</span>
            <span className="tc-meta-val">Galacticos Network</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="tc-body">

        {/* Sidebar */}
        <aside className="tc-sidebar">
          <div className="tc-sidebar-title">Contents</div>
          <ul className="tc-nav">
            {sections.map(s => (
              <li key={s.id} className={activeId === s.id ? 'active' : ''}>
                <button className="tc-nav-btn" onClick={() => scrollTo(s.id)}>
                  <span className="tc-nav-num">{s.num}</span>
                  <span className="tc-nav-text">{s.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="tc-content">

          <div className="tc-intro">
            <p>
              At <strong>Galacticos Network</strong>, we are committed to protecting your privacy and ensuring transparency in how your personal data is collected, used, and safeguarded. This Privacy Policy explains how we handle your information when you interact with our website, services, and digital platforms.
            </p>
            <p>By using our website, you consent to the practices described in this policy.</p>
          </div>

          {sections.map(s => (
            <section key={s.id} id={s.id} className="tc-section">
              <div className="tc-section-head">
                <span className="tc-section-num">{s.num}</span>
                <h2 className="tc-section-title">{s.title}</h2>
              </div>
              <p>{s.body}</p>
              {s.list && (
                <ul className="tc-list">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

        </main>
      </div>

      {/* Footer note */}
      <div className="tc-footer-note">
        <div className="tc-footer-note-bar" />
        <p>
          If you have any questions about this Privacy Policy or how your data is handled, please contact us through the contact information provided on our website.
        </p>
      </div>

    </div>
  );
}
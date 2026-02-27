


import React, { useEffect, useRef, useState } from "react";

export default function CaseStudiesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ========== ENHANCED SVG ILLUSIONS ==========
  const renderIllusion = (category) => {
    const iconStyle = { width: "120px", height: "120px", zIndex: 2 };
    switch (category) {
      case "Cloud":
        return (
          <div className="illusion-container">
            <div className="icon-glow blue-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <defs>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <path className="float-anim" d="M30 60 Q30 45 45 45 Q55 30 70 40 Q85 40 85 55 Q95 60 85 75 L30 75 Q15 75 15 60 Z" fill="url(#cloudGrad)" />
              <circle cx="50" cy="55" r="3" fill="#fff" className="pulse-fast" />
            </svg>
          </div>
        );
      case "SAP":
        return (
          <div className="illusion-container">
            <div className="icon-glow purple-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="spin-slow" style={{ transformOrigin: '50% 50%' }}>
                <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#a78bfa" strokeWidth="2.5" transform="rotate(45 50 50)" />
                <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#818cf8" strokeWidth="2.5" transform="rotate(-45 50 50)" />
                <circle cx="50" cy="50" r="12" fill="#6366f1" />
                <circle cx="50" cy="50" r="6" fill="#fff" />
              </g>
            </svg>
          </div>
        );
      case "Hyperion":
        return (
          <div className="illusion-container">
            <div className="icon-glow amber-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="float-anim">
                <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" fill="none" stroke="#fbbf24" strokeWidth="3" />
                <path d="M50 20 L50 80 M20 35 L80 65 M80 35 L20 65" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
                <circle cx="50" cy="50" r="8" fill="#f59e0b" />
              </g>
            </svg>
          </div>
        );
      case "Automation":
        return (
          <div className="illusion-container">
            <div className="icon-glow green-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4" className="spin-slow" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#4ade80" strokeWidth="3" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
              <circle cx="50" cy="50" r="6" fill="#fff" className="pulse-fast" />
            </svg>
          </div>
        );
      case "AI / ML":
        return (
          <div className="illusion-container">
            <div className="icon-glow pink-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="pulse-slow">
                <circle cx="25" cy="50" r="6" fill="#f472b6" />
                <circle cx="75" cy="50" r="6" fill="#6366f1" />
                <circle cx="50" cy="25" r="6" fill="#a855f7" />
                <circle cx="50" cy="75" r="6" fill="#a855f7" />
                <path d="M25 50 L50 25 L75 50 L50 75 Z" fill="none" stroke="#fff" strokeWidth="2" />
                <circle cx="50" cy="50" r="12" fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth="1" />
              </g>
            </svg>
          </div>
        );
      case "Talent":
        return (
          <div className="illusion-container">
            <div className="icon-glow orange-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="float-anim">
                <circle cx="50" cy="40" r="12" fill="#fb923c" />
                <path d="M30 80 Q50 60 70 80" fill="none" stroke="#fb923c" strokeWidth="5" strokeLinecap="round" />
                <circle cx="25" cy="60" r="5" fill="#f97316" />
                <circle cx="75" cy="60" r="5" fill="#f97316" />
              </g>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const caseStudies = [
    { title: "Cloud Migration & Cost Optimization", category: "Cloud", desc: "Migrated 200+ legacy apps to AWS/Azure for a global bank. Reduced infrastructure costs by 40%.", link: "/case-study/digital-transformation" },
    { title: "SAP S/4HANA Transformation", category: "SAP", desc: "End-to-end implementation for a multinational manufacturer. Real-time supply chain visibility.", link: "/case-study/life-sciences-innovation" },
    { title: "Oracle Hyperion Modernization", category: "Hyperion", desc: "Consolidated financial planning for a Fortune 500 retail group. Cut close time by 50%.", link: "/case-study/financial-services-modernization" },
    { title: "Intelligent Healthcare Automation", category: "Automation", desc: "Deployed UiPath bots for a healthcare payer. Automated 70% of claims processing.", link: "/case-study/hedge-fund-platforms" },
    { title: "AI-Powered Demand Forecasting", category: "AI / ML", desc: "Predictive analytics for a leading retail chain. Improved forecast accuracy by 25%.", link: "/case-study/genai-enablement" },
    { title: "Strategic Staffing Solutions", category: "Talent", desc: "Rapidly onboarded 50+ certified professionals for a global SI in 4 weeks.", link: "/case-study/smarter-business-solutions" },
  ];

  return (
    <section className="case-section" ref={sectionRef} style={{ "--mouse-x": `${mousePos.x}%`, "--mouse-y": `${mousePos.y}%` }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        .case-section {
          padding: 100px 6%;
          position: relative;
          background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Overlay to darken background slightly for better readability */
        .case-section::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(4, 7, 20, 0.4);
          z-index: 0;
        }

        .case-header {
          position: relative;
          z-index: 5;
          text-align: center;
          margin-bottom: 80px;
        }

        .case-title {
          font-size: clamp(34px, 5vw, 52px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .case-title span {
          background: linear-gradient(90deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .case-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
        }

        .case-card:hover {
          transform: translateY(-12px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .case-img-container {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: rgba(0, 0, 0, 0.2);
        }

        .icon-glow {
          position: absolute;
          width: 80px;
          height: 80px;
          filter: blur(40px);
          opacity: 0.4;
          z-index: 1;
        }
        .blue-glow { background: #3b82f6; }
        .purple-glow { background: #a855f7; }
        .amber-glow { background: #f59e0b; }
        .green-glow { background: #22c55e; }
        .pink-glow { background: #ec4899; }
        .orange-glow { background: #f97316; }

        .case-category {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 10;
        }

        .case-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.2));
        }

        .case-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .case-content p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .case-link {
          margin-top: auto;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .case-link:hover {
          background: #fff;
          color: #000;
          transform: scale(1.05);
        }

        /* Animations */
        @keyframes float { 0% { transform: translateY(-8px); } 100% { transform: translateY(8px); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0% { opacity: 0.5; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }

        .float-anim { animation: float 3s ease-in-out infinite alternate; }
        .spin-slow { animation: spin 12s linear infinite; }
        .pulse-fast { animation: pulse 1.5s ease-in-out infinite alternate; }
        .pulse-slow { animation: pulse 3s ease-in-out infinite alternate; }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }

        @media (max-width: 1024px) {
          .case-section {
            padding: 80px 5%;
            background-attachment: scroll;
          }

          .case-header {
            margin-bottom: 56px;
          }

          .case-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .case-content {
            padding: 24px;
          }

          .case-content h3 {
            font-size: 20px;
          }
        }

        @media (max-width: 768px) {
          .case-section {
            padding: 64px 16px;
            background-attachment: scroll;
            min-height: auto;
          }

          .case-header {
            margin-bottom: 36px;
          }

          .case-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .case-card {
            border-radius: 18px;
          }

          .case-card:hover {
            transform: translateY(-6px);
          }

          .case-img-container {
            height: 170px;
          }

          .case-category {
            top: 14px;
            left: 14px;
            font-size: 10px;
            padding: 4px 10px;
          }

          .illusion-container svg {
            width: 96px !important;
            height: 96px !important;
          }

          .icon-glow {
            width: 64px;
            height: 64px;
            filter: blur(28px);
          }

          .case-content {
            padding: 18px;
          }

          .case-content h3 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          .case-content p {
            font-size: 14px;
            line-height: 1.55;
            margin-bottom: 18px;
          }

          .case-link {
            width: 100%;
            justify-content: center;
            padding: 11px 14px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .case-section {
            padding: 52px 12px;
          }

          .case-title {
            letter-spacing: -0.4px;
          }

          .case-header p {
            font-size: 14px;
            margin-top: 8px !important;
            line-height: 1.5;
          }

          .case-img-container {
            height: 156px;
          }

          .case-content h3 {
            font-size: 17px;
          }

          .case-content p {
            font-size: 13px;
          }
        }
      `}</style>

      <div className={`case-header reveal ${isVisible ? 'active' : ''}`}>
        <h2 className="case-title">Real Transformations, <span>Proven Results</span></h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '10px' }}>
          Delivering excellence through certified expertise and strategic innovation.
        </p>
      </div>

      <div className="case-grid">
        {caseStudies.map((item, index) => (
          <div className={`case-card reveal ${isVisible ? 'active' : ''}`} key={item.title} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="case-img-container">
              <span className="case-category">{item.category}</span>
              {renderIllusion(item.category)}
            </div>
            <div className="case-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="case-link" href={item.link}>
                Read case study <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
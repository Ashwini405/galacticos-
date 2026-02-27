import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HireAITalent() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      obs.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hire-ai-enhanced"
      style={{ '--mouse-x': `${mousePos.x}%`, '--mouse-y': `${mousePos.y}%` }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .hire-ai-enhanced {
          position: relative;
          background: linear-gradient(180deg, #fbfdff 0%, #f2f7ff 50%, #edf4ff 100%);
          padding: 40px 6% 100px; /* Reduced top padding */
          color: #0f172a;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Dynamic Spotlight Follower */
        .hire-ai-enhanced::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(79, 70, 229, 0.18) 0%, rgba(129, 140, 248, 0.09) 22%, transparent 48%);
          z-index: 2;
          pointer-events: none;
        }

        /* The Neural Mesh Background */
        .neural-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          opacity: 0.4;
          z-index: 1;
          pointer-events: none;
        }

        .mesh-sphere {
          animation: rotateMesh 40s linear infinite;
          transform-origin: center;
          filter: drop-shadow(0 0 26px rgba(129, 140, 248, 0.32));
        }

        @keyframes rotateMesh {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.1); }
        }

        .hire-ai-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .hire-ai-content {
          text-align: center;
          margin-bottom: 80px;
        }

        /* Floating Badge */
        .hire-ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          color: #4f46e5;
          border: 1px solid rgba(79, 70, 229, 0.25);
          box-shadow: 0 10px 24px rgba(79, 70, 229, 0.1);
        }

        .hire-ai-title {
          font-size: clamp(40px, 6vw, 64px);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .hire-ai-title span {
          background: linear-gradient(to right, #818cf8, #c084fc, #818cf8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textFlow 4s linear infinite;
        }

        @keyframes textFlow {
          to { background-position: 200% center; }
        }

        .hire-ai-description {
          font-size: 18px;
          color: #475569;
          max-width: 650px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }

        /* Glass CTA */
        .hire-ai-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #4f46e5;
          color: white;
          padding: 18px 44px;
          border-radius: 16px;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 20px 40px -10px rgba(79, 70, 229, 0.4);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .hire-ai-cta:hover {
          transform: translateY(-5px) scale(1.02);
          background: #6366f1;
          box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.6);
        }

        /* Stats Grid - Glass Cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 32px 24px;
          border: 1px solid rgba(148, 163, 184, 0.25);
          transition: all 0.4s ease;
          position: relative;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
        }

        .stat-item:hover {
          background: rgba(255, 255, 255, 0.98);
          border-color: rgba(79, 70, 229, 0.35);
          transform: translateY(-8px);
        }

        .stat-icon-box {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(192, 132, 252, 0.12));
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #4f46e5;
          border: 1px solid rgba(79, 70, 229, 0.25);
        }

        .stat-number {
          font-size: 38px;
          font-weight: 800;
          color: #0f172a;
          display: block;
          margin-bottom: 4px;
        }

        .stat-label {
          color: #334155;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Entrance Animations */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr; }
          .neural-bg { width: 400px; height: 400px; }
        }
      `}</style>

      {/* Abstract Neural Mesh SVG */}
      <div className="neural-bg">
        <svg viewBox="0 0 200 200" className="mesh-sphere">
          <defs>
            <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.22" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#meshGrad)" strokeWidth="0.5">
            {/* Geometric Lines for Sphere Mesh */}
            <circle cx="100" cy="100" r="80" strokeOpacity="0.2" />
            <path d="M20,100 Q100,20 180,100 T20,100" />
            <path d="M100,20 Q180,100 100,180 T100,20" />
            <path d="M43,43 L157,157" />
            <path d="M43,157 L157,43" />
            <ellipse cx="100" cy="100" rx="80" ry="30" />
            <ellipse cx="100" cy="100" rx="30" ry="80" />
            {/* Floating Nodes */}
            {[43, 100, 157].map((x, i) => [43, 100, 157].map((y, j) => (
              <circle key={`${i}-${j}`} cx={x} cy={y} r="1.5" fill="#818cf8" opacity="0.5">
                <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" begin={`${(i + j) * 0.5}s`} />
              </circle>
            )))}
          </g>
        </svg>
      </div>

      <div className="hire-ai-container">
        <div className={`hire-ai-content reveal ${isVisible ? 'active' : ''}`}>
          <div className="hire-ai-badge">
            <span className="pulse-dot" style={{ width: 8, height: 8, background: '#818cf8', borderRadius: '50%', boxShadow: '0 0 10px #818cf8' }}></span>
            Enterprise Capability Augmentation
          </div>

          <h2 className="hire-ai-title">
            Strengthen Your Enterprise Programs <br />
            <span>with Advanced AI & Data Specialists</span>
          </h2>

          <p className="hire-ai-description">
            We provide enterprise-ready AI and data specialists who integrate seamlessly into your SAP, cloud,
            and digital transformation initiatives. Our experts bring practical experience in machine learning,
            data engineering, and intelligent automation—focused on delivering measurable business outcomes.
          </p>

          <Link to="/contact" className="hire-ai-cta">
            Begin Your Deployment
            <span className="cta-arrow">→</span>
          </Link>
        </div>

        <div className="stats-grid">
          {[ { num: '50+', label: 'Elite AI Architects', icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.32 0 2.57.255 3.717.72m9.571 2.753c-2.772 1.744-6.054 2.753-9.571 2.753-3.517 0-6.799-1.009-9.571-2.753M9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z' }, { num: '24/7', label: 'Global Operation', icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' }, { num: '99%', label: 'Project Success', icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' }, { num: '48h', label: 'Match Guarantee', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' } ].map((stat, i) => (
            <div
              key={i}
              className={`stat-item reveal ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="stat-icon-box">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 30, height: 30 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
              </div>
              <span className="stat-number">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
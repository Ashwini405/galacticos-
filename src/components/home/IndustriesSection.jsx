


import React, { useEffect, useRef, useState } from "react";

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
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

  return (
    <section
      ref={sectionRef}
      className="ultra-section"
      style={{ "--mouse-x": `${mousePos.x}%`, "--mouse-y": `${mousePos.y}%` }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        .ultra-section {
          position: relative;
          background: radial-gradient(circle at top left, #17274eff 0%, #04082b 60%);
          color: #fff;
          padding: 50px 6%;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* NEW: SVG Background Illusion */
        .svg-illusion {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.15;
          pointer-events: none;
        }

        .neural-line {
          stroke: #6366f1;
          stroke-dasharray: 100;
          animation: drawLine 15s linear infinite;
        }

        @keyframes drawLine {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        /* Dynamic Cursor Glow */
        .ultra-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x) var(--mouse-y),
          rgba(99,102,241,0.15) 0%, transparent 40%);
          z-index: 1;
          pointer-events: none;
        }

        /* Floating Particles */
        .particles span {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #6366f1;
          border-radius: 50%;
          opacity: 0.4;
          z-index: 2;
          animation: float 12s infinite ease-in-out alternate;
        }

        .particles span:nth-child(1){ top:20%; left:15%; animation-delay:0s;}
        .particles span:nth-child(2){ top:60%; left:80%; animation-delay:2s;}
        .particles span:nth-child(3){ top:40%; left:50%; animation-delay:4s;}
        .particles span:nth-child(4){ top:70%; left:25%; animation-delay:6s;}

        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(-40px); }
        }

        .container {
          position: relative;
          z-index: 5;
          max-width: 1300px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Reveal Animation */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16,1,0.3,1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .tag {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #818cf8;
          margin-bottom: 20px;
        }

        .title {
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #6366f1, #c084fc, #6366f1);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: flow 6s linear infinite;
        }

        @keyframes flow {
          to { background-position: 200% center; }
        }

        .desc {
          color: #94a3b8;
          font-size: 18px;
          line-height: 1.6;
          max-width: 500px;
        }

        /* Cards */
        .cards {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .card {
          position: relative;
          padding: 35px;
          border-radius: 26px;
          backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 26px;
          padding: 1px;
          background: linear-gradient(120deg,#6366f1,#c084fc,#6366f1);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 60px rgba(99,102,241,0.3);
        }

        .card h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .card p {
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.6;
        }

        @media(max-width:1024px){
          .container{ grid-template-columns:1fr; text-align:center;}
          .desc{ margin:auto;}
        }
      `}</style>

      {/* NEW: SVG NEURAL NETWORK ILLUSION */}
      <svg className="svg-illusion" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path className="neural-line" d="M0,200 Q250,100 500,200 T1000,200" fill="none" strokeWidth="1" />
        <path className="neural-line" d="M0,500 Q250,400 500,500 T1000,500" fill="none" strokeWidth="1" style={{ animationDelay: '-2s' }} />
        <path className="neural-line" d="M0,800 Q250,700 500,800 T1000,800" fill="none" strokeWidth="1" style={{ animationDelay: '-4s' }} />
        <circle cx="250" cy="150" r="2" fill="#818cf8" />
        <circle cx="750" cy="150" r="2" fill="#818cf8" />
        <circle cx="500" cy="500" r="3" fill="#818cf8" />
        <circle cx="250" cy="750" r="2" fill="#818cf8" />
        <circle cx="750" cy="450" r="2" fill="#818cf8" />
      </svg>

      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className={`reveal ${isVisible ? "active" : ""}`}>
          <div className="tag">Engagement Models</div>
          <h2 className="title">
            Flexible Engagement Models <br />
            <span className="gradient-text">Built for Enterprise-Scale Transformation</span>
          </h2>
          <p className="desc">
            Our engagement models are designed to support complex SAP, cloud, and digital transformation programs.
            We offer flexible structures that align with your governance, budget, and long-term strategic objectives—ensuring
            delivery accountability and measurable value.
          </p>
        </div>

        <div className="cards">
          <div className={`card reveal ${isVisible ? "active" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <h3>Professional Services</h3>
            <p>Specialized consultants supporting critical SAP, cloud, and transformation initiatives with defined scope and governance.</p>
          </div>

          <div className={`card reveal ${isVisible ? "active" : ""}`} style={{ transitionDelay: "0.4s" }}>
            <h3>Managed Services</h3>
            <p>End-to-end ownership of application support, optimization, and continuous improvement under defined SLAs and performance metrics.</p>
          </div>

          <div className={`card reveal ${isVisible ? "active" : ""}`} style={{ transitionDelay: "0.6s" }}>
            <h3>Dedicated Centers</h3>
            <p>Dedicated delivery centers structured around your enterprise roadmap, aligned to governance standards and long-term capability expansion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
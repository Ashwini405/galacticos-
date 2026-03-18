import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Globe, Shield, Database, Activity, Lock, Layers, BarChart2, Cpu, Cloud, TrendingUp, Users } from "lucide-react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  ComposedChart,
  ResponsiveContainer
} from "recharts";

// Data generator for the live-moving effect
const generateData = () =>
  Array.from({ length: 15 }, (_, i) => ({
    name: i,
    val: Math.floor(Math.random() * 400) + 200,
    val2: Math.floor(Math.random() * 200) + 150
  }));

export default function PremiumVanguardHero() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [data, setData] = useState(generateData());

  // Real-time data movement
  useEffect(() => {
    const jitter = setInterval(() => {
      setData(prev => prev.map(item => ({
        ...item,
        val: Math.max(100, item.val + (Math.random() * 80 - 40)),
        val2: Math.max(50, item.val2 + (Math.random() * 50 - 25))
      })));
    }, 1800);
    return () => clearInterval(jitter);
  }, []);

  const slides = useMemo(() => [
    {
      label: "SAP_S4HANA_CORE",
      title: "Building the Intelligent Digital Core for Enterprises",
      subtitle: "End-to-end SAP S/4HANA transformation programs modernizing finance, supply chain, and operational ecosystems.",
      color: "#007BFF",
      features: [
        { icon: <Database strokeWidth={1.5} size={20} />, text: "SAP S/4HANA Implementation" },
        { icon: <Layers strokeWidth={1.5} size={20} />, text: "Process Optimization" },
        { icon: <Shield strokeWidth={1.5} size={20} />, text: "Governance & Compliance" },
        { icon: <Globe strokeWidth={1.5} size={20} />, text: "Global Rollouts" }
      ],
      badges: [
        { text: "Digital Core Modernization", top: "6%", right: "5%" },
        { text: "Enterprise Ready", bottom: "8%", left: "6%" }
      ],
      chart: (d) => (
        <AreaChart data={d} margin={{ top: 14, right: 10, left: 10, bottom: 4 }}>
          <Area type="monotone" dataKey="val" stroke="#007BFF" strokeWidth={2} fillOpacity={0.2} />
          <Line type="monotone" dataKey="val2" stroke="#FF00AA" strokeWidth={1.5} dot={false} />
        </AreaChart>
      )
    },
    {
      label: "CLOUD_TRANSFORMATION",
      title: "Scalable Cloud Migration & Modernization",
      subtitle: "Strategic migration to AWS, Azure, and GCP with cost governance, DevSecOps integration, and resilient infrastructure design.",
      color: "#00E5FF",
      features: [
        { icon: <Cloud strokeWidth={1.5} size={20} />, text: "Multi-Cloud Strategy" },
        { icon: <Shield strokeWidth={1.5} size={20} />, text: "Security First Design" },
        { icon: <Activity strokeWidth={1.5} size={20} />, text: "DevSecOps Integration" },
        { icon: <BarChart2 strokeWidth={1.5} size={20} />, text: "Cost Optimization" }
      ],
      badges: [
        { text: "Optimized TCO", top: "10%", left: "6%" },
        { text: "Cloud Native Ready", bottom: "8%", right: "6%" }
      ],
      chart: (d) => (
        <BarChart data={d} margin={{ top: 14, right: 10, left: 10, bottom: 4 }}>
          <Bar dataKey="val" fill="#00E5FF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="val2" fill="rgba(112,0,255,0.4)" radius={[4, 4, 0, 0]} />
        </BarChart>
      )
    },
    {
      label: "DATA_AI_PLATFORM",
      title: "Enterprise Data Platforms & AI Acceleration",
      subtitle: "Designing modern data architectures that enable real-time analytics, executive dashboards, and AI-driven decision intelligence.",
      color: "#39FF14",
      features: [
        { icon: <Database strokeWidth={1.5} size={20} />, text: "Data Architecture" },
        { icon: <Cpu strokeWidth={1.5} size={20} />, text: "AI Enablement" },
        { icon: <BarChart2 strokeWidth={1.5} size={20} />, text: "Advanced Analytics" },
        { icon: <Globe strokeWidth={1.5} size={20} />, text: "Enterprise Scale" }
      ],
      badges: [
        { text: "AI Driven Insights", top: "8%", right: "4%" },
        { text: "Executive Dashboards", bottom: "8%", left: "5%" }
      ],
      chart: (d) => (
        <LineChart data={d} margin={{ top: 14, right: 10, left: 10, bottom: 4 }}>
          <Line type="monotone" dataKey="val" stroke="#39FF14" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="val2" stroke="rgba(255,255,255,0.3)" strokeWidth={2} dot={false} />
        </LineChart>
      )
    },
    {
      label: "ENTERPRISE_SECURITY",
      title: "Zero-Trust Security & Risk-Controlled Operations",
      subtitle: "Strengthening enterprise resilience through secure architectures, compliance alignment, and 24x7 monitoring frameworks.",
      color: "#7000FF",
      features: [
        { icon: <Shield strokeWidth={1.5} size={20} />, text: "Zero Trust Architecture" },
        { icon: <Lock strokeWidth={1.5} size={20} />, text: "Regulatory Compliance" },
        { icon: <Activity strokeWidth={1.5} size={20} />, text: "24x7 Monitoring" },
        { icon: <Layers strokeWidth={1.5} size={20} />, text: "Risk Mitigation" }
      ],
      badges: [
        { text: "SOC & Governance", top: "8%", right: "10%" },
        { text: "Enterprise Resilience", bottom: "8%", left: "5%" }
      ],
      chart: (d) => (
        <ComposedChart data={d} margin={{ top: 14, right: 10, left: 10, bottom: 4 }}>
          <Area type="monotone" dataKey="val" fill="rgba(112, 0, 255, 0.25)" stroke="#7000FF" strokeWidth={3} />
          <Line type="monotone" dataKey="val2" stroke="#fff" strokeWidth={2} dot={false} />
        </ComposedChart>
      )
    }
  ], []);

  const next = useCallback(() => setActive(p => (p + 1) % slides.length), [slides.length]);
  const prev = () => setActive(p => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .h-root {
          position: relative;
          height: 105vh;
          width: 100%;
          padding-top: 80px;
          background: hsl(225, 86%, 3%);
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          color: white;
          display: flex;
          align-items: center;
        }

        /* ---------------------------------
           BACKGROUND GLOWS & PARTICLES
           --------------------------------- */
        .h-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.35;
          z-index: 0;
          animation: breatheGlow 10s infinite alternate;
        }

        .glow-1 { top: 0%; left: 10%; width: 50vw; height: 50vh; background: rgba(0, 123, 255, 0.5); }
        .glow-2 { bottom: 0%; right: 10%; width: 50vw; height: 50vh; background: rgba(255, 0, 170, 0.4); }

        @keyframes breatheGlow {
          from { transform: scale(1); opacity: 0.25; }
          to { transform: scale(1.1); opacity: 0.45; }
        }

        /* ---------------------------------
           CIRCUIT BACKGROUND (SVG)
           --------------------------------- */
        .h-circuit-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .circuit-line {
          fill: none;
          stroke-width: 2;
          opacity: 0.7;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawCircuit 12s infinite linear;
        }

        .circuit-line.magenta { stroke: #FF00AA; filter: drop-shadow(0 0 10px #FF00AA); }
        .circuit-line.cyan { stroke: #00E5FF; filter: drop-shadow(0 0 10px #00E5FF); }

        @keyframes drawCircuit {
          0% { stroke-dashoffset: 1000; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1000; }
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image: 
            radial-gradient(circle at center, rgba(255,255,255,0.8) 0, rgba(255,255,255,0) 2px),
            radial-gradient(circle at center, rgba(255,255,255,0.6) 0, rgba(255,255,255,0) 1.5px);
          background-size: 100px 100px, 150px 150px;
          background-position: 0 0, 50px 50px;
          opacity: 0.25;
          animation: particleDrift 80s linear infinite;
        }

        @keyframes particleDrift {
          to { background-position: 1000px 1000px, 1050px 1050px; }
        }

        /* ---------------------------------
           SLIDER LAYOUT
           --------------------------------- */
        .h-slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 10;
        }

        .h-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6%;
          padding: 0 6% 60px 4%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.8s ease, visibility 0.8s, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          transform: translateY(20px);
        }

        .h-slide.active { 
          opacity: 1; 
          visibility: visible;
          transform: translateY(0);
        }

        /* ---------------------------------
           LEFT COL: VISUALIZATION — NO CARD, NO TRANSPARENCY
           --------------------------------- */
        .h-viz-col {
          flex: 1.3;
          max-width: 850px;
          aspect-ratio: 1;
          position: relative;
        }

        .h-glass-card {
          width: 100%;
          height: 100%;
          /* All card effects removed: no background, no border, no blur, no shadow */
          background: transparent;
          border: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          padding: 32px;               /* keep inner spacing for chart */
          position: relative;
          overflow: hidden;
          z-index: 2;
        }

        .h-glass-content {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 3;
        }

        /* Badge Pills — remain floating */
        .h-badge {
          position: absolute;
          background: rgba(14, 25, 45, 0.9);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          padding: 10px 22px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 700;
          backdrop-filter: blur(10px);
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          animation: floatBadge 4s ease-in-out infinite alternate;
          white-space: nowrap;
        }

        @keyframes floatBadge {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }

        /* ---------------------------------
           RIGHT COL: CONTENT
           --------------------------------- */
        .h-text-col {
          flex: 1.1;
          max-width: 700px;
        }

        .h-label {
          color: #007BFF;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: block;
          text-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
        }

        .h-text-col h1 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 24px;
          color: #fff;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }

        .h-text-col p {
          color: #94A3B8;
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 600px;
          text-wrap: balance;
        }

        /* Features Grid */
        .h-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px 40px;
          margin-bottom: 50px;
        }

        .h-feature {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 1rem;
          font-weight: 600;
          color: #E2E8F0;
        }

        .h-feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* CTA Button */
        .h-btn {
          color: #fff;
          border: none;
          padding: 18px 42px;
          border-radius: 100px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .h-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          z-index: -1;
          transition: 0.5s;
        }

        .h-btn:hover {
          transform: translateY(-3px);
          filter: brightness(1.2);
        }

        .h-btn:hover::before {
          transform: translateX(100%);
        }

        /* ---------------------------------
           NAVIGATION (Bottom Left)
           --------------------------------- */
        .h-nav-controls {
          position: absolute;
          bottom: 50px;
          left: 10%;
          display: flex;
          align-items: center;
          gap: 25px;
          z-index: 20;
        }

        .h-dots {
          display: flex;
          gap: 12px;
        }

        .h-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .h-dot.active {
          background: #007BFF;
          box-shadow: 0 0 15px #007BFF;
          transform: scale(1.3);
        }

        .h-arrows {
          display: flex;
          gap: 12px;
          margin-left: 20px;
        }

        .h-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
          backdrop-filter: blur(5px);
        }

        .h-arrow:hover {
          background: #007BFF;
          border-color: #007BFF;
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0,123,255,0.4);
        }

        /* Bottom right decorative spark */
        .h-spark {
          position: absolute;
          bottom: 40px;
          right: 50px;
          color: rgba(255,255,255,0.4);
          z-index: 10;
          animation: pulseSpark 4s infinite alternate;
        }

        @keyframes pulseSpark {
          to { transform: scale(1.2); opacity: 0.8; }
        }

        /* ---------------------------------
           RESPONSIVE
           --------------------------------- */
        @media (max-width: 1200px) {
          .h-slide { gap: 5%; padding: 0 5%; }
          .h-text-col h1 { font-size: 3.5rem; }
          .h-viz-col { max-width: 620px; }
        }

        @media (max-width: 1024px) {
          .h-slide { flex-direction: column-reverse; padding: 100px 5% 60px; gap: 40px; text-align: center; }
          .h-viz-col { max-width: 520px; width: 100%; aspect-ratio: auto; height: 430px; }
          .h-text-col { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
          .h-features { text-align: left; }
          .h-label { margin-bottom: 15px; }
          .h-text-col h1 { font-size: 3rem; margin-bottom: 16px; }
          .h-text-col p { margin: 0 auto 30px; }
          .h-nav-controls { left: 50%; transform: translateX(-50%); bottom: 20px; }
          .h-spark { display: none; }
        }

        @media (max-width: 768px) {
          .h-root { min-height: 100vh; padding-top: 80px; padding-bottom: 20px; align-items: center; justify-content: center; }
          .h-slider-container { display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; position: relative; }
          
          /* Hide all complex elements to simplify mobile view */
          .h-viz-col, .h-features, .h-nav-controls, .h-badge, .h-label, .h-spark { display: none !important; }
          
          /* Simplify slides to just the centered text column */
          .h-slide { position: absolute; opacity: 0; visibility: hidden; transform: none; padding: 0 5%; width: 100%; top: 50%; transform: translateY(-50%); flex-direction: column; align-items: center; justify-content: center; left: 0; }
          .h-slide.active { position: absolute; opacity: 1; visibility: visible; display: flex; transform: translateY(-50%); transition: opacity 0.8s ease; }
          
          .h-text-col { width: 100%; max-width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; }
          .h-text-col h1 { font-size: 2.5rem; margin-bottom: 20px; text-wrap: balance; }
          .h-text-col p { font-size: 1.1rem; margin-bottom: 30px; max-width: 90%; text-wrap: balance; }
          
          /* Native SVG scaling */
          .h-circuit-bg { opacity: 0.6; }
        }
      `}</style>

      <div className="h-root">

        {/* Ambient Glows */}
        <div className="h-glow glow-1" />
        <div className="h-glow glow-2" />

        {/* Particles */}
        <div className="particles" />

        {/* SVG Circuit Background */}
        <div className="h-circuit-bg">
          <svg width="100%" height="100%" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g>
              {/* Cyan Traces */}
              <path className="circuit-line cyan" d="M -50 300 L 200 300 L 250 350 L 600 350 L 650 300 L 1500 300" />
              <path className="circuit-line cyan" d="M -50 700 L 150 700 L 200 750 L 400 750 L 450 700 L 800 700" />
              <path className="circuit-line cyan" d="M 1200 -50 L 1200 150 L 1250 200 L 1600 200" />

              {/* Magenta Traces */}
              <path className="circuit-line magenta" d="M -50 450 L 300 450 L 350 500 L 700 500 L 750 450 L 1100 450 L 1150 500 L 1600 500" />
              <path className="circuit-line magenta" d="M 850 1000 L 850 800 L 900 750 L 1600 750" />
              <path className="circuit-line magenta" d="M 900 -50 L 900 100 L 950 150 L 1150 150" />
            </g>
          </svg>
        </div>

        {/* Slider */}
        <div className="h-slider-container">
          {slides.map((slide, i) => (
            <div key={i} className={`h-slide ${i === active ? 'active' : ''}`}>

              {/* Left Col: Visual — now completely free of card styling */}
              <div className="h-viz-col">
                <div className="h-glass-card">
                  {/* Badges remain floating */}
                  {slide.badges?.map((badge, bIdx) => (
                    <div
                      key={bIdx}
                      className="h-badge"
                      style={{
                        top: badge.top, bottom: badge.bottom, left: badge.left, right: badge.right,
                        animationDelay: `${bIdx * 1.5}s`
                      }}
                    >
                      {badge.text}
                    </div>
                  ))}

                  <div className="h-glass-content">
                    <ResponsiveContainer width="100%" height="100%">
                      {slide.chart(data)}
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Right Col: Content */}
              <div className="h-text-col">
                <span className="h-label" style={{ color: slide.color }}>{slide.label}</span>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>

                <div className="h-features">
                  {slide.features.map((feat, fIdx) => (
                    <div key={fIdx} className="h-feature">
                      <div className="h-feature-icon" style={{ color: slide.color, borderColor: `${slide.color}60`, background: `${slide.color}15` }}>
                        {feat.icon}
                      </div>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>

                <button className="h-btn" style={{ background: slide.color, boxShadow: `0 10px 20px ${slide.color}50` }} onClick={() => navigate('/contact')}>
                  Connect With Us
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="h-nav-controls">
          <div className="h-dots">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-dot ${i === active ? 'active' : ''}`}
                style={{ background: i === active ? slides[active].color : '', boxShadow: i === active ? `0 0 15px ${slides[active].color}` : '' }}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div className="h-arrows">
            <button className="h-arrow" onClick={prev}><ChevronLeft size={20} /></button>
            <button className="h-arrow" onClick={next}><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* Bottom Spark Decorative */}
        <div className="h-spark">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" opacity="0.8" />
          </svg>
        </div>

      </div>
    </>
  );
}
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function UiUx() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  /* ================= Fade Up ================= */
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ================= Parallax (Desktop Only) ================= */
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const el = heroRef.current;
    const layers = el.querySelectorAll(".layer");

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      layers.forEach((l) => {
        const depth = parseFloat(l.dataset.depth);
        const tx = -x * depth * 40;
        const ty = -y * depth * 40;
        l.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    }

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
      
      {/* ================= HERO (UNTOUCHED STRUCTURE) ================= */}
      <section
        className="uiux-hero"
        ref={heroRef}
        style={{
          position: "relative",
          padding: "120px 8%",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          className="uiux-hero-glow"
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110,231,183,0.15), transparent 70%)",
            top: -200,
            right: -200,
            animation: "floatSlow 20s ease-in-out infinite",
          }}
        />

        <div className="hero-text" style={{ maxWidth: 600, zIndex: 2 }}>
          <p style={{ letterSpacing: 2, opacity: 0.8 }}>UX / UI</p>

          <h1
            className="fade-up"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              marginTop: 20,
              lineHeight: 1.2,
              opacity: 0,
              transform: "translateY(40px)",
              transition: "all 0.8s ease",
            }}
          >
            Design experience platforms that drive adoption, loyalty, and measurable business value
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              opacity: 0.9,
            }}
          >
            We engineer data-driven experience platforms that align user journeys with business value streams, accelerate product adoption, and create consistent, scalable digital interactions across channels.
          </p>
        </div>

        <div
          className="hero-svg uiux-hero-svg"
          style={{
            width: "clamp(300px, 45%, 600px)",
            marginTop: 40,
            position: "relative",
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 800 600" width="100%">
            <defs>
              <linearGradient id="deviceGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g className="layer" data-depth="0.05">
              <ellipse
                cx="400"
                cy="300"
                rx="280"
                ry="180"
                fill="url(#deviceGrad)"
                opacity="0.15"
                style={{ animation: "pulseGlow 6s ease-in-out infinite" }}
              />
            </g>

            <g className="layer" data-depth="0.15">
              <rect
                x="250"
                y="100"
                rx="30"
                width="300"
                height="400"
                fill="#0a0f1a"
                stroke="#6EE7B7"
                strokeWidth="2"
                filter="url(#glow)"
              />
              <rect x="275" y="140" rx="16" width="250" height="320" fill="#111827" />
              <rect
                x="275"
                y="140"
                width="250"
                height="320"
                fill="white"
                opacity="0.05"
                style={{ animation: "lightSweep 4s infinite linear" }}
              />
            </g>

            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx={100 + i * 80}
                cy={100 + (i % 2) * 200}
                r="6"
                fill="#6EE7B7"
                opacity="0.6"
                style={{ animation: `floatParticle ${4 + i}s ease-in-out infinite` }}
              />
            ))}
          </svg>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="section-padding" style={{ background: "#f9fafb", padding: "80px 8%" }}>
        <div className="grid-3" style={{ display: "grid", gap: 30 }}>
          {[
            { label: "Digital Products & Platforms Enabled", val: "250+" },
            { label: "Experience Adoption Rate", val: "99%" },
            { label: "Conversion & Engagement Uplift", val: "40%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                textAlign: "center",
                padding: 40,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease",
              }}
            >
              <h3 style={{ fontSize: 42, fontWeight: 800, color: "#203a43", margin: 0 }}>{stat.val}</h3>
              <p style={{ color: "#6b7280", fontWeight: 500, marginTop: 10 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="section-padding uiux-services" style={{ padding: "100px 8%" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 className="fade-up" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0f2027", opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}>
            Experience Platform Capabilities
          </h2>
          <p style={{ color: "#4b5563", maxWidth: 600, margin: "20px auto 0" }}>
            Outcome-driven capabilities for designing scalable, governed, and high-adoption digital experience ecosystems.
          </p>
        </div>

        <div className="grid-3" style={{ display: "grid", gap: 30 }}>
          {[
            { title: "Experience Insights & Journey Intelligence", desc: "Use qualitative and quantitative data to identify value leaks, adoption barriers, and optimization opportunities across the customer lifecycle.", icon: "🔍" },
            { title: "Design Systems & Scalable Experience Architecture", desc: "Establish reusable, governed design foundations that accelerate product delivery and ensure consistency across platforms.", icon: "🎨" },
            { title: "Design-to-Engineering Acceleration", desc: "Create production-ready experience models that reduce rework, align teams, and shorten release cycles.", icon: "🕹️" },
          ].map((service, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                padding: 40,
                borderRadius: 20,
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease",
                opacity: 0,
                transform: "translateY(30px)",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 20 }}>{service.icon}</div>
              <h4 style={{ fontSize: 22, fontWeight: 700, marginBottom: 15 }}>{service.title}</h4>
              <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="uiux-process" style={{ background: "#0f2027", color: "#fff", padding: "100px 8%" }}>
        <div className="flex-responsive" style={{ display: "flex", gap: 60, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h2 className="fade-up" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}>
              Our Experience Platform Transformation Approach
            </h2>
            <div style={{ marginTop: 40 }}>
              {[
                { step: "01", t: "Discover", d: "Assess business goals, customer journeys, data signals, and current experience gaps." },
                { step: "02", t: "Define", d: "Prioritize value streams, define experience strategy, and establish success metrics." },
                { step: "03", t: "Architect", d: "Create scalable experience architecture, design systems, and interaction models." },
                { step: "04", t: "Optimize", d: "Continuously measure adoption, usability, and conversion to drive measurable outcomes." },
              ].map((item, i) => (
                <div key={i} className="uiux-process-item" style={{ display: "flex", gap: 20, marginBottom: 30 }}>
                  <span style={{ color: "#6EE7B7", fontWeight: 800, fontSize: 20 }}>{item.step}</span>
                  <div>
                    <h5 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{item.t}</h5>
                    <p style={{ opacity: 0.7, margin: "5px 0 0", fontSize: 15 }}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hide-mobile" style={{ flex: 1, background: "rgba(255,255,255,0.05)", height: 400, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
             <p style={{opacity: 0.3, letterSpacing: 4}}>WORKFLOW_VISUAL</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          padding: "120px 8%",
          background: "#fff",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div className="fade-up" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, color: "#0f2027" }}>
            Transform your digital experience into a measurable growth engine
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 500, margin: "20px auto 0", fontSize: 18 }}>
            Partner with our experience engineering specialists to design scalable, high-adoption platforms that connect user needs with business outcomes.
          </p>
          <button
            className="uiux-cta-btn"
            onClick={() => navigate("/contact")}
            style={{
              marginTop: 40,
              padding: "18px 45px",
              background: "linear-gradient(135deg,#f28c00,#ffb347)",
              border: "none",
              borderRadius: 50,
              fontWeight: 700,
              color: "#fff",
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 15px 35px rgba(242,140,0,0.3)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            Start Your Experience Transformation
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={{ padding: "60px 8%", background: "#f9fafb", borderTop: "1px solid #eee", textAlign: "center" }}>
        <p style={{ color: "#9ca3af", fontSize: 14 }}>© 2024 Galacticos Network. All rights reserved.</p>
      </footer>

      {/* ================= GLOBAL STYLES ================= */}
      <style>{`
        @keyframes floatSlow {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(40px); }
        }

        @keyframes pulseGlow {
          0%,100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }

        @keyframes lightSweep {
          0% { transform: translateX(-300px) skewX(-20deg); }
          100% { transform: translateX(300px) skewX(-20deg); }
        }

        @keyframes floatParticle {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        /* Responsive Layouts */
        .grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 1024px) {
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-text, .hero-svg {
            flex: 1 1 100%;
            text-align: center;
          }
          .hero-svg {
            margin: 40px auto 0 auto;
          }
        }

        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .flex-responsive {
            flex-direction: column;
          }
          .hide-mobile {
            display: none;
          }
          section {
            padding: 80px 6% !important;
          }
          .hero-text h1 {
            text-align: center;
          }

          .uiux-hero {
            min-height: auto !important;
            padding-top: 110px !important;
            padding-bottom: 72px !important;
            justify-content: center !important;
          }

          .uiux-hero-glow,
          .uiux-hero-svg {
            display: none !important;
          }

          .uiux-hero-svg {
            width: min(100%, 420px) !important;
            margin: 24px auto 0 !important;
          }

          .uiux-services,
          .uiux-process {
            padding-top: 72px !important;
            padding-bottom: 72px !important;
          }

          .uiux-process-item {
            gap: 12px !important;
            align-items: flex-start;
          }

          .uiux-cta-btn {
            width: 100%;
            max-width: 360px;
            padding: 16px 24px !important;
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
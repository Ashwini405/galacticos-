import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(30px); }
  }
  
  @keyframes expandLine {
    from { width: 0; }
    to { width: 100px; }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { background-color: rgba(0, 198, 255, 0.6); }
    50% { background-color: rgba(0, 198, 255, 0.2); }
  }

  @keyframes pharmaFlip {
    0% {
      background: linear-gradient(135deg, #e07b39, #d4642e);
    }
    25% {
      background: linear-gradient(225deg, #e07b39, #d4642e);
    }
    50% {
      background: linear-gradient(315deg, #e07b39, #d4642e);
    }
    75% {
      background: linear-gradient(45deg, #e07b39, #d4642e);
    }
    100% {
      background: linear-gradient(135deg, #e07b39, #d4642e);
    }
  }

  @keyframes agricultureFlip {
    0% {
      background: linear-gradient(135deg, #21a366, #1a8a56);
    }
    25% {
      background: linear-gradient(225deg, #21a366, #1a8a56);
    }
    50% {
      background: linear-gradient(315deg, #21a366, #1a8a56);
    }
    75% {
      background: linear-gradient(45deg, #21a366, #1a8a56);
    }
    100% {
      background: linear-gradient(135deg, #21a366, #1a8a56);
    }
  }

  @keyframes insuranceFlip {
    0% {
      background: linear-gradient(135deg, #1b9db7, #167a8d);
    }
    25% {
      background: linear-gradient(225deg, #1b9db7, #167a8d);
    }
    50% {
      background: linear-gradient(315deg, #1b9db7, #167a8d);
    }
    75% {
      background: linear-gradient(45deg, #1b9db7, #167a8d);
    }
    100% {
      background: linear-gradient(135deg, #1b9db7, #167a8d);
    }
  }

  @keyframes shimmerOverlay {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes dnaPulse {
    0%, 100% { opacity: 0.15; }
    50% { opacity: 0.35; }
  }

  @keyframes waveFlow {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes shieldPulse {
    0% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.25; transform: scale(1.05); }
    100% { opacity: 0.1; transform: scale(1); }
  }

  @keyframes parallaxZoom {
    0% { transform: scale(1.03) translateZ(0); }
    100% { transform: scale(1.06) translateZ(0); }
  }
`;

export default function Mobility() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleCardMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // DNA Pattern SVG
  const DNAPattern = () => (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.35,
        pointerEvents: "none",
      }}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Left Strand */}
      {[0, 40, 80, 120, 160, 200, 240, 280].map((y, i) => (
        <g key={`left-${i}`}>
          <circle cx="80" cy={y} r="4" fill="rgba(100, 200, 255, 0.6)" />
          <line x1="80" y1={y} x2="150" y2={y} stroke="rgba(100, 200, 255, 0.3)" strokeWidth="1.5" />
        </g>
      ))}
      
      {/* Right Strand */}
      {[0, 40, 80, 120, 160, 200, 240, 280].map((y, i) => (
        <g key={`right-${i}`}>
          <circle cx="220" cy={y} r="4" fill="rgba(100, 200, 255, 0.6)" />
          <line x1="150" y1={y} x2="220" y2={y} stroke="rgba(100, 200, 255, 0.3)" strokeWidth="1.5" />
        </g>
      ))}
      
      {/* Helical connectors */}
      <path
        d="M 80 0 Q 150 20 220 0 T 80 80 T 220 160 T 80 240"
        stroke="rgba(100, 200, 255, 0.25)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
      />
      <path
        d="M 220 0 Q 150 20 80 0 T 220 80 T 80 160 T 220 240"
        stroke="rgba(100, 200, 255, 0.25)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
      />
    </svg>
  );

  // Crop Waves SVG
  const CropWavesPattern = () => (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.4,
        pointerEvents: "none",
      }}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Wavy lines representing crops */}
      {[40, 100, 160, 220].map((y, i) => (
        <g key={`wave-${i}`}>
          <path
            d={`M 0 ${y} Q 75 ${y - 15} 150 ${y} T 300 ${y}`}
            stroke={`rgba(150, 255, 150, ${0.4 - i * 0.08})`}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Crop stalks */}
          {[30, 90, 150, 210, 270].map((x, j) => (
            <g key={`stalk-${i}-${j}`}>
              <line x1={x} y1={y - 8} x2={x - 3} y2={y + 12} stroke={`rgba(150, 255, 150, ${0.35 - i * 0.07})`} strokeWidth="1.5" />
              <line x1={x} y1={y - 8} x2={x + 3} y2={y + 12} stroke={`rgba(150, 255, 150, ${0.35 - i * 0.07})`} strokeWidth="1.5" />
              <circle cx={x} cy={y - 12} r="2" fill={`rgba(150, 255, 150, ${0.4 - i * 0.08})`} />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );

  // Shield Grid Pattern SVG
  const ShieldGridPattern = () => (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.38,
        pointerEvents: "none",
      }}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Grid background */}
      {[20, 60, 100, 140, 180, 220, 260].map((x) => (
        <line key={`vline-${x}`} x1={x} y1="0" x2={x} y2="300" stroke="rgba(100, 200, 255, 0.15)" strokeWidth="1" />
      ))}
      {[20, 60, 100, 140, 180, 220, 260].map((y) => (
        <line key={`hline-${y}`} x1="0" y1={y} x2="300" y2={y} stroke="rgba(100, 200, 255, 0.15)" strokeWidth="1" />
      ))}
      
      {/* Shield symbols */}
      {[75, 150, 225].map((x, i) => (
        <g key={`shield-${i}`}>
          {/* Shield outline */}
          <path
            d={`M ${x} 50 L ${x + 25} 80 L ${x + 25} 130 Q ${x} 160 ${x} 170 Q ${x} 160 ${x - 25} 130 L ${x - 25} 80 Z`}
            fill="none"
            stroke={`rgba(100, 200, 255, ${0.4 - i * 0.08})`}
            strokeWidth="2"
          />
          {/* Shield checkmark */}
          <path
            d={`M ${x - 8} 115 L ${x - 2} 125 L ${x + 12} 105`}
            fill="none"
            stroke={`rgba(100, 200, 255, ${0.4 - i * 0.08})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
        color: "#1a1a1a",
        backgroundColor: "#fafafa",
      }}
    >
      <style>{styles}</style>

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          padding: "clamp(96px, 10vw, 130px) 5% 60px",
          color: "#fff",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(135deg, rgba(10,30,60,0.88), rgba(20,60,120,0.78)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Floating Glow Background */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
            top: "-150px",
            right: "-150px",
            borderRadius: "50%",
            animation: "floatSlow 18s ease-in-out infinite",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
            width: "100%",
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ animation: "slideInLeft 0.8s ease-out" }}>
            <div
              style={{
                display: "inline-block",
                padding: "10px 24px",
                borderRadius: "30px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                fontSize: "13px",
                letterSpacing: "2px",
                marginBottom: "25px",
                fontWeight: "600",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Enterprise Mobility
            </div>

            <h1
              style={{
                fontSize: "calc(2.5rem + 2vw)",
                fontWeight: "800",
                maxWidth: "600px",
                lineHeight: 1.15,
                marginBottom: "25px",
                letterSpacing: "-1px",
              }}
            >
              Accelerate digital value through intelligent, connected mobile experiences
            </h1>

            <p
              style={{
                fontSize: "18px",
                maxWidth: "550px",
                lineHeight: "1.7",
                marginBottom: "30px",
                opacity: 0.95,
                fontWeight: "300",
              }}
            >
              Reimagine customer, workforce, and partner interactions with secure, scalable, platform-driven mobility solutions.
            </p>

            {/* Accent Line */}
            <div
              style={{
                width: "80px",
                height: "4px",
                marginBottom: "30px",
                background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                borderRadius: "10px",
                animation: "expandLine 1.5s ease",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                border: "none",
                color: "#fff",
                padding: "14px 40px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "50px",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(0, 114, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 35px rgba(0, 114, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 114, 255, 0.3)";
              }}
            >
              Learn More →
            </button>
          </div>

          {/* RIGHT SVG ANIMATION */}
          <div style={{ textAlign: "center", animation: "slideInUp 0.8s ease-out 0.2s both" }}>
            <svg
              width="340"
              height="340"
              viewBox="0 0 300 300"
              style={{ maxWidth: "100%", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))" }}
            >
              {/* Phone Body */}
              <rect
                x="90"
                y="40"
                width="120"
                height="220"
                rx="25"
                fill="rgba(255,255,255,0.15)"
                stroke="#fff"
                strokeWidth="2.5"
              />

              {/* Screen */}
              <rect
                x="105"
                y="60"
                width="90"
                height="170"
                rx="15"
                fill="rgba(255,255,255,0.08)"
              />

              {/* Signal Waves */}
              <circle
                cx="150"
                cy="150"
                r="30"
                stroke="#00c6ff"
                strokeWidth="2.5"
                fill="none"
              >
                <animate
                  attributeName="r"
                  from="30"
                  to="80"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="150"
                cy="150"
                r="50"
                stroke="#0072ff"
                strokeWidth="2.5"
                fill="none"
              >
                <animate
                  attributeName="r"
                  from="50"
                  to="100"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Center dot */}
              <circle cx="150" cy="150" r="5" fill="#00c6ff" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section style={{ padding: "90px 5%", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            animation: "slideInUp 0.8s ease-out",
          }}
        >
          <h2
            style={{
              color: "#0a5ca8",
              fontSize: "calc(1.8rem + 1vw)",
              marginBottom: "12px",
              fontWeight: "800",
            }}
          >
            Touch. Tap. Swipe.
          </h2>
          <h3
            style={{
              fontSize: "24px",
              marginBottom: "25px",
              color: "#333",
              fontWeight: "600",
            }}
          >
            Get business done from anywhere.
          </h3>
          <div style={{ height: "3px", width: "60px", background: "linear-gradient(90deg, #00c6ff, #0072ff)", borderRadius: "2px", marginBottom: "30px" }} />
          <p
            style={{
              lineHeight: "1.8",
              maxWidth: "900px",
              fontSize: "16px",
              color: "#555",
              fontWeight: "400",
            }}
          >
            Mobility is no longer a channel — it is the primary digital engagement layer for customers, employees, and ecosystems. We help enterprises design and deliver context-aware, secure, and high-performance mobile experiences that drive real-time decisions, revenue growth, and operational agility.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section
        style={{
          padding: "80px 5%",
          background: "linear-gradient(135deg, rgba(10,60,120,0.08), rgba(0,198,255,0.06))",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            animation: "slideInUp 0.8s ease-out",
          }}
        >
          <h2
            style={{
              fontSize: "calc(1.8rem + 1vw)",
              marginBottom: "15px",
              fontWeight: "800",
              color: "#1a1a1a",
            }}
          >
            Overview
          </h2>
          <div style={{ height: "3px", width: "60px", background: "linear-gradient(90deg, #00c6ff, #0072ff)", borderRadius: "2px", marginBottom: "25px" }} />
          <p
            style={{
              lineHeight: "1.8",
              maxWidth: "900px",
              fontSize: "16px",
              color: "#555",
            }}
          >
            We engineer enterprise mobility as a core digital platform capability — integrating mobile apps, APIs, data, cloud, and identity to deliver seamless, always-on experiences. Our approach enables faster innovation, real-time process execution, and measurable business outcomes across the value chain.
          </p>
        </div>
      </section>

      {/* ================= INDUSTRY CARDS SECTION ================= */}
      <section style={{ padding: "90px 5%", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "calc(1.8rem + 1vw)",
              fontWeight: "800",
              color: "#1a1a1a",
            }}
          >
            Helping Businesses Get
          </h2>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "60px",
              fontSize: "calc(1.8rem + 1vw)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #00c6ff, #0072ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            on the Digital Express Way
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "35px",
            }}
          >
            {/* Pharma Card */}
            <div
              style={{
                position: "relative",
                padding: "50px 30px",
                minHeight: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s ease",
                background: "linear-gradient(135deg, rgba(30, 20, 60, 0.95), rgba(15, 30, 80, 0.95))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  hoveredCard === "pharma"
                    ? "0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(224, 123, 57, 0.15)"
                    : "0 15px 40px rgba(0, 0, 0, 0.3)",
                transform:
                  hoveredCard === "pharma"
                    ? `scale(1.04) perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredCard("pharma")}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => handleCardMouseMove(e, "pharma")}
            >
              <DNAPattern />
              
              {/* Dark Overlay with gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(15, 10, 40, 0.6), rgba(8, 25, 60, 0.5))",
                  zIndex: 1,
                }}
              />

              <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>💊</div>
                <h3 style={{ fontSize: "26px", marginBottom: "15px", fontWeight: 700, color: "#fff" }}>
                  Pharma
                </h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9, color: "rgba(255,255,255,0.85)" }}>
                  Connected life sciences mobility enabling real-time field intelligence, compliant engagement, and data-driven commercial effectiveness.
                </p>
              </div>
            </div>

            {/* Agriculture Card */}
            <div
              style={{
                position: "relative",
                padding: "50px 30px",
                minHeight: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s ease",
                background: "linear-gradient(135deg, rgba(20, 50, 30, 0.95), rgba(10, 40, 20, 0.95))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  hoveredCard === "agriculture"
                    ? "0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(33, 163, 102, 0.15)"
                    : "0 15px 40px rgba(0, 0, 0, 0.3)",
                transform:
                  hoveredCard === "agriculture"
                    ? `scale(1.04) perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredCard("agriculture")}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => handleCardMouseMove(e, "agriculture")}
            >
              <CropWavesPattern />
              
              {/* Dark Overlay with gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(10, 30, 15, 0.6), rgba(5, 25, 10, 0.5))",
                  zIndex: 1,
                }}
              />

              <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🌾</div>
                <h3 style={{ fontSize: "26px", marginBottom: "15px", fontWeight: 700, color: "#fff" }}>
                  Agriculture
                </h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9, color: "rgba(255,255,255,0.85)" }}>
                  Digital agriculture platforms delivering farm-to-market visibility, advisory intelligence, and ecosystem collaboration in real time.
                </p>
              </div>
            </div>

            {/* Insurance Card */}
            <div
              style={{
                position: "relative",
                padding: "50px 30px",
                minHeight: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s ease",
                background: "linear-gradient(135deg, rgba(15, 40, 50, 0.95), rgba(8, 30, 40, 0.95))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  hoveredCard === "insurance"
                    ? "0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(27, 157, 183, 0.15)"
                    : "0 15px 40px rgba(0, 0, 0, 0.3)",
                transform:
                  hoveredCard === "insurance"
                    ? `scale(1.04) perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredCard("insurance")}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => handleCardMouseMove(e, "insurance")}
            >
              <ShieldGridPattern />
              
              {/* Dark Overlay with gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(8, 25, 35, 0.6), rgba(5, 20, 30, 0.5))",
                  zIndex: 1,
                }}
              />

              <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🛡️</div>
                <h3 style={{ fontSize: "26px", marginBottom: "15px", fontWeight: 700, color: "#fff" }}>
                  Insurance
                </h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9, color: "rgba(255,255,255,0.85)" }}>
                  Mobile-first insurance journeys enabling instant claims, digital underwriting, customer self-service, and partner connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(10,30,60,0.92), rgba(10,60,120,0.92)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 5%",
          color: "#fff",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "calc(1.8rem + 1vw)",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              Transform mobility into a real-time digital engagement platform
            </h2>
            <p style={{ fontSize: "18px", opacity: 0.9 }}>
              Talk to our enterprise mobility specialists to build secure, scalable, and experience-driven mobile ecosystems.
            </p>
          </div>

          {/* Service Options */}
          <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <button
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.25)";
                e.target.style.borderColor = "#fff";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.15)";
                e.target.style.borderColor = "rgba(255,255,255,0.3)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Professional Services
            </button>

            <button
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.25)";
                e.target.style.borderColor = "#fff";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.15)";
                e.target.style.borderColor = "rgba(255,255,255,0.3)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Managed Services
            </button>

            <button
              style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                border: "none",
                color: "#fff",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(0, 114, 255, 0.3)",
              }}
              onClick={() => navigate('/contact')}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 35px rgba(0, 114, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 114, 255, 0.3)";
              }}
            >
              CONNECT NOW →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
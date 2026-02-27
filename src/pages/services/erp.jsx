import React, { useEffect, useState } from "react";

const styles = `
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(18px); }
  }

  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(26px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-26px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes pulseSoft {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0, 198, 255, 0.35); }
    50% { box-shadow: 0 0 0 16px rgba(0, 198, 255, 0); }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes dashFlow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -18; }
  }
`;

const platformDetails = [
  {
    name: "SAP",
    subtitle: "Enterprise-grade digital core",
    accent: "#1b9db7",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80",
    modules: ["S/4HANA", "SAP BTP", "SuccessFactors", "Ariba & IBP"],
    strengths: [
      "Brownfield and greenfield S/4HANA transformation",
      "Global template rollout with localization and governance",
      "Real-time finance and supply chain visibility with embedded analytics",
    ],
    outcomes: "Best fit for complex enterprises that need strong process control, multi-country compliance, and high-volume operations.",
  },
  {
    name: "Oracle",
    subtitle: "Cloud-first finance and operations",
    accent: "#e07b39",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1500&q=80",
    modules: ["Oracle Fusion ERP", "Oracle EPM", "Oracle SCM", "Oracle Integration Cloud"],
    strengths: [
      "Finance modernization across AP, AR, GL, and close processes",
      "Unified planning and performance management with EPM",
      "Low-risk integrations between Oracle, legacy apps, and data platforms",
    ],
    outcomes: "Best fit for organizations targeting faster close, stronger financial controls, and continuous quarterly innovation.",
  },
  {
    name: "NetSuite",
    subtitle: "Agile ERP for high-growth businesses",
    accent: "#21a366",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80",
    modules: ["Financials", "SuiteCommerce", "Inventory & WMS", "SuiteAnalytics"],
    strengths: [
      "Rapid implementation for multi-entity and fast-scaling operations",
      "Order-to-cash and procure-to-pay automation with role-based dashboards",
      "SuiteScript and SuiteFlow extensions for business-specific workflows",
    ],
    outcomes: "Best fit for scaling mid-market and digital-first firms that need speed, flexibility, and unified reporting.",
  },
];

const deliverySteps = [
  { title: "Assess & Blueprint", text: "Current-state diagnostics, process discovery, data quality review, and target architecture definition." },
  { title: "Design & Build", text: "Template-based configuration, custom extensions, role-based security, and integration development." },
  { title: "Migrate & Test", text: "Phased data migration, SIT/UAT cycles, performance testing, and cutover rehearsals." },
  { title: "Launch & Optimize", text: "Hypercare support, KPI tracking, automation backlog delivery, and continuous improvement roadmap." },
];

const capabilityCards = [
  {
    title: "ERP Advisory",
    text: "Platform fitment, process harmonization, implementation roadmap, and business case modeling.",
    icon: "🧭",
  },
  {
    title: "Implementation & Rollout",
    text: "Global template delivery, localization, testing factory, and program governance for predictable go-live.",
    icon: "🚀",
  },
  {
    title: "Integration & Automation",
    text: "API-led integrations, RPA workflows, and master-data synchronization across your enterprise stack.",
    icon: "🔗",
  },
  {
    title: "Managed ERP Services",
    text: "L2/L3 support, release management, enhancement factory, and value-realization tracking.",
    icon: "🛠️",
  },
];

function ERPFlowIllustration() {
  return (
    <svg width="360" height="280" viewBox="0 0 360 280" style={{ maxWidth: "100%" }}>
      <defs>
        <linearGradient id="erpGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00c6ff" />
          <stop offset="100%" stopColor="#0072ff" />
        </linearGradient>
      </defs>

      <rect x="20" y="32" width="110" height="72" rx="14" fill="rgba(255,255,255,0.12)" stroke="url(#erpGrad)" />
      <text x="44" y="75" fill="#d6efff" fontSize="13" fontWeight="600">Finance</text>

      <rect x="130" y="140" width="110" height="72" rx="14" fill="rgba(255,255,255,0.12)" stroke="url(#erpGrad)" />
      <text x="146" y="183" fill="#d6efff" fontSize="13" fontWeight="600">Supply Chain</text>

      <rect x="240" y="32" width="100" height="72" rx="14" fill="rgba(255,255,255,0.12)" stroke="url(#erpGrad)" />
      <text x="272" y="75" fill="#d6efff" fontSize="13" fontWeight="600">HR</text>

      <circle cx="182" cy="100" r="36" fill="rgba(0,198,255,0.1)" stroke="url(#erpGrad)" style={{ animation: "pulseSoft 2.5s ease-in-out infinite" }} />
      <text x="168" y="105" fill="#fff" fontSize="12" fontWeight="700">ERP</text>

      <line x1="130" y1="68" x2="150" y2="84" stroke="#00c6ff" strokeDasharray="5,5" style={{ animation: "dashFlow 1.2s linear infinite" }} />
      <line x1="232" y1="84" x2="240" y2="68" stroke="#00c6ff" strokeDasharray="5,5" style={{ animation: "dashFlow 1.2s linear infinite" }} />
      <line x1="182" y1="136" x2="182" y2="140" stroke="#00c6ff" strokeDasharray="5,5" style={{ animation: "dashFlow 1.2s linear infinite" }} />
    </svg>
  );
}

export default function ERP() {
  const [viewportWidth, setViewportWidth] = useState(1280);
  const isMobile = viewportWidth <= 768;
  const isTablet = viewportWidth > 768 && viewportWidth <= 1024;

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setViewportWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif", color: "#1a1a1a", backgroundColor: "#fafafa" }}>
      <style>{styles}</style>

      <section
        style={{
          minHeight: "72vh",
          padding: isMobile ? "96px 20px 36px" : isTablet ? "108px 4.5% 44px" : "clamp(120px, 12vw, 148px) 5% 56px",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(125deg, rgba(9,20,45,0.93), rgba(18,58,110,0.86)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "540px",
            height: "540px",
            right: "-160px",
            top: "-180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 72%)",
            animation: "floatSlow 14s ease-in-out infinite",
          }}
        />

        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: isMobile || isTablet ? "1fr" : "minmax(320px, 1.2fr) minmax(280px, 0.8fr)",
            gap: isMobile ? "22px" : isTablet ? "24px" : "30px",
            alignItems: "start",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ animation: "slideInLeft 0.75s ease-out" }}>
            <span
              style={{
                display: "inline-block",
                padding: "9px 20px",
                borderRadius: "30px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.12)",
                fontSize: "12px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                marginBottom: "24px",
                fontWeight: 700,
              }}
            >
              Enterprise Resource Planning Services
            </span>

            <h1 style={{ fontSize: isMobile ? "clamp(1.95rem, 8vw, 2.35rem)" : isTablet ? "clamp(2.25rem, 5vw, 2.85rem)" : "calc(2.2rem + 2vw)", lineHeight: 1.14, marginBottom: "22px", fontWeight: 800, maxWidth: "640px" }}>
              Modernizing the Digital Core with SAP, Oracle & NetSuite
            </h1>

            <p style={{ fontSize: isMobile ? "16px" : "18px", lineHeight: 1.75, maxWidth: "620px", opacity: 0.95, marginBottom: "22px" }}>
              We modernize your enterprise systems with structured architecture, risk-controlled migration, and measurable business value. From finance and procurement to
              supply chain and analytics, our ERP programs reduce complexity and accelerate decision-making.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}>
              {[
                "S/4HANA Transformation",
                "Oracle Cloud ERP",
                "NetSuite Rapid Rollout",
                "Integration & Automation",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "13px",
                    padding: "8px 14px",
                    borderRadius: "24px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.23)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          <div style={{ textAlign: "center", animation: "slideInUp 0.9s ease-out", alignSelf: "center" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "20px",
                padding: isMobile ? "18px 12px" : "24px 16px",
                backdropFilter: "blur(8px)",
              }}
            >
              <ERPFlowIllustration />
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "10px", marginTop: "14px" }}>
                {[
                  { k: "Enterprise Focus", v: "ERP Programs" },
                  { k: "Process Efficiency", v: "Improvement Driven" },
                  { k: "24/7", v: "Managed Support" },
                ].map((item) => (
                  <div key={item.v} style={{ background: "rgba(255,255,255,0.12)", borderRadius: "12px", padding: "10px" }}>
                    <div style={{ fontWeight: 800, color: "#8be2ff" }}>{item.k}</div>
                    <div style={{ fontSize: "11px", opacity: 0.9 }}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "56px 20px" : isTablet ? "68px 4.5%" : "86px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "clamp(1.65rem, 6vw, 2.05rem)" : isTablet ? "clamp(2rem, 3.4vw, 2.35rem)" : "calc(1.7rem + 1vw)", marginBottom: "14px", fontWeight: 800, color: "#133d7a" }}>
            Clear ERP services across strategy, delivery, and managed operations
          </h2>
          <p style={{ color: "#555", maxWidth: "900px", lineHeight: 1.8, marginBottom: "30px" }}>
            Our ERP programs are designed to remove delivery risk and create business clarity. We combine domain consulting, technical execution, and long-term optimization
            so your teams gain better control of finance, operations, and enterprise data.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
            {capabilityCards.map((card, index) => (
              <article
                key={card.title}
                style={{
                  background: "linear-gradient(180deg, #ffffff, #f7fbff)",
                  border: "1px solid #e5eef9",
                  borderRadius: "16px",
                  padding: "22px",
                  animation: `slideInUp 0.55s ease-out ${index * 0.1}s both`,
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>{card.icon}</div>
                <h3 style={{ marginBottom: "10px", color: "#1f2f46", fontSize: "20px" }}>{card.title}</h3>
                <p style={{ margin: 0, color: "#5a667a", lineHeight: 1.7 }}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "56px 20px" : isTablet ? "70px 4.5%" : "90px 5%", background: "linear-gradient(135deg, rgba(9,54,112,0.07), rgba(0,198,255,0.06))" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: isMobile ? "clamp(1.7rem, 6.2vw, 2.1rem)" : isTablet ? "clamp(2rem, 3.5vw, 2.4rem)" : "calc(1.8rem + 1vw)", marginBottom: "12px", fontWeight: 800, color: "#1a1a1a" }}>
            Platform-Specific ERP Expertise
          </h2>
          <p style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 38px", color: "#536173", lineHeight: 1.8 }}>
            We bring platform-specific accelerators, certified consultants, and business-process knowledge so each implementation is practical, scalable, and aligned to
            measurable outcomes.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(auto-fit, minmax(300px, 1fr))", gap: "22px" }}>
            {platformDetails.map((platform, index) => (
              <article
                key={platform.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #dde8f6",
                  background: "#fff",
                  boxShadow: "0 12px 34px rgba(5, 24, 58, 0.08)",
                  animation: `slideInUp 0.7s ease-out ${index * 0.12}s both`,
                }}
              >
                <div
                  style={{
                    height: "180px",
                    backgroundImage: `linear-gradient(120deg, rgba(10,20,40,0.55), rgba(10,20,40,0.15)), url('${platform.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "16px",
                      bottom: "16px",
                      background: "rgba(255,255,255,0.92)",
                      color: "#17263f",
                      borderRadius: "12px",
                      padding: "8px 12px",
                      fontWeight: 700,
                    }}
                  >
                    {platform.subtitle}
                  </div>
                </div>

                <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ margin: "0 0 12px", fontSize: "24px", color: platform.accent }}>{platform.name}</h3>

                  <div style={{ marginBottom: "14px" }}>
                    <strong style={{ color: "#24364f" }}>Core technologies:</strong>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                      {platform.modules.map((mod) => (
                        <span key={mod} style={{ fontSize: "12px", border: "1px solid #dce8f8", padding: "6px 10px", borderRadius: "20px", background: "#f8fbff" }}>
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <strong style={{ color: "#24364f" }}>What we deliver:</strong>
                    <ul style={{ margin: "10px 0 0 18px", color: "#4f5f75", lineHeight: 1.7, padding: 0 }}>
                      {platform.strengths.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      borderRadius: "12px",
                      padding: "12px 14px",
                      background: "linear-gradient(90deg, #f8fbff, #eef6ff)",
                      color: "#324962",
                      lineHeight: 1.6,
                    }}
                  >
                    {platform.outcomes}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "56px 20px" : isTablet ? "68px 4.5%" : "84px 5%", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "clamp(1.65rem, 6vw, 2.05rem)" : isTablet ? "clamp(2rem, 3.4vw, 2.35rem)" : "calc(1.7rem + 1vw)", marginBottom: "12px", fontWeight: 800 }}>A Structured ERP Delivery Framework Designed for Predictable Outcomes</h2>
          <p style={{ color: "#5b677a", maxWidth: "860px", lineHeight: 1.8, marginBottom: "32px" }}>
            Every program follows a structured delivery framework with strong governance, transparent milestones, and value tracking from day one.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            {deliverySteps.map((step, index) => (
              <div key={step.title} style={{ border: "1px solid #deebfb", borderRadius: "14px", padding: "20px", background: "#f9fcff" }}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  {index + 1}
                </div>
                <h3 style={{ margin: "0 0 8px", color: "#20344f" }}>{step.title}</h3>
                <p style={{ margin: 0, color: "#596a82", lineHeight: 1.7 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: isMobile ? "56px 20px" : isTablet ? "68px 4.5%" : "84px 5%",
          backgroundImage:
            "linear-gradient(135deg, rgba(8,20,44,0.94), rgba(18,48,88,0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "1220px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))", gap: isMobile ? "20px" : isTablet ? "24px" : "30px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: isMobile ? "clamp(1.65rem, 6vw, 2.05rem)" : isTablet ? "clamp(2rem, 3.4vw, 2.35rem)" : "calc(1.7rem + 1vw)", marginBottom: "14px", fontWeight: 800 }}>ERP integration architecture with intelligent automation</h2>
            <p style={{ lineHeight: 1.85, opacity: 0.95 }}>
              We connect ERP with CRM, eCommerce, data platforms, and third-party systems using API-led architecture and event-driven integrations. This creates a single source
              of truth, improves process speed, and enables near real-time reporting across the enterprise.
            </p>
            <p style={{ lineHeight: 1.85, opacity: 0.95, marginTop: "12px" }}>
              Our teams also embed controls, monitoring, and release automation to keep your SAP, Oracle, and NetSuite environments stable while continuously improving business
              outcomes.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <svg width="420" height="280" viewBox="0 0 420 280" style={{ width: "100%", maxWidth: "420px", height: "auto", background: "rgba(255,255,255,0.08)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.2)" }}>
              <defs>
                <linearGradient id="netGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00c6ff" />
                  <stop offset="100%" stopColor="#5de0ff" />
                </linearGradient>
              </defs>

              {[
                { x: 60, y: 60, t: "CRM" },
                { x: 60, y: 220, t: "SCM" },
                { x: 210, y: 40, t: "Data" },
                { x: 350, y: 60, t: "HR" },
                { x: 350, y: 220, t: "ECom" },
              ].map((node) => (
                <g key={node.t}>
                  <circle cx={node.x} cy={node.y} r="26" fill="rgba(255,255,255,0.12)" stroke="url(#netGrad)" />
                  <text x={node.x - 14} y={node.y + 4} fill="#d4f4ff" fontSize="12" fontWeight="700">{node.t}</text>
                </g>
              ))}

              <circle cx="210" cy="150" r="40" fill="rgba(0,198,255,0.16)" stroke="url(#netGrad)" style={{ animation: "pulseSoft 2.4s ease-in-out infinite" }} />
              <text x="194" y="154" fill="#fff" fontWeight="800" fontSize="14">ERP</text>

              {["M86 75 L178 132", "M86 204 L178 168", "M210 66 L210 110", "M242 132 L324 75", "M242 168 L324 204"].map((path, i) => (
                <path key={i} d={path} stroke="#00c6ff" strokeWidth="2" strokeDasharray="5,4" style={{ animation: "dashFlow 1s linear infinite" }} />
              ))}
            </svg>
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "52px 20px" : isTablet ? "64px 4.5%" : "78px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: isMobile ? "clamp(1.7rem, 6.2vw, 2.1rem)" : isTablet ? "clamp(2rem, 3.5vw, 2.4rem)" : "calc(1.8rem + 1vw)", marginBottom: "12px", fontWeight: 800 }}>Let’s Build a High-Performance ERP Ecosystem</h2>
          <p style={{ color: "#596982", lineHeight: 1.8, maxWidth: "820px", margin: "0 auto 28px" }}>
            Whether your priority is SAP S/4HANA modernization, Oracle Cloud ERP adoption, or NetSuite expansion, we help you deliver faster outcomes with lower transformation
            risk.
          </p>
          <p style={{ color: "#596982", lineHeight: 1.8, maxWidth: "820px", margin: "-10px auto 28px" }}>
            Engage with our ERP specialists to define your roadmap and unlock measurable enterprise value.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["ERP Advisory", "Migration Planning", "Managed Services", "Optimization Workshop"].map((option) => (
              <button
                key={option}
                style={{
                  border: "1px solid #d7e6fa",
                  background: "#f5faff",
                  color: "#1e3a5f",
                  borderRadius: "26px",
                  padding: "12px 18px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

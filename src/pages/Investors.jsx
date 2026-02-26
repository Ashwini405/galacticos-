import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Cloud, Globe, Shield, Zap, Target } from 'lucide-react';

export default function Investors() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // SVG Illustration for ERP / Enterprise Services
  const ERPIllustration = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 500" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="erpGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="erpGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="erpGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>
          {`
            @keyframes spin-slow { 100% { transform: rotate(360deg); } }
            @keyframes pulse-ring { 0%, 100% { r: 60px; opacity: 0.5; } 50% { r: 80px; opacity: 0.2; } }
            @keyframes dash { to { stroke-dashoffset: -40; } }
            @keyframes float-node { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
          `}
        </style>
      </defs>

      {/* Background Rings */}
      <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="10 10" />
      <circle cx="250" cy="250" r="120" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Central Hub (ERP Core) */}
      <circle cx="250" cy="250" r="60" fill="url(#erpGrad1)" filter="url(#glow)" />
      <circle cx="250" cy="250" r="40" fill="url(#erpGrad2)" />
      <circle cx="250" cy="250" r="20" fill="#fff" opacity="0.9" />
      <circle cx="250" cy="250" r="80" fill="none" stroke="#4f46e5" strokeWidth="2" style={{ animation: 'pulse-ring 4s ease-in-out infinite' }} />

      {/* Orbiting Elements */}
      <g style={{ transformOrigin: '250px 250px', animation: 'spin-slow 30s linear infinite' }}>
        {/* Connection Lines */}
        <path d="M 250 130 L 250 190" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="8 8" style={{ animation: 'dash 2s linear infinite' }} />
        <path d="M 250 370 L 250 310" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="8 8" style={{ animation: 'dash 2s linear infinite' }} />
        <path d="M 130 250 L 190 250" stroke="#4f46e5" strokeWidth="3" strokeDasharray="8 8" style={{ animation: 'dash 2s linear infinite' }} />
        <path d="M 370 250 L 310 250" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="8 8" style={{ animation: 'dash 2s linear infinite' }} />

        {/* Nodes */}
        <g transform="translate(250, 100)">
          <circle cx="0" cy="0" r="30" fill="url(#erpGrad3)" filter="url(#glow)" />
          <rect x="-10" y="-10" width="20" height="20" fill="#fff" rx="4" opacity="0.8" />
        </g>
        <g transform="translate(250, 400)">
          <circle cx="0" cy="0" r="30" fill="url(#erpGrad2)" filter="url(#glow)" />
          <polygon points="0,-12 12,8 -12,8" fill="#fff" opacity="0.8" />
        </g>
        <g transform="translate(100, 250)">
          <circle cx="0" cy="0" r="30" fill="url(#erpGrad1)" filter="url(#glow)" />
          <circle cx="0" cy="0" r="10" fill="#fff" opacity="0.8" />
        </g>
        <g transform="translate(400, 250)">
          <circle cx="0" cy="0" r="30" fill="url(#erpGrad3)" filter="url(#glow)" />
          <path d="M -8 -8 L 8 8 M -8 8 L 8 -8" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        </g>
      </g>

      {/* Diagonal Nodes (Cloud, Data) */}
      <g style={{ animation: 'float-node 6s ease-in-out infinite' }}>
        <g transform="translate(140, 140)">
          <circle cx="0" cy="0" r="25" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="0" cy="0" r="5" fill="#0ea5e9" filter="url(#glow)" />
        </g>
        <g transform="translate(360, 360)">
          <circle cx="0" cy="0" r="25" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
          <circle cx="0" cy="0" r="5" fill="#8b5cf6" filter="url(#glow)" />
        </g>
      </g>
    </svg>
  );

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: isMobile ? "64px" : "80px" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e1b4b 100%)",
        color: "white",
        padding: isMobile ? "120px 20px 80px" : isTablet ? "140px 5% 100px" : "160px 6% 120px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
          zIndex: 0
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: isTablet || isMobile ? "1fr" : "1.2fr 1fr", gap: isMobile ? "40px" : "60px", alignItems: "center" }}>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ textAlign: isMobile ? "center" : "left" }}>
            <span style={{
              display: "inline-block",
              padding: "8px 16px",
              background: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#a5b4fc",
              marginBottom: "24px",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}>
              Our Expertise
            </span>
            <h1 style={{
              fontSize: "clamp(40px, 5.5vw, 68px)",
              fontWeight: "800",
              marginBottom: "24px",
              lineHeight: "1.1",
              letterSpacing: "-1px"
            }}>
              Mastering <br />
              <span style={{ background: "linear-gradient(to right, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Enterprise IT</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "#cbd5e1", maxWidth: isMobile ? "100%" : "600px", marginBottom: "40px", lineHeight: "1.7", marginLeft: isMobile ? "auto" : "0", marginRight: isMobile ? "auto" : "0" }}>
              We specialize in delivering robust ERP solutions, seamless cloud migrations, and data-driven insights. Partner with our experts to architect a scalable and future-ready digital core for your business.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                style={{
                  background: "white",
                  color: "#0f172a",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  width: isMobile ? "100%" : "auto",
                  justifyContent: "center"
                }}
              >
                Consult an Expert <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ width: "100%", maxWidth: isMobile ? "380px" : "550px", margin: "0 auto", filter: "drop-shadow(0 20px 40px rgba(99, 102, 241, 0.3))" }}
          >
            <ERPIllustration />
          </motion.div>

        </div>
      </section>

      {/* Core Expertise Metrics */}
      <section style={{ padding: isMobile ? "0 20px" : "0 6%", marginTop: isMobile ? "-40px" : "-60px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}
          >
            {[
              { label: "ERP Implementations", value: "50+", icon: <Server size={24} color="#6366f1" /> },
              { label: "Cloud Migrations", value: "100+", icon: <Cloud size={24} color="#6366f1" /> },
              { label: "Data Volume Managed", value: "10+ PB", icon: <Database size={24} color="#6366f1" /> },
              { label: "System Uptime", value: "99.9%", icon: <Zap size={24} color="#6366f1" /> }
            ].map((metric, idx) => (
              <motion.div key={idx} variants={fadeIn} style={{
                background: "white",
                padding: isMobile ? "24px" : "32px",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}>
                <div style={{ background: "#e0e7ff", padding: "12px", borderRadius: "14px", marginBottom: "20px" }}>
                  {metric.icon}
                </div>
                <h3 style={{ fontSize: isMobile ? "30px" : "36px", fontWeight: "800", color: "#0f172a", marginBottom: "8px", letterSpacing: "-1px" }}>{metric.value}</h3>
                <p style={{ color: "#64748b", fontWeight: "600", fontSize: "15px" }}>{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section style={{ padding: isMobile ? "80px 20px" : "120px 6%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: "center", marginBottom: isMobile ? "50px" : "70px" }}>
            <span style={{ color: "#4f46e5", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", fontSize: "14px" }}>Core Competencies</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", margin: "16px 0", letterSpacing: "-1px" }}>Driving Digital Operations</h2>
            <p style={{ fontSize: isMobile ? "16px" : "18px", color: "#64748b", maxWidth: "750px", margin: "0 auto", lineHeight: "1.7" }}>
              We provide end-to-end technology solutions to optimize your business processes, enhance operational efficiency, and accelerate growth.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: isMobile ? "36px" : "60px" }}>

            {/* Service 1: ERP */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))", gap: isMobile ? "24px" : "40px", alignItems: "center", background: "white", padding: isMobile ? "24px" : "40px", borderRadius: isMobile ? "24px" : "32px", border: "1px solid #e2e8f0", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}
            >
              <div>
                <div style={{ background: "rgba(79, 70, 229, 0.1)", display: "inline-flex", padding: "12px", borderRadius: "16px", marginBottom: "24px" }}>
                  <Server size={32} color="#4f46e5" />
                </div>
                <h3 style={{ fontSize: isMobile ? "26px" : "32px", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>Enterprise Resource Planning (ERP)</h3>
                <p style={{ fontSize: isMobile ? "16px" : "18px", color: "#475569", lineHeight: "1.7", marginBottom: "24px" }}>
                  Unlock the full potential of your enterprise with comprehensive ERP solutions. We specialize in SAP S/4HANA implementations, migrations, and support, helping you streamline finance, supply chain, and manufacturing operations into a unified, intelligent digital core.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {["Greenfield & Brownfield SAP S/4HANA", "ERP Cloud Migration", "Process Optimization & Automation", "Application Management Services (AMS)"].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#334155", fontWeight: "500", fontSize: "16px" }}>
                      <div style={{ background: "#e0e7ff", borderRadius: "50%", padding: "4px" }}>
                        <Target size={14} color="#4f46e5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "#f8fafc", borderRadius: "24px", padding: isMobile ? "20px" : "40px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: isMobile ? "260px" : "350px", border: "1px solid #f1f5f9" }}>
                {/* Minimalist ERP Graphic */}
                <svg width="100%" height="250" viewBox="0 0 300 250">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#4f46e5" /></linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0284c7" /></linearGradient>
                    <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#9333ea" /></linearGradient>
                  </defs>
                  <g transform="translate(150, 125)">
                    {/* Hexagon Hub */}
                    <path d="M 0 -50 L 43 -25 L 43 25 L 0 50 L -43 25 L -43 -25 Z" fill="url(#g1)" opacity="0.9" />
                    <circle cx="0" cy="0" r="15" fill="white" />

                    {/* Modules connecting to hub */}
                    <g transform="translate(-80, -70)">
                      <path d="M 20 60 L 60 40" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="4 4" />
                      <rect x="-20" y="-20" width="40" height="40" rx="10" fill="url(#g2)" />
                      <circle cx="0" cy="0" r="8" fill="white" opacity="0.9" />
                    </g>

                    <g transform="translate(80, -70)">
                      <path d="M -20 60 L -60 40" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="4 4" />
                      <rect x="-20" y="-20" width="40" height="40" rx="10" fill="url(#g3)" />
                      <path d="M -8 -4 L 0 4 L 8 -4 L 8 8 L -8 8 Z" fill="white" opacity="0.9" />
                    </g>

                    <g transform="translate(0, 90)">
                      <path d="M 0 -20 L 0 -40" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="4 4" />
                      <rect x="-30" y="-20" width="60" height="40" rx="10" fill="url(#g1)" opacity="0.7" />
                      <line x1="-15" y1="-5" x2="15" y2="-5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      <line x1="-15" y1="5" x2="5" y2="5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    {/* Floating dots data transfer */}
                    <circle cx="-50" cy="-45" r="4" fill="#38bdf8">
                      <animate attributeName="cx" values="-80;-40;-80" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="-70;-25;-70" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="-45" r="4" fill="#c084fc">
                      <animate attributeName="cx" values="80;40;80" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="-70;-25;-70" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* Multi-Service Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "30px" }}>
              {[
                {
                  title: "Cloud Infrastructure",
                  desc: "Migrate, modernize, and manage your applications on hyperscalers (AWS, Azure, GCP). We build resilient, scalable cloud architectures that reduce TCO and accelerate time-to-market.",
                  icon: <Cloud size={32} color="#0ea5e9" />,
                  iconBg: "rgba(14, 165, 233, 0.1)",
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
                  points: ["Cloud Native Architecture", "Multi-Cloud Strategy", "DevOps & CI/CD Setup", "Cloud Security"],
                  delay: 0.1
                },
                {
                  title: "Data Analytics & AI",
                  desc: "Transform raw enterprise data into actionable intelligence. We design robust data lakes, implement advanced analytics, and integrate AI models to drive predictive decision-making.",
                  icon: <Database size={32} color="#8b5cf6" />,
                  iconBg: "rgba(139, 92, 246, 0.1)",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
                  points: ["Enterprise Data Warehousing", "Business Intelligence", "Predictive Analytics", "Machine Learning Integration"],
                  delay: 0.2
                },
                {
                  title: "Cybersecurity Services",
                  desc: "Protect your digital assets with enterprise-grade security. We implement Zero Trust architectures, continuous monitoring, and robust compliance frameworks.",
                  icon: <Shield size={32} color="#f43f5e" />,
                  iconBg: "rgba(244, 63, 94, 0.1)",
                  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
                  points: ["Zero Trust Implementation", "Vulnerability Management", "Identity & Access", "Regulatory Compliance"],
                  delay: 0.3
                },
                {
                  title: "Digital Engineering",
                  desc: "Accelerate innovation with custom software. We utilize agile methodologies to build high-performance web, mobile, and cloud-native applications tailored for your enterprise.",
                  icon: <Zap size={32} color="#f59e0b" />,
                  iconBg: "rgba(245, 158, 11, 0.1)",
                  image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
                  points: ["Custom Product Development", "Microservices Architecture", "API Integration", "Legacy Modernization"],
                  delay: 0.4
                },
                {
                  title: "Generative AI Solutions",
                  desc: "Harness the power of Large Language Models and Generative AI. We build custom AI assistants, automate content creation, and integrate cutting-edge models into your workflows.",
                  icon: <Target size={32} color="#10b981" />,
                  iconBg: "rgba(16, 185, 129, 0.1)",
                  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
                  points: ["Custom LLM Integration", "AI-Powered Assistants", "Workflow Automation", "Prompt Engineering"],
                  delay: 0.5
                },
                {
                  title: "Managed IT Services",
                  desc: "End-to-end IT support and operations management. We ensure your infrastructure runs smoothly 24/7 with proactive monitoring, helpdesk support, and automated remediation.",
                  icon: <Globe size={32} color="#6366f1" />,
                  iconBg: "rgba(99, 102, 241, 0.1)",
                  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
                  points: ["24/7 Monitored Support", "NOC & SOC Operations", "IT Asset Management", "Disaster Recovery"],
                  delay: 0.6
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: service.delay }}
                  style={{
                    background: "white",
                    padding: isMobile ? "24px" : "40px",
                    borderRadius: isMobile ? "24px" : "32px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}
                >
                  <div style={{ background: service.iconBg, display: "inline-flex", padding: "12px", borderRadius: "16px", marginBottom: "24px", alignSelf: "flex-start" }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: isMobile ? "24px" : "28px", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>{service.title}</h3>
                  <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "24px", flexGrow: 1 }}>
                    {service.desc}
                  </p>
                  <div style={{ width: "100%", height: isMobile ? "180px" : "220px", borderRadius: "18px", overflow: "hidden", marginBottom: "24px" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {service.points.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#334155", fontWeight: "600", fontSize: "15px" }}>
                        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "50%", padding: "4px" }}>
                          <ArrowRight size={14} color="#64748b" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Expertise Delivery / Why Choose Us */}
      <section style={{ padding: isMobile ? "80px 20px" : "100px 6%", background: "white", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: "center", marginBottom: isMobile ? "44px" : "60px" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "16px", letterSpacing: "-1px" }}>The Galacticos Advantage</h2>
            <p style={{ fontSize: isMobile ? "16px" : "18px", color: "#64748b", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
              Our methodology guarantees low-risk implementations and high-quality deliverables, backed by industry-standard frameworks and certified deep-tech professionals.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}
          >
            {[
              {
                title: "Certified Talent",
                desc: "A vast network of SAP, AWS, and Azure certified consultants ready to deploy globally.",
                icon: <Shield size={28} color="#4f46e5" />
              },
              {
                title: "Agile Delivery",
                desc: "Sprint-based implementation models ensuring transparency, speed, and continuous feedback.",
                icon: <Zap size={28} color="#0ea5e9" />
              },
              {
                title: "Global Reach",
                desc: "Offshore, nearshore, and onsite delivery centers providing optimized cost-arbitrage.",
                icon: <Globe size={28} color="#8b5cf6" />
              },
              {
                title: "Domain Knowledge",
                desc: "Deep industry expertise across Manufacturing, BFSI, Retail, and Life Sciences sectors.",
                icon: <Target size={28} color="#f59e0b" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                style={{
                  background: "#f8fafc",
                  padding: isMobile ? "24px" : "32px",
                  borderRadius: "24px",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{
                  background: "white",
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)"
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ color: "#64748b", lineHeight: "1.6", fontSize: "15px" }}>{item.desc}</p>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deep CTA Section */}
      <section style={{ padding: isMobile ? "80px 20px" : "100px 6%" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{
            background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
            borderRadius: isMobile ? "24px" : "32px",
            padding: isMobile ? "56px 24px" : "80px 40px",
            textAlign: "center",
            color: "white",
            maxWidth: "1100px",
            margin: "0 auto",
            boxShadow: "0 25px 50px -12px rgba(49, 46, 129, 0.3)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Decorative rings */}
          {!isMobile && <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "500px", height: "500px", border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>}
          {!isMobile && <div style={{ position: "absolute", bottom: "-50%", right: "-10%", width: "600px", height: "600px", border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>}

          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "800", marginBottom: "24px", letterSpacing: "-1px" }}>Ready to transform your enterprise?</h2>
            <p style={{ fontSize: isMobile ? "17px" : "20px", color: "#c7d2fe", maxWidth: "600px", margin: "0 auto 48px auto", lineHeight: "1.6" }}>
              Engage with our technology experts to discuss your IT landscape, blueprint a modernization strategy, and accelerate your digital journey.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              style={{ background: "white", color: "#1e1b4b", border: "none", padding: isMobile ? "16px 24px" : "20px 48px", borderRadius: "16px", fontSize: isMobile ? "16px" : "18px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s", width: isMobile ? "100%" : "auto" }}
            >
              Contact Our Experts
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
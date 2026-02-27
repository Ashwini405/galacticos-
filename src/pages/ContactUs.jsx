import React, { useState, useEffect } from "react";
import OfficesSection from "../components/home/OfficesSection";

const styles = `
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes expandLine {
    from { width: 0; }
    to { width: 120px; }
  }

  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(20px); }
  }

  @keyframes gridAnimated {
    0% { opacity: 0.15; }
    50% { opacity: 0.3; }
    100% { opacity: 0.15; }
  }

  @keyframes floatElement {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 0.3; }
  }

  @keyframes rotate360 {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes dataFlow {
    0% { stroke-dashoffset: 100; opacity: 0; }
    50% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0; }
  }

  /* Mobile Responsive Styles */
  @media (max-width: 1200px) {
    .hero-content {
      padding: 0 6% !important;
    }
    .contact-details-grid {
      gap: 60px !important;
    }
  }

  @media (max-width: 992px) {
    .hero-section {
      min-height: 70vh !important;
    }
    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .hero-image {
      order: 2 !important;
    }
    .hero-text {
      order: 1 !important;
      text-align: center;
    }
    .hero-text p {
      margin-left: auto;
      margin-right: auto;
    }
    .hero-line {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    
    .contact-details-grid {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    
    .contact-form-grid {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .form-illustration {
      order: 1 !important;
    }
    .form-container {
      order: 2 !important;
    }
    
    h1 {
      font-size: clamp(2rem, 4vw, 3rem) !important;
    }
    h2 {
      font-size: 32px !important;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      min-height: 60vh !important;
      padding: 96px 4% 30px !important;
    }
    .hero-grid {
      gap: 30px !important;
    }
    
    .contact-details-section {
      padding: 30px 4% !important;
    }
    .contact-details-grid {
      gap: 30px !important;
    }
    
    .contact-form-section {
      padding: 30px 4% !important;
    }
    .contact-form-grid {
      gap: 30px !important;
    }
    .form-container {
      padding: 25px !important;
    }
    .form-row {
      grid-template-columns: 1fr !important;
      gap: 10px !important;
    }
    
    .offices-section {
      padding: 40px 4% !important;
    }
    
    h1 {
      font-size: clamp(1.8rem, 3.5vw, 2.5rem) !important;
    }
    h2 {
      font-size: 28px !important;
    }
    h3 {
      font-size: 1.3rem !important;
    }
    p {
      font-size: 14px !important;
    }
    
    .contact-item {
      gap: 15px !important;
    }
    .contact-item svg {
      width: 24px !important;
      height: 24px !important;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      min-height: 50vh !important;
      padding: 92px 4% 24px !important;
    }
    .hero-grid {
      gap: 20px !important;
    }
    
    .contact-details-section {
      padding: 25px 4% !important;
    }
    .contact-details-grid {
      gap: 25px !important;
    }
    
    .contact-form-section {
      padding: 25px 4% !important;
    }
    .contact-form-grid {
      gap: 25px !important;
    }
    .form-container {
      padding: 20px !important;
      border-radius: 30px !important;
    }
    
    h1 {
      font-size: clamp(1.5rem, 3vw, 2rem) !important;
    }
    h2 {
      font-size: 24px !important;
      margin-bottom: 8px !important;
    }
    h3 {
      font-size: 1.2rem !important;
    }
    
    .hero-tag {
      font-size: 11px !important;
      padding: 6px 12px !important;
    }
    .hero-button {
      padding: 14px 30px !important;
      font-size: 14px !important;
    }
    
    .contact-item {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 10px !important;
    }
    .contact-item svg {
      width: 28px !important;
      height: 28px !important;
    }
    
    .form-row {
      gap: 15px !important;
    }
    input, textarea {
      padding: 10px !important;
      font-size: 14px !important;
    }
    button[type="submit"] {
      padding: 14px !important;
      font-size: 15px !important;
    }
    
    .offices-section {
      padding: 30px 4% !important;
    }
  }

  /* Tablet Landscape */
  @media (min-width: 769px) and (max-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 30px !important;
    }
    .contact-details-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 30px !important;
    }
    .contact-form-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 30px !important;
    }
    h1 {
      font-size: 2.8rem !important;
    }
  }
`;

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // --- SVG ASSETS ---

  const CloudIllustration = () => (
    <svg viewBox="0 0 500 500" style={{ width: '100%', maxWidth: '450px', filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))' }}>
      <path
        d="M400,300 c0,44-36,80-80,80 H180 c-55,0-100-45-100-100 c0-50,37-91,85-99 c12-40,49-70,93-70 c38,0,71,22,87,54 C375,175,400,210,400,250 C400,250,400,300,400,300z"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2"
      />
      <g style={{ animation: "floatElement 4s ease-in-out infinite" }}>
        <circle cx="250" cy="250" r="40" fill="rgba(0, 212, 255, 0.1)" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="2" />
        <path d="M235,250 L265,250 M250,235 L250,265" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g style={{ animation: "rotate360 25s linear infinite", transformOrigin: '250px 250px' }}>
        <circle cx="100" cy="250" r="15" fill="rgba(139, 195, 74, 0.2)" stroke="#8bc34a" strokeWidth="2" />
        <circle cx="400" cy="250" r="10" fill="rgba(0, 212, 255, 0.2)" stroke="#00d4ff" strokeWidth="2" />
      </g>
    </svg>
  );

  const ContactCallIllustration = () => (
    <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: '380px' }}>
      <circle cx="200" cy="200" r="150" fill="none" stroke="#e0e7ff" strokeWidth="1" strokeDasharray="5,5" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="#e0e7ff" strokeWidth="1" />

      {/* Animated Rings */}
      <circle cx="200" cy="200" r="20" fill="#8bc34a" style={{ animation: "pulse 2s infinite" }} />

      {/* Floating Icons Representation */}
      <g style={{ animation: "floatElement 5s ease-in-out infinite" }}>
        <rect x="280" y="100" width="60" height="40" rx="10" fill="white" shadow="0 4px 10px rgba(0,0,0,0.1)" />
        <path d="M295 120 h30" stroke="#0d6efd" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g style={{ animation: "floatElement 6s ease-in-out infinite reverse" }}>
        <circle cx="100" cy="150" r="30" fill="white" />
        <path d="M90 150 a10 10 0 0 1 20 0" fill="none" stroke="#8bc34a" strokeWidth="3" />
      </g>

      <path d="M150,300 Q200,350 250,300" fill="none" stroke="#0d6efd" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
    </svg>
  );

  const GridPattern = () => (
    <svg
      style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        opacity: 0.1, pointerEvents: "none", animation: "gridAnimated 6s ease-in-out infinite",
      }}
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#333", overflowX: "hidden", background: "#fff" }}>

      {/* HERO SECTION */}
      <section className="hero-section" style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #0a2351 0%, #0d6efd 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "100px 8% 0", /* Added top padding to clear navbar */
        overflow: 'hidden'
      }}>
        <GridPattern />
        <div className="hero-grid" style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "50px",
          alignItems: "center", width: "100%", zIndex: 2, animation: "slideInUp 1s ease-out"
        }}>
          <div className="hero-image" style={{ display: 'flex', justifyContent: 'center', animation: 'floatSlow 5s ease-in-out infinite' }}>
            <CloudIllustration />
          </div>
          <div className="hero-text" style={{ color: "#fff" }}>
            <div className="hero-tag" style={{
              display: "inline-flex", alignItems: "center", padding: "8px 16px",
              borderRadius: "20px", background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)",
              fontSize: "13px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", letterSpacing: '1px'
            }}>
              GET IN TOUCH
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}>
              Let’s Build Your<span style={{ color: "#00d4ff" }}>Next</span> Digital Transformation
            </h1>
            <div className="hero-line" style={{ width: "100px", height: "4px", background: "#8bc34a", marginBottom: "30px", borderRadius: "2px" }} />
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, opacity: 0.85, marginBottom: "40px", maxWidth: "550px", fontWeight: 300 }}>
              Connect with our experts to accelerate your SAP, Cloud, Data, and AI initiatives. We partner with enterprises to solve complex business challenges and deliver measurable outcomes.
            </p>
            <button className="hero-button" style={{
              padding: "18px 40px", borderRadius: "50px", border: "none",
              background: "#00d4ff", color: "#0a2351", fontWeight: "700",
              cursor: "pointer", transition: "0.3s", boxShadow: "0 10px 25px rgba(0,212,255,0.4)"
            }}>
              Talk to Our Experts →
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="contact-details-section" style={{
        position: 'relative',
        padding: '40px 8%',
        background: '#fcfdfe',
        color: '#1f2937'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 30px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '12px', lineHeight: 1.2 }}>Contact us</h2>
          <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: 1.7 }}>
            Have a business challenge or transformation initiative in mind? Our global team will respond within 24 business hours to understand your requirements and guide you with the right solution.
          </p>
        </div>

        <div className="contact-details-grid" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '100px', alignItems: 'center' }}>
          <div>
            <img src="/images/map.png" alt="Map" style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
            {[
              {
                title: 'Hyderabad, India',
                info: ['502, Madhu Residency', 'HITEC City, Hyderabad, Telangana 500081'],
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              },
              {
                title: 'USA',
                info: ['Raleigh, North Carolina - 27526'],
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              },
              {
                title: 'Our Mailbox',
                info: ['hr@galacticosnetwork.com'],
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
              },
              {
                title: 'Our Phone',
                info: ['+1 91 9843764273'],
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              }
            ].map((item, i) => (
              <div key={i} className="contact-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{item.title}</h3>
                  {item.info.map((line, j) => (
                    <p key={j} style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION WITH ILLUSTRATION */}
      <section className="contact-form-section" style={{ padding: "40px 8%", background: "#fff" }}>
        <div className="contact-form-grid" style={{
          maxWidth: "1100px", margin: "0 auto", display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr", gap: "50px", alignItems: "center"
        }}>
          {/* Left Side: Call Illustration */}
          <div className="form-illustration" style={{ textAlign: 'center', animation: 'floatSlow 6s ease-in-out infinite' }}>
            <div style={{ marginBottom: '15px' }}>
              <ContactCallIllustration />
            </div>
            <h3 style={{ color: '#0a2351', fontSize: '1.6rem', marginBottom: '8px' }}>Start a Conversation</h3>
            <p style={{ color: '#64748b' }}>Our consultants will get back to you within one business day.</p>
          </div>

          {/* Right Side: Form */}
          <div className="form-container" style={{
            padding: "35px", borderRadius: "40px", background: "#f8fafc",
            border: "1px solid #f1f5f9", boxShadow: "0 40px 80px rgba(0,0,0,0.05)"
          }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "25px", color: "#0a2351", fontWeight: 800 }}>Speak with a Transformation Expert</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600 }}>First Name *</label>
                  <input type="text" placeholder="John" required style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #e2e8f0", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600 }}>Email Address *</label>
                  <input type="email" placeholder="john@company.com" required style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #e2e8f0", outline: "none" }} />
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600 }}>Message</label>
                <textarea rows="4" placeholder="Tell us about your business requirement or transformation goal" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #e2e8f0", outline: "none", resize: "none" }}></textarea>
              </div>
              <button type="submit" style={{
                width: "100%", padding: "16px", borderRadius: "15px", border: "none",
                background: "#0a2351", color: "#fff", fontWeight: "700", cursor: "pointer",
                fontSize: "1.05rem", transition: '0.3s', boxShadow: '0 10px 20px rgba(10,35,81,0.2)'
              }}
                onMouseEnter={(e) => e.target.style.background = "#0d6efd"}
                onMouseLeave={(e) => e.target.style.background = "#0a2351"}
              >
                {isSubmitted ? "✓ Thank you. Our team will contact you shortly." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* OFFICES SECTION */}
      <div className="offices-section">
        <OfficesSection />
      </div>

    </div>
  );
}
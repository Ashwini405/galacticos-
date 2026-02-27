import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Globe, Shield, Zap, Cpu, Network, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 0.5;
        this.baseColor = Math.random() > 0.4 ? '0, 195, 255' : '100, 50, 255';
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.05;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            this.x -= dx * 0.03;
            this.y -= dy * 0.03;
          }
        }
      }

      draw() {
        const opacity = 0.5 + Math.sin(this.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.baseColor}, ${opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${this.baseColor}, ${opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    particles = Array.from({ length: 70 }, () => new Particle());

    function animate() {
      // Create a trailing effect for smooth movement
      ctx.fillStyle = 'rgba(2, 6, 23, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 195, 255, ${0.15 - dist / 866})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw connecting lines to mouse
      if (mouse.x != null && mouse.y != null) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 50, 255, ${0.4 - dist / 400})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .about-section-wrapper {
          position: relative;
          padding: clamp(88px, 10vw, 120px) 6%;
          background: #020617; /* Deep Slate Background */
          display: flex;
          align-items: center;
          gap: clamp(34px, 5vw, 72px);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* Dynamic Glow Backgrounds */
        .ambient-glow-1 {
          position: absolute;
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(0, 195, 255, 0.08) 0%, transparent 60%);
          top: -150px;
          left: -150px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .ambient-glow-2 {
          position: absolute;
          width: 750px;
          height: 750px;
          background: radial-gradient(circle, rgba(100, 50, 255, 0.08) 0%, transparent 60%);
          bottom: -250px;
          right: -150px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        /* Left Side: Canvas & Visualization */
        .about-visual-side {
          flex: 1;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          perspective: 1200px;
        }

        .visual-container {
          position: relative;
          width: 100%;
          max-width: 560px;
          height: clamp(420px, 48vw, 500px);
          border-radius: 26px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 62px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          overflow: hidden;
          transform: rotateY(6deg) rotateX(4deg);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .visual-container:hover {
          transform: rotateY(0deg) rotateX(0deg) translateY(-12px);
          box-shadow: 0 50px 100px rgba(0, 195, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .glass-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 26px;
          z-index: 1;
          pointer-events: auto; /* Allow mouse events */
        }

        /* Decorative Overlay */
        .visual-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(2, 6, 23, 0.85) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Floating Stats Panels */
        .float-card {
          position: absolute;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 14px 18px;
          color: #fff;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
          animation: floatFloat 6s ease-in-out infinite;
        }

        .float-card-1 {
          top: 32px;
          right: -18px;
          animation-delay: 0s;
        }

        .float-card-2 {
          bottom: 42px;
          left: -24px;
          animation-delay: -3s;
        }

        .card-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 195, 255, 0.12);
          color: #00c3ff;
          box-shadow: 0 0 20px rgba(0, 195, 255, 0.2);
        }
        
        .float-card-2 .card-icon {
          background: rgba(100, 50, 255, 0.12);
          color: #8b5cf6;
          box-shadow: 0 0 20px rgba(100, 50, 255, 0.2);
        }

        .card-text h4 {
          font-size: 1.12rem;
          font-weight: 800;
          margin: 0 0 2px 0;
          letter-spacing: -0.5px;
        }

        .card-text p {
          font-size: 0.78rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
        }

        @keyframes floatFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        /* Right Side: Content */
        .about-content-side {
          flex: 1.15;
          z-index: 2;
          max-width: 650px;
        }

        .section-tagline {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 18px;
          background: rgba(0, 195, 255, 0.1);
          border: 1px solid rgba(0, 195, 255, 0.2);
          border-radius: 100px;
          color: #00c3ff;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #00c3ff;
          border-radius: 50%;
          box-shadow: 0 0 12px #00c3ff;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(0, 195, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 195, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 195, 255, 0); }
        }

        .about-content-side h2 {
          font-size: clamp(2.2rem, 3.8vw, 3.35rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -1.2px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-highlight {
          background: linear-gradient(135deg, #00c3ff 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-content-side > p {
          font-size: 1.04rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 92%;
        }

        /* Features Modern Grid */
        .aesthetic-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }

        .feature-box {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-box:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(0, 195, 255, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
        }

        .f-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(0, 195, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00c3ff;
          flex-shrink: 0;
        }

        .f-text h5 {
          color: #f1f5f9;
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 6px 0;
          letter-spacing: -0.3px;
        }

        .f-text p {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.45;
          margin: 0;
        }

        /* Animated Call to Action Button */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #00c3ff 0%, #0066ff 100%);
          color: #fff;
          font-size: 0.98rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          box-shadow: 0 9px 24px rgba(0, 195, 255, 0.24);
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }

        .cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 13px 32px rgba(0, 195, 255, 0.34);
        }

        .cta-btn:hover::before {
          left: 100%;
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        
        .cta-btn:hover .arrow-icon {
          transform: translateX(6px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .about-section-wrapper {
            flex-direction: column;
            padding: 88px 5% 82px;
            text-align: center;
            gap: 34px;
          }
          
          .about-visual-side {
            width: 100%;
            margin-bottom: 14px;
          }

          .visual-container {
            transform: none;
          }
          
          .visual-container:hover {
            transform: translateY(-10px);
          }

          .float-card-1 { right: -6px; }
          .float-card-2 { left: -6px; }
          .float-card { padding: 14px 20px; }

          .section-tagline { margin: 0 auto 18px; }
          .about-content-side > p { margin: 0 auto 26px; max-width: 86%; }
          .aesthetic-features { text-align: left; }
        }

        @media (max-width: 768px) {
          .about-section-wrapper {
            padding: 72px 5% 68px;
            gap: 24px;
          }

          .visual-container {
            height: 380px;
            border-radius: 20px;
          }

          .glass-canvas {
            border-radius: 20px;
          }

          .aesthetic-features {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 28px;
          }
          
          .about-content-side h2 {
            font-size: 1.95rem;
            line-height: 1.2;
            margin-bottom: 14px;
          }

          .about-content-side > p {
            font-size: 0.98rem;
            margin-bottom: 22px;
            max-width: 100%;
          }
          
          .float-card {
            display: none; 
          }
        }
      `}</style>

      <section className="about-section-wrapper">
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />

        <div className="about-visual-side">
          <div className="visual-container">
            <canvas ref={canvasRef} className="glass-canvas" />
            <div className="visual-overlay" />

            <div className="float-card float-card-1">
              <div className="card-icon"><Network size={26} /></div>
              <div className="card-text">
                <h4>High Availability</h4>
                <p>Resilient Architecture</p>
              </div>
            </div>

            <div className="float-card float-card-2">
              <div className="card-icon"><Cpu size={26} /></div>
              <div className="card-text">
                <h4>AI Ops</h4>
                <p>Optimized Core</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content-side">
          <div className="section-tagline">
            <span className="pulse-dot"></span>
            Global Delivery Partner
          </div>

          <h2>
            <span className="text-gradient">Engineering transformation for </span>
            <span className="text-highlight">global enterprises</span>
          </h2>

          <p>
            We integrate SAP, cloud, data, and AI into a unified enterprise architecture that improves operational resilience,
            financial visibility, and digital agility. Our teams design scalable platforms that align technology investments
            with measurable business outcomes.
          </p>

          <div className="aesthetic-features">
            <div className="feature-box">
              <div className="f-icon-wrap"><Globe size={22} /></div>
              <div className="f-text">
                <h5>Global Scale</h5>
                <p>Multi-region enterprise delivery with scalable architecture design.</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="f-icon-wrap"><Zap size={22} /></div>
              <div className="f-text">
                <h5>Outcome Driven</h5>
                <p>KPI-aligned programs focused on measurable ROI and accelerated transformation timelines.</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="f-icon-wrap"><Shield size={22} /></div>
              <div className="f-text">
                <h5>Enterprise Security</h5>
                <p>Enterprise-grade security frameworks with governance, compliance, and risk controls embedded by design.</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="f-icon-wrap"><Cpu size={22} /></div>
              <div className="f-text">
                <h5>Deep Expertise</h5>
                <p>Certified SAP and enterprise technology consultants with deep domain specialization.</p>
              </div>
            </div>
          </div>

          <Link to="/contact" className="cta-btn">
            Explore Capabilities
            <ArrowRight className="arrow-icon" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
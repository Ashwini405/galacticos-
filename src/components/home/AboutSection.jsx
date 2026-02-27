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
        this.radius = Math.random() * 3 + 1.2; // larger
        this.baseColor = Math.random() > 0.4 ? '0, 195, 255' : '100, 50, 255';
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.05;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            this.x -= dx * 0.03;
            this.y -= dy * 0.03;
          }
        }
      }

      draw() {
        const opacity = 0.6 + Math.sin(this.pulse) * 0.4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.baseColor}, ${opacity})`;
        ctx.shadowBlur = 22;
        ctx.shadowColor = `rgba(${this.baseColor}, ${opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    particles = Array.from({ length: 110 }, () => new Particle()); // more particles

    function animate() {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 195, 255, ${0.25 - dist / 720})`;
            ctx.lineWidth = 1.4;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      if (mouse.x != null && mouse.y != null) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 250) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 50, 255, ${0.6 - dist / 416})`;
            ctx.lineWidth = 2.2;
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
          padding: clamp(72px, 9vw, 110px) 0 clamp(72px, 8vw, 96px) 6%;
          background: #020617;
          display: flex;
          align-items: flex-start;
          gap: clamp(40px, 6vw, 80px);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* Larger glows extending to left edge */
        .ambient-glow-1 {
          position: absolute;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(0, 195, 255, 0.15) 0%, transparent 70%);
          top: -300px;
          left: -300px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .ambient-glow-2 {
          position: absolute;
          width: 1100px;
          height: 1100px;
          background: radial-gradient(circle, rgba(100, 50, 255, 0.15) 0%, transparent 70%);
          bottom: -400px;
          right: -250px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        /* Left Side: Canvas & Visualization - flush left */
        .about-visual-side {
          flex: 1.3;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: flex-end;
          perspective: 1200px;
          margin-left: 0;
        }

        .visual-container {
          position: relative;
          width: 100%;
          max-width: 800px; /* larger */
          height: clamp(440px, 46vw, 560px);
          overflow: hidden;
          background: transparent;
          box-shadow: none;
          border: none;
          transform: rotateY(4deg) rotateX(2deg);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .visual-container:hover {
          transform: rotateY(0deg) rotateX(0deg) translateY(-15px);
        }

        .glass-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: auto;
        }

        .visual-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, transparent 20%, rgba(2, 6, 23, 0.8) 95%);
          z-index: 2;
          pointer-events: none;
        }

        /* Floating cards - larger, positioned to stay within expanded canvas */
        .float-card {
          position: absolute;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 24px;
          padding: 22px 28px;
          color: #fff;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
          animation: floatFloat 8s ease-in-out infinite;
        }

        .float-card-1 {
          top: 60px;
          right: -20px;
          animation-delay: 0s;
        }

        .float-card-2 {
          bottom: 80px;
          left: -30px;
          animation-delay: -4s;
        }

        .card-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 195, 255, 0.2);
          color: #00c3ff;
          box-shadow: 0 0 40px rgba(0, 195, 255, 0.4);
        }
        
        .float-card-2 .card-icon {
          background: rgba(100, 50, 255, 0.2);
          color: #8b5cf6;
          box-shadow: 0 0 40px rgba(100, 50, 255, 0.4);
        }

        .card-text h4 {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }

        .card-text p {
          font-size: 1rem;
          color: #cbd5e1;
          margin: 0;
          font-weight: 500;
        }

        @keyframes floatFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-24px); }
        }

        /* Right Side: Content - now with normal padding */
        .about-content-side {
          flex: 1;
          z-index: 2;
          max-width: 650px;
          padding-right: 2%; /* slight breathing */
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: clamp(440px, 46vw, 560px);
        }

        .section-tagline {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 10px 22px;
          background: rgba(0, 195, 255, 0.18);
          border: 1px solid rgba(0, 195, 255, 0.3);
          border-radius: 100px;
          color: #00c3ff;
          font-weight: 600;
          font-size: 0.92rem;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pulse-dot {
          width: 12px;
          height: 12px;
          background: #00c3ff;
          border-radius: 50%;
          box-shadow: 0 0 20px #00c3ff;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(0, 195, 255, 0.7); }
          70% { box-shadow: 0 0 0 18px rgba(0, 195, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 195, 255, 0); }
        }

        .about-content-side h2 {
          font-size: clamp(1.9rem, 2.8vw, 2.7rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -0.8px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-highlight {
          background: linear-gradient(135deg, #00c3ff 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-content-side > p {
          font-size: 1.03rem;
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 30px;
          max-width: 90%;
        }

        /* Features Modern Grid */
        .aesthetic-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-bottom: 34px;
        }

        .feature-box {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-box:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 195, 255, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
        }

        .f-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(0, 195, 255, 0.12);
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
          color: #6b7280;
          font-size: 0.92rem;
          line-height: 1.45;
          margin: 0;
        }

        /* Animated CTA Button */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #00c3ff 0%, #0066ff 100%);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 32px rgba(0, 195, 255, 0.35);
          margin-top: auto;
          align-self: flex-start;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          transition: left 0.6s ease;
        }

        .cta-btn:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 195, 255, 0.5);
        }

        .cta-btn:hover::before {
          left: 100%;
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        
        .cta-btn:hover .arrow-icon {
          transform: translateX(10px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .about-section-wrapper {
            flex-direction: column;
            padding: 88px 5% 72px 5%;
            text-align: center;
            gap: 50px;
          }
          
          .about-visual-side {
            justify-content: center;
            width: 100%;
          }

          .visual-container {
            transform: none;
          }
          
          .visual-container:hover {
            transform: translateY(-15px);
          }

          .float-card-1 { right: 0; }
          .float-card-2 { left: 0; }

          .section-tagline { margin: 0 auto 22px; }
          .about-content-side > p { margin: 0 auto 36px; max-width: 90%; }
          .aesthetic-features { text-align: left; }
          .about-content-side {
            padding-right: 0;
            min-height: 0;
            align-items: center;
          }

          .cta-btn {
            margin-top: 0;
            align-self: center;
          }
        }

        @media (max-width: 768px) {
          .about-section-wrapper {
            padding: 72px 5% 60px;
            gap: 40px;
          }

          .visual-container {
            height: 400px;
          }

          .aesthetic-features {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 36px;
          }
          
          .about-content-side h2 {
            font-size: 2.5rem;
            margin-bottom: 22px;
          }

          .about-content-side > p {
            font-size: 1.1rem;
            margin-bottom: 30px;
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

        <div className="about-content-side">
          

          <h2>
            <span className="text-gradient">Engineering transformation for </span>
            <span className="text-highlight">global enterprises</span>
          </h2>

          <p>
            We combine deep expertise in SAP, cloud, data, and AI to help organizations
            scale faster, operate smarter, and build an infrastructure prepared for tomorrow's challenges.
          </p>

          <div className="aesthetic-features">
            <div className="feature-box">
              <div className="f-icon-wrap"><Globe size={26} /></div>
              <div className="f-text">
                <h5>Global Scale</h5>
                <p>Distributed infrastructure supporting millions of concurrent operations.</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="f-icon-wrap"><Zap size={26} /></div>
              <div className="f-text">
                <h5>Outcome Driven</h5>
                <p>Focusing on measurable impact and accelerated time-to-market.</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="f-icon-wrap"><Shield size={26} /></div>
              <div className="f-text">
                <h5>Enterprise Security</h5>
                <p>Bank-grade encryption and zero-trust architecture built-in.</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="f-icon-wrap"><Cpu size={26} /></div>
              <div className="f-text">
                <h5>Deep Expertise</h5>
                <p>Specialized talent pools dedicated to solving complex hurdles.</p>
              </div>
            </div>
          </div>

          <Link to="/contact" className="cta-btn">
            Explore Capabilities
            <ArrowRight className="arrow-icon" size={24} />
          </Link>
        </div>

        <div className="about-visual-side">
          <div className="visual-container">
            <canvas ref={canvasRef} className="glass-canvas" />
            <div className="visual-overlay" />

            <div className="float-card float-card-1">
              <div className="card-icon"><Network size={34} /></div>
              
            </div>

            <div className="float-card float-card-2">
              <div className="card-icon"><Cpu size={34} /></div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
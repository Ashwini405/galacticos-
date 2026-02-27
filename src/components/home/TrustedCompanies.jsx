import React from "react";

export default function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <style>{`
        .trusted-companies {
          position: relative;
          padding: 80px 0; /* Removing side padding for full-width marquee fade */
          background: #0f0c29; /* Deep dark violet base */
          background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Elevated Ambient Glows / Mesh Background Elements */
        .trusted-glow-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 60%);
          top: -300px;
          left: -200px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          animation: floatOrb 10s ease-in-out infinite alternate;
        }

        .trusted-glow-2 {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(0, 195, 255, 0.1) 0%, transparent 60%);
          bottom: -400px;
          right: -200px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          animation: floatOrb 12s ease-in-out infinite alternate-reverse;
        }

        /* Subtle grid overlay for tech feel */
        .trusted-grid-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          z-index: 1;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, 30px) scale(1.1); }
        }

        .trusted-container {
          position: relative;
          width: 100%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .trusted-label {
          text-align: center;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00c3ff;
          margin-bottom: 12px;
        }

        .trusted-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          margin-bottom: 60px;
          background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -1px;
          padding: 0 6%;
        }

        .logos-marquee-wrapper {
          position: relative;
          display: flex;
          overflow: hidden;
          width: 100%;
          /* Left & Right fade mask for the marquee */
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeMove 35s linear infinite;
        }

        @keyframes marqueeMove {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        .logos-marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .logo-item {
          flex: 0 0 auto;
          padding: 0 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-item img {
          max-width: 160px;
          max-height: 80px;
          object-fit: contain;
          /* Auto-highlighted: Pure white & visible without hover */
          filter: grayscale(100%) brightness(0) invert(1) opacity(0.9) drop-shadow(0 0 8px rgba(0, 195, 255, 0.2));
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .logo-item:hover img {
          /* Full opacity white on hover + extra scale + stronger glow */
          filter: grayscale(100%) brightness(0) invert(1) opacity(1) drop-shadow(0 0 20px rgba(0, 195, 255, 0.5));
          transform: scale(1.1) translateY(-2px);
        }

        /* ===== TABLET ===== */
        @media (max-width: 1024px) {
          .marquee-track { animation-duration: 25s; }
          .logo-item { padding: 0 35px; }
          .logo-item img {
            max-width: 130px;
            max-height: 70px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .trusted-companies {
            padding: 50px 0;
          }
          .trusted-title {
            font-size: 1.8rem;
            margin-bottom: 40px;
          }
          .marquee-track { animation-duration: 15s; }
          .logo-item { padding: 0 25px; }
          .logo-item img {
            max-width: 100px;
            max-height: 50px;
          }
        }

      `}</style>

      <div className="trusted-glow-1" />
      <div className="trusted-glow-2" />
      <div className="trusted-grid-overlay" />

      <div className="trusted-container">
        <div className="trusted-label">Trusted By</div>
        <h2 className="trusted-title">Global Enterprises</h2>

        <div className="logos-marquee-wrapper">
          <div className="marquee-track">
            {/* SET 1 */}
            <div className="logo-item"><img src="https://www.sagarsoft.in/wp-content/uploads/2022/07/logo-black.png" alt="Sagarsoft" /></div>
            <div className="logo-item"><img src="https://www.fintinc.com/uploads/logo_be8aba0197.png" alt="Fintinc" /></div>
            <div className="logo-item"><img src="https://bhavnacorp.com/wp-content/uploads/2025/08/logo.png" alt="Bhavna Corp" /></div>
            <div className="logo-item"><img src="https://www.kpipartners.com/hubfs/KPI-Partners-2021/Icons/KPI%20Logo%20(1).svg" alt="KPI Partners" /></div>
            <div className="logo-item"><img src="https://levitateconsulting.tech/home/wp-content/uploads/2020/01/headerlogo.png" alt="Levitate Consulting" /></div>
            <div className="logo-item"><img src="https://pyxismcg.com/images/logo.png" alt="Pyxis" /></div>
            <div className="logo-item"><img src="https://logo.clearbit.com/kanerika.com" alt="Kanerica" /></div>

            {/* SET 2 (Duplicate for continuous marquee effect) */}
            <div className="logo-item"><img src="https://www.sagarsoft.in/wp-content/uploads/2022/07/logo-black.png" alt="Sagarsoft" /></div>
            <div className="logo-item"><img src="https://www.fintinc.com/uploads/logo_be8aba0197.png" alt="Fintinc" /></div>
            <div className="logo-item"><img src="https://bhavnacorp.com/wp-content/uploads/2025/08/logo.png" alt="Bhavna Corp" /></div>
            <div className="logo-item"><img src="https://www.kpipartners.com/hubfs/KPI-Partners-2021/Icons/KPI%20Logo%20(1).svg" alt="KPI Partners" /></div>
            <div className="logo-item"><img src="https://levitateconsulting.tech/home/wp-content/uploads/2020/01/headerlogo.png" alt="Levitate Consulting" /></div>
            <div className="logo-item"><img src="https://pyxismcg.com/images/logo.png" alt="Pyxis" /></div>
            <div className="logo-item"><img src="https://logo.clearbit.com/kanerika.com" alt="Kanerica" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
// import React, { useEffect, useRef, useState } from "react";

// export default function CaseStudiesSection() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);

//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;
//       setMousePos({ x, y });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       observer.disconnect();
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // ========== ADVANCED SVG ILLUSIONS ==========
//   const renderIllusion = (category) => {
//     switch (category) {
//       case "Cloud":
//         return (
//           <div className="illusion-container">
//             <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
//               <defs>
//                 <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
//                   <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
//                 </linearGradient>
//                 <filter id="glow">
//                   <feGaussianBlur stdDeviation="2" result="coloredBlur" />
//                   <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>
//               <path className="svg-cloud float-anim" d="M30 60 Q30 45 45 45 Q55 30 70 40 Q85 40 85 55 Q95 60 85 75 L30 75 Q15 75 15 60 Z" fill="url(#cloudGrad)" filter="url(#glow)" />
//               <g className="data-streams">
//                 <line x1="35" y1="80" x2="35" y2="100" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 4" className="stream-anim" style={{ animationDelay: "0s" }} />
//                 <line x1="50" y1="85" x2="50" y2="100" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 4" className="stream-anim" style={{ animationDelay: "0.5s" }} />
//                 <line x1="65" y1="80" x2="65" y2="100" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" className="stream-anim" style={{ animationDelay: "0.2s" }} />
//                 <circle cx="50" cy="55" r="3" fill="#fff" className="pulse-slow" />
//                 <circle cx="35" cy="65" r="2" fill="#bfdbfe" className="pulse-slow" style={{ animationDelay: "1s" }} />
//                 <circle cx="65" cy="65" r="2" fill="#bfdbfe" className="pulse-slow" style={{ animationDelay: "1.5s" }} />
//               </g>
//             </svg>
//           </div>
//         );
//       case "SAP":
//         return (
//           <div className="illusion-container">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <defs>
//                 <linearGradient id="sapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
//                   <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
//                 </linearGradient>
//                 <linearGradient id="sapGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
//                   <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.1" />
//                 </linearGradient>
//               </defs>
//               <g className="spin-slow" transform="origin(50 50)">
//                 <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="url(#sapGrad)" strokeWidth="1.5" transform="rotate(30 50 50)" />
//                 <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="url(#sapGrad2)" strokeWidth="1.5" transform="rotate(-30 50 50)" />
//                 <circle cx="50" cy="50" r="10" fill="url(#sapGrad)" />
//                 <circle cx="50" cy="50" r="5" fill="#fff" className="pulse-fast" />
//                 <circle cx="15" cy="50" r="3" fill="#a78bfa" className="orbit-dot1" />
//                 <circle cx="85" cy="50" r="3" fill="#34d399" className="orbit-dot2" />
//               </g>
//               <polygon points="50,20 60,35 40,35" fill="rgba(167, 139, 250, 0.4)" className="float-anim" />
//               <polygon points="50,80 60,65 40,65" fill="rgba(52, 211, 153, 0.4)" className="float-anim" style={{ animationDelay: "1s" }} />
//             </svg>
//           </div>
//         );
//       case "Hyperion":
//         return (
//           <div className="illusion-container">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <defs>
//                 <linearGradient id="hypGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
//                   <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
//                 </linearGradient>
//               </defs>
//               <g className="matrix-grid">
//                 {[...Array(6)].map((_, i) => (
//                   <line key={`v${i}`} x1={20 + i * 12} y1="10" x2={20 + i * 12} y2="90" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" />
//                 ))}
//                 {[...Array(6)].map((_, i) => (
//                   <line key={`h${i}`} x1="10" y1={20 + i * 12} x2="90" y2={20 + i * 12} stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" />
//                 ))}
//               </g>
//               <g className="cube-anim">
//                 <polygon points="50,30 30,42 50,54 70,42" fill="url(#hypGrad)" opacity="0.8" />
//                 <polygon points="30,42 30,66 50,78 50,54" fill="url(#hypGrad)" opacity="0.6" />
//                 <polygon points="70,42 70,66 50,78 50,54" fill="url(#hypGrad)" opacity="0.4" />
//                 <line x1="50" y1="54" x2="50" y2="78" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
//                 <line x1="30" y1="42" x2="50" y2="54" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
//                 <line x1="70" y1="42" x2="50" y2="54" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
//               </g>
//               <circle cx="50" cy="30" r="2" fill="#fff" className="pulse-fast" />
//             </svg>
//           </div>
//         );
//       case "Automation":
//         return (
//           <div className="illusion-container">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <defs>
//                 <conicGradient id="radar" cx="50%" cy="50%" angle="0deg">
//                   <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
//                   <stop offset="25%" stopColor="rgba(34, 197, 94, 0.5)" />
//                   <stop offset="25.5%" stopColor="transparent" />
//                   <stop offset="100%" stopColor="transparent" />
//                 </conicGradient>
//               </defs>
//               <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1" />
//               <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
//               <circle cx="50" cy="50" r="10" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />

//               <circle cx="50" cy="50" r="40" fill="url(#radar)" className="radar-spin" />

//               <g className="target-dots">
//                 <circle cx="30" cy="30" r="2" fill="#4ade80" className="blink" style={{ animationDelay: "0s" }} />
//                 <circle cx="70" cy="40" r="2" fill="#4ade80" className="blink" style={{ animationDelay: "0.5s" }} />
//                 <circle cx="40" cy="70" r="2" fill="#4ade80" className="blink" style={{ animationDelay: "1s" }} />
//                 <circle cx="75" cy="75" r="2" fill="#4ade80" className="blink" style={{ animationDelay: "1.5s" }} />
//               </g>

//               <path d="M 10,50 L 90,50 M 50,10 L 50,90" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="0.5" />
//             </svg>
//           </div>
//         );
//       case "AI / ML":
//         return (
//           <div className="illusion-container">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <defs>
//                 <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#f472b6" />
//                   <stop offset="100%" stopColor="#6366f1" />
//                 </linearGradient>
//               </defs>
//               <g className="neural-nodes">
//                 <path d="M20,50 Q40,20 50,50 T80,50" fill="none" stroke="url(#aiGrad)" strokeWidth="1.5" className="path-pulse" />
//                 <path d="M20,50 Q40,80 50,50 T80,50" fill="none" stroke="url(#aiGrad)" strokeWidth="1" strokeDasharray="2 4" className="path-pulse-rev" />
//                 <path d="M50,20 L50,80" fill="none" stroke="url(#aiGrad)" strokeWidth="0.5" opacity="0.5" />

//                 <circle cx="20" cy="50" r="4" fill="#f472b6" className="pulse-slow" />
//                 <circle cx="80" cy="50" r="4" fill="#6366f1" className="pulse-slow" style={{ animationDelay: "1s" }} />

//                 <circle cx="50" cy="20" r="3" fill="#a855f7" className="pulse-slow" style={{ animationDelay: "0.5s" }} />
//                 <circle cx="50" cy="50" r="6" fill="url(#aiGrad)" className="pulse-fast" />
//                 <circle cx="50" cy="80" r="3" fill="#a855f7" className="pulse-slow" style={{ animationDelay: "1.5s" }} />

//                 <circle cx="50" cy="50" r="10" fill="none" stroke="#fff" strokeWidth="0.5" className="ripple" />
//               </g>
//             </svg>
//           </div>
//         );
//       case "Talent":
//         return (
//           <div className="illusion-container">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <defs>
//                 <radialGradient id="talentGrad" cx="50%" cy="50%" r="50%">
//                   <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8" />
//                   <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
//                 </radialGradient>
//               </defs>
//               <g className="talent-network">
//                 <line x1="50" y1="50" x2="20" y2="30" stroke="rgba(251, 146, 60, 0.4)" strokeWidth="1" className="draw-line" />
//                 <line x1="50" y1="50" x2="80" y2="30" stroke="rgba(251, 146, 60, 0.4)" strokeWidth="1" className="draw-line" style={{ animationDelay: "0.2s" }} />
//                 <line x1="50" y1="50" x2="30" y2="80" stroke="rgba(251, 146, 60, 0.4)" strokeWidth="1" className="draw-line" style={{ animationDelay: "0.4s" }} />
//                 <line x1="50" y1="50" x2="70" y2="80" stroke="rgba(251, 146, 60, 0.4)" strokeWidth="1" className="draw-line" style={{ animationDelay: "0.6s" }} />

//                 <circle cx="50" cy="50" r="15" fill="url(#talentGrad)" className="pulse-slow" />
//                 <circle cx="50" cy="50" r="5" fill="#fff" />

//                 <g className="avatars">
//                   <circle cx="20" cy="30" r="6" fill="#fb923c" className="float-anim" />
//                   <circle cx="80" cy="30" r="5" fill="#f97316" className="float-anim" style={{ animationDelay: "0.5s" }} />
//                   <circle cx="30" cy="80" r="7" fill="#ea580c" className="float-anim" style={{ animationDelay: "1s" }} />
//                   <circle cx="70" cy="80" r="6" fill="#fb923c" className="float-anim" style={{ animationDelay: "1.5s" }} />

//                   {/* Little heads/shoulders shapes */}
//                   <path d="M16,34 Q20,30 24,34" stroke="#fff" strokeWidth="1" fill="none" />
//                   <path d="M76,34 Q80,30 84,34" stroke="#fff" strokeWidth="1" fill="none" />
//                   <path d="M26,84 Q30,80 34,84" stroke="#fff" strokeWidth="1" fill="none" />
//                   <path d="M66,84 Q70,80 74,84" stroke="#fff" strokeWidth="1" fill="none" />
//                 </g>
//               </g>
//             </svg>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const caseStudies = [
//     {
//       title: "Cloud Migration & Cost Optimization",
//       category: "Cloud",
//       desc: "Migrated 200+ legacy apps to AWS/Azure for a global bank. Reduced infrastructure costs by 40% and improved scalability for peak trading hours.",
//       link: "/case-study/digital-transformation",
//     },
//     {
//       title: "SAP S/4HANA Transformation",
//       category: "SAP",
//       desc: "End-to-end SAP S/4HANA implementation for a multinational manufacturer. Real-time supply chain visibility and 99.9% system availability.",
//       link: "/case-study/life-sciences-innovation",
//     },
//     {
//       title: "Oracle Hyperion EPM Modernization",
//       category: "Hyperion",
//       desc: "Consolidated financial close and planning for a Fortune 500 retail group. Cut close time from 12 days to 6 and enabled driver-based forecasting.",
//       link: "/case-study/financial-services-modernization",
//     },
//     {
//       title: "Intelligent Automation for Healthcare",
//       category: "Automation",
//       desc: "Deployed UiPath bots for a healthcare payer. Automated 70% of claims processing, reduced manual errors by 85%, and saved $2M annually.",
//       link: "/case-study/hedge-fund-platforms",
//     },
//     {
//       title: "AI-Powered Demand Forecasting",
//       category: "AI / ML",
//       desc: "Built a predictive analytics platform for a leading retail chain. Improved forecast accuracy by 25% and reduced stockouts by 60%.",
//       link: "/case-study/genai-enablement",
//     },
//     {
//       title: "Strategic Staffing – 50+ Experts in 4 Weeks",
//       category: "Talent",
//       desc: "Rapidly sourced and onboarded 50+ certified SAP and cloud professionals for a global SI. Zero bench time, full client satisfaction.",
//       link: "/case-study/smarter-business-solutions",
//     },
//   ];

//   return (
//     <section
//       id="case-studies"
//       className="case-section"
//       ref={sectionRef}
//       style={{ "--mouse-x": `${mousePos.x}%`, "--mouse-y": `${mousePos.y}%` }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         /* ========== GLOBAL SECTION STYLES ========== */
//         .case-section {
//           padding: 120px 6%;
//           position: relative;
//           background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80"); /* Continuing the deep navy theme */
//           color: #ffffff;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           overflow: hidden;
//         }

//         /* Dynamic Cursor Glow */
//         .case-section::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.08) 0%, transparent 40%);
//           z-index: 1;
//           pointer-events: none;
//         }

//         /* Subtle Background Grid */
//         .case-section::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
//           background-size: 50px 50px;
//           pointer-events: none;
//           z-index: 0;
//           opacity: 0.5;
//         }

//         /* ========== TITLE STYLES ========== */
//         .case-header {
//           position: relative;
//           z-index: 5;
//           text-align: center;
//           margin-bottom: 80px;
//         }

//         .case-tag {
//           color: #818cf8;
//           font-size: 14px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           margin-bottom: 20px;
//           display: inline-block;
//           background: rgba(129, 140, 248, 0.1);
//           padding: 6px 16px;
//           border-radius: 20px;
//           border: 1px solid rgba(129, 140, 248, 0.2);
//         }

//         .case-title {
//           font-size: clamp(36px, 5vw, 56px);
//           font-weight: 800;
//           line-height: 1.15;
//           margin-bottom: 20px;
//         }

//         .case-title span {
//           background: linear-gradient(90deg, #818cf8, #c084fc, #6366f1);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: titleFlow 6s linear infinite;
//         }

//         @keyframes titleFlow {
//           to { background-position: 200% center; }
//         }

//         .case-subtitle {
//           font-size: 18px;
//           color: #94a3b8;
//           max-width: 700px;
//           margin: 0 auto;
//           line-height: 1.7;
//         }

//         /* Reveal Animation */
//         .reveal {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
//         }
//         .reveal.active {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* ========== CARD GRID ========== */
//         .case-grid {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
//           gap: 40px;
//           position: relative;
//           z-index: 5;
//         }

//         /* ========== CARD STYLES ========== */
//         .case-card {
//           background: rgba(255, 255, 255, 0.02);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(255, 255, 255, 0.06);
//           border-radius: 24px;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//         }

//         .case-card::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
//           opacity: 0;
//           transition: opacity 0.4s ease;
//           pointer-events: none;
//           z-index: 10;
//         }

//         .case-card:hover {
//           transform: translateY(-10px);
//           background: rgba(255, 255, 255, 0.04);
//           border-color: rgba(129, 140, 248, 0.3);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 
//                       0 0 20px rgba(99, 102, 241, 0.1) inset;
//         }

//         .case-card:hover::before {
//           opacity: 1;
//         }

//         /* ========== IMAGE/ILLUSION CONTAINER ========== */
//         .case-img-container {
//           height: 220px;
//           position: relative;
//           background: linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(4, 8, 43, 0.8) 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .illusion-container {
//           width: 100%;
//           height: 100%;
//           position: absolute;
//           inset: 0;
//           opacity: 0.8;
//           transition: opacity 0.4s ease, transform 0.6s ease;
//         }

//         .case-card:hover .illusion-container {
//           opacity: 1;
//           transform: scale(1.05);
//         }

//         /* SVG Animation Classes */
//         .float-anim { animation: float 6s ease-in-out infinite alternate; }
//         .stream-anim { animation: stream 2s linear infinite; }
//         .pulse-slow { animation: pulse 3s infinite alternate; }
//         .pulse-fast { animation: pulse 1s infinite alternate; }
//         .spin-slow { animation: spin 20s linear infinite; }
//         .radar-spin { transform-origin: center; animation: spin 4s linear infinite; }
//         .orbit-dot1 { transform-origin: 50px 50px; animation: orbit 4s linear infinite; }
//         .orbit-dot2 { transform-origin: 50px 50px; animation: orbit 6s linear infinite reverse; }
//         .blink { animation: blink 2s steps(2, start) infinite; }
//         .path-pulse { stroke-dasharray: 100; animation: dash 3s linear infinite; }
//         .path-pulse-rev { stroke-dasharray: 100; animation: dash 4s linear infinite reverse; }
//         .ripple { animation: ripple 2s linear infinite; }
//         .draw-line { stroke-dasharray: 50; animation: drawLine 3s ease-out infinite alternate; }

//         @keyframes float { 0% { transform: translateY(-5px); } 100% { transform: translateY(5px); } }
//         @keyframes stream { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
//         @keyframes pulse { 0% { opacity: 0.4; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1.1); } }
//         @keyframes spin { 100% { transform: rotate(360deg); } }
//         @keyframes orbit { 100% { transform: rotate(360deg); } }
//         @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
//         @keyframes dash { to { stroke-dashoffset: 200; } }
//         @keyframes ripple { 0% { r: 10; opacity: 1; } 100% { r: 30; opacity: 0; } }
//         @keyframes drawLine { 0% { stroke-dashoffset: 50; } 100% { stroke-dashoffset: 0; } }


//         /* ========== CATEGORY BADGE ========== */
//         .case-category {
//           position: absolute;
//           top: 20px;
//           left: 20px;
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(8px);
//           color: #fff;
//           padding: 6px 14px;
//           font-size: 12px;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 8px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           z-index: 20;
//           transition: all 0.3s ease;
//         }

//         .case-card:hover .case-category {
//           background: rgba(99, 102, 241, 0.2);
//           border-color: rgba(99, 102, 241, 0.5);
//           color: #e0e7ff;
//         }

//         /* ========== CARD CONTENT ========== */
//         .case-content {
//           padding: 32px;
//           display: flex;
//           flex-direction: column;
//           flex-grow: 1;
//         }

//         .case-content h3 {
//           font-size: 22px;
//           font-weight: 700;
//           margin-bottom: 12px;
//           color: #fff;
//           line-height: 1.4;
//           transition: color 0.3s ease;
//         }

//         .case-card:hover .case-content h3 {
//           color: #818cf8;
//         }

//         .case-content p {
//           font-size: 15px;
//           line-height: 1.6;
//           color: #94a3b8;
//           margin-bottom: 24px;
//           flex-grow: 1;
//         }

//         .case-link {
//           font-size: 14px;
//           font-weight: 700;
//           color: #818cf8;
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: all 0.3s ease;
//           width: fit-content;
//         }

//         .case-link::after {
//           content: "→";
//           font-size: 16px;
//           transition: transform 0.3s ease;
//         }

//         .case-link:hover {
//           color: #a5b4fc;
//         }

//         .case-link:hover::after {
//           transform: translateX(5px);
//         }

//         /* ========== RESPONSIVE ========== */
//         @media (max-width: 1024px) {
//           .case-section { padding: 80px 5%; }
//           .case-header { margin-bottom: 50px; }
//           .case-grid { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
//         }
//         @media (max-width: 640px) {
//           .case-img-container { height: 180px; }
//         }
//       `}</style>

//       <div className={`case-header reveal ${isVisible ? 'active' : ''}`}>
//         <span className="case-tag">Success Stories</span>
//         <h2 className="case-title">
//           Real Transformations, <br />
//           <span>Proven Results</span>
//         </h2>
//         <p className="case-subtitle">
//           Discover how we deliver excellence across cloud, ERP, automation, AI, and talent solutions through our certified experts and intelligent delivery models.
//         </p>
//       </div>

//       <div className="case-grid">
//         {caseStudies.map((item, index) => (
//           <div className={`case-card reveal ${isVisible ? 'active' : ''}`} key={item.title} style={{ transitionDelay: `${index * 0.1}s` }}>
//             <div className="case-img-container">
//               {renderIllusion(item.category)}
//               <span className="case-category">{item.category}</span>
//             </div>
//             <div className="case-content">
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//               <a className="case-link" href={item.link}>
//                 Read case study
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";

export default function CaseStudiesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);

  const isMobile = windowWidth < 768;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    if (window.innerWidth >= 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ========== ENHANCED SVG ILLUSIONS ==========
  const renderIllusion = (category) => {
    const iconStyle = { width: isMobile ? "96px" : "120px", height: isMobile ? "96px" : "120px", zIndex: 2 };
    switch (category) {
      case "Cloud":
        return (
          <div className="illusion-container">
            <div className="icon-glow blue-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <defs>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <path className="float-anim" d="M30 60 Q30 45 45 45 Q55 30 70 40 Q85 40 85 55 Q95 60 85 75 L30 75 Q15 75 15 60 Z" fill="url(#cloudGrad)" />
              <circle cx="50" cy="55" r="3" fill="#fff" className="pulse-fast" />
            </svg>
          </div>
        );
      case "SAP":
        return (
          <div className="illusion-container">
            <div className="icon-glow purple-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="spin-slow" style={{ transformOrigin: '50% 50%' }}>
                <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#a78bfa" strokeWidth="2.5" transform="rotate(45 50 50)" />
                <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#818cf8" strokeWidth="2.5" transform="rotate(-45 50 50)" />
                <circle cx="50" cy="50" r="12" fill="#6366f1" />
                <circle cx="50" cy="50" r="6" fill="#fff" />
              </g>
            </svg>
          </div>
        );
      case "Hyperion":
        return (
          <div className="illusion-container">
            <div className="icon-glow amber-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="float-anim">
                <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" fill="none" stroke="#fbbf24" strokeWidth="3" />
                <path d="M50 20 L50 80 M20 35 L80 65 M80 35 L20 65" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
                <circle cx="50" cy="50" r="8" fill="#f59e0b" />
              </g>
            </svg>
          </div>
        );
      case "Automation":
        return (
          <div className="illusion-container">
            <div className="icon-glow green-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4" className="spin-slow" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#4ade80" strokeWidth="3" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
              <circle cx="50" cy="50" r="6" fill="#fff" className="pulse-fast" />
            </svg>
          </div>
        );
      case "AI / ML":
        return (
          <div className="illusion-container">
            <div className="icon-glow pink-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="pulse-slow">
                <circle cx="25" cy="50" r="6" fill="#f472b6" />
                <circle cx="75" cy="50" r="6" fill="#6366f1" />
                <circle cx="50" cy="25" r="6" fill="#a855f7" />
                <circle cx="50" cy="75" r="6" fill="#a855f7" />
                <path d="M25 50 L50 25 L75 50 L50 75 Z" fill="none" stroke="#fff" strokeWidth="2" />
                <circle cx="50" cy="50" r="12" fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth="1" />
              </g>
            </svg>
          </div>
        );
      case "Talent":
        return (
          <div className="illusion-container">
            <div className="icon-glow orange-glow" />
            <svg viewBox="0 0 100 100" style={iconStyle}>
              <g className="float-anim">
                <circle cx="50" cy="40" r="12" fill="#fb923c" />
                <path d="M30 80 Q50 60 70 80" fill="none" stroke="#fb923c" strokeWidth="5" strokeLinecap="round" />
                <circle cx="25" cy="60" r="5" fill="#f97316" />
                <circle cx="75" cy="60" r="5" fill="#f97316" />
              </g>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const caseStudies = [
    { title: "Cloud Migration & Cost Optimization", category: "Cloud", desc: "Migrated 200+ legacy apps to AWS/Azure for a global bank. Reduced infrastructure costs by 40%.", link: "/case-study/digital-transformation" },
    { title: "SAP S/4HANA Transformation", category: "SAP", desc: "End-to-end implementation for a multinational manufacturer. Real-time supply chain visibility.", link: "/case-study/life-sciences-innovation" },
    { title: "Oracle Hyperion Modernization", category: "Hyperion", desc: "Consolidated financial planning for a Fortune 500 retail group. Cut close time by 50%.", link: "/case-study/financial-services-modernization" },
    { title: "Intelligent Healthcare Automation", category: "Automation", desc: "Deployed UiPath bots for a healthcare payer. Automated 70% of claims processing.", link: "/case-study/hedge-fund-platforms" },
    { title: "AI-Powered Demand Forecasting", category: "AI / ML", desc: "Predictive analytics for a leading retail chain. Improved forecast accuracy by 25%.", link: "/case-study/genai-enablement" },
    { title: "Strategic Staffing Solutions", category: "Talent", desc: "Rapidly onboarded 50+ certified professionals for a global SI in 4 weeks.", link: "/case-study/smarter-business-solutions" },
  ];

  return (
    <section className="case-section" ref={sectionRef} style={{ "--mouse-x": `${mousePos.x}%`, "--mouse-y": `${mousePos.y}%` }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        .case-section {
          padding: 100px 6%;
          position: relative;
          background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          min-height: 100vh;
          overflow: hidden;
        }

        /* Overlay to darken background slightly for better readability */
        .case-section::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(4, 7, 20, 0.4);
          z-index: 0;
        }

        .case-header {
          position: relative;
          z-index: 5;
          text-align: center;
          margin-bottom: 80px;
        }

        .case-title {
          font-size: clamp(34px, 5vw, 52px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .case-title span {
          background: linear-gradient(90deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .case-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
        }

        .case-card:hover {
          transform: translateY(-12px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .case-img-container {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: rgba(0, 0, 0, 0.2);
        }

        .icon-glow {
          position: absolute;
          width: 80px;
          height: 80px;
          filter: blur(40px);
          opacity: 0.4;
          z-index: 1;
        }
        .blue-glow { background: #3b82f6; }
        .purple-glow { background: #a855f7; }
        .amber-glow { background: #f59e0b; }
        .green-glow { background: #22c55e; }
        .pink-glow { background: #ec4899; }
        .orange-glow { background: #f97316; }

        .case-category {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 10;
        }

        .case-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.2));
        }

        .case-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .case-content p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .case-link {
          margin-top: auto;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .case-link:hover {
          background: #fff;
          color: #000;
          transform: scale(1.05);
        }

        /* Animations */
        @keyframes float { 0% { transform: translateY(-8px); } 100% { transform: translateY(8px); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0% { opacity: 0.5; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }

        .float-anim { animation: float 3s ease-in-out infinite alternate; }
        .spin-slow { animation: spin 12s linear infinite; }
        .pulse-fast { animation: pulse 1.5s ease-in-out infinite alternate; }
        .pulse-slow { animation: pulse 3s ease-in-out infinite alternate; }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }

        @media (max-width: 1024px) {
          .case-section {
            padding: 80px 5%;
            background-attachment: scroll;
          }
          .case-header {
            margin-bottom: 56px;
          }
          .case-grid {
            gap: 22px;
          }
          .case-content {
            padding: 24px;
          }
          .case-content h3 {
            font-size: 20px;
          }
        }

        @media (max-width: 768px) {
          .case-section {
            padding: 64px 20px;
            min-height: auto;
          }
          .case-header {
            margin-bottom: 42px;
          }
          .case-title {
            font-size: clamp(28px, 7vw, 36px);
            line-height: 1.2;
          }
          .case-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .case-card {
            border-radius: 18px;
          }
          .case-card:hover {
            transform: none;
          }
          .case-img-container {
            height: 170px;
          }
          .case-category {
            top: 14px;
            left: 14px;
            font-size: 10px;
            padding: 4px 10px;
          }
          .case-content {
            padding: 18px;
          }
          .case-content h3 {
            font-size: 18px;
            margin-bottom: 10px;
          }
          .case-content p {
            font-size: 14px;
            margin-bottom: 18px;
          }
          .case-link {
            width: 100%;
            justify-content: center;
            padding: 10px 16px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .case-section {
            padding: 56px 14px;
          }
          .case-img-container {
            height: 155px;
          }
          .icon-glow {
            width: 64px;
            height: 64px;
            filter: blur(30px);
          }
        }
      `}</style>

      <div className={`case-header reveal ${isVisible ? 'active' : ''}`}>
        <h2 className="case-title">Real Transformations, <span>Proven Results</span></h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '10px' }}>
          Delivering excellence through certified expertise and strategic innovation.
        </p>
      </div>

      <div className="case-grid">
        {caseStudies.map((item, index) => (
          <div className={`case-card reveal ${isVisible ? 'active' : ''}`} key={item.title} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="case-img-container">
              <span className="case-category">{item.category}</span>
              {renderIllusion(item.category)}
            </div>
            <div className="case-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="case-link" href={item.link}>
                Read case study <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
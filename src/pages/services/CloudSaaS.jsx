import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ============================================
// ENHANCED SVG ILLUSTRATIONS & COMPONENTS
// ============================================

// Main Orbital Animation - Enhanced with more planets, trails and depth
const EnhancedOrbitalSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 600 600" style={{ overflow: "visible", maxWidth: "600px", margin: "0 auto" }}>
    <defs>
      <style>{`
        @keyframes orbit1 {
          0% { transform: rotate(0deg) translateX(170px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(170px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          0% { transform: rotate(120deg) translateX(130px) rotate(-120deg); }
          100% { transform: rotate(480deg) translateX(130px) rotate(-480deg); }
        }
        @keyframes orbit3 {
          0% { transform: rotate(240deg) translateX(90px) rotate(-240deg); }
          100% { transform: rotate(600deg) translateX(90px) rotate(-600deg); }
        }
        @keyframes orbit4 {
          0% { transform: rotate(-45deg) translateX(210px) rotate(45deg); }
          100% { transform: rotate(315deg) translateX(210px) rotate(-315deg); }
        }
        @keyframes orbit5 {
          0% { transform: rotate(60deg) translateX(60px) rotate(-60deg); }
          100% { transform: rotate(420deg) translateX(60px) rotate(-420deg); }
        }
        @keyframes orbit6 {
          0% { transform: rotate(180deg) translateX(190px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(190px) rotate(-540deg); }
        }
        @keyframes pulse {
          0%, 100% { r: 16px; opacity: 0.9; }
          50% { r: 26px; opacity: 0.4; }
        }
        @keyframes corePulse {
          0%, 100% { r: 28px; opacity: 0.6; }
          50% { r: 45px; opacity: 0.3; }
        }
        @keyframes glowWave {
          0% { stroke-width: 1; opacity: 0.2; }
          50% { stroke-width: 2.5; opacity: 0.5; }
          100% { stroke-width: 1; opacity: 0.2; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; r: 2px; }
          50% { opacity: 0.9; r: 4px; }
        }
        .planet1 { animation: orbit1 30s linear infinite; }
        .planet2 { animation: orbit2 22s linear infinite; }
        .planet3 { animation: orbit3 17s linear infinite; }
        .planet4 { animation: orbit4 38s linear infinite; }
        .planet5 { animation: orbit5 14s linear infinite; }
        .planet6 { animation: orbit6 45s linear infinite; }
        .center-pulse { animation: pulse 3.5s ease-in-out infinite; }
        .core-pulse { animation: corePulse 4s ease-in-out infinite; }
        .glow-wave { animation: glowWave 3s ease-in-out infinite; }
        .float-animation { animation: float 5s ease-in-out infinite; }
        .spin-slow { animation: spin 80s linear infinite; transform-origin: center; }
        .twinkle { animation: twinkle 2.5s ease-in-out infinite; }
      `}</style>
      
      {/* Enhanced Gradients with more colors */}
      <radialGradient id="coreGlow">
        <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
        <stop offset="40%" style={{ stopColor: "#667eea", stopOpacity: 0.9 }} />
        <stop offset="80%" style={{ stopColor: "#764ba2", stopOpacity: 0.4 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 0 }} />
      </radialGradient>
      
      <radialGradient id="planetGlowPurple">
        <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
        <stop offset="60%" style={{ stopColor: "#764ba2", stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 0 }} />
      </radialGradient>
      
      <radialGradient id="planetGlowPink">
        <stop offset="0%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
        <stop offset="60%" style={{ stopColor: "#f5576c", stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: "#667eea", stopOpacity: 0 }} />
      </radialGradient>
      
      <linearGradient id="planetGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#7c4dff", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
      </linearGradient>
      
      <linearGradient id="planetGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#9c27b0", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
      </linearGradient>
      
      <linearGradient id="planetGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#f06292", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
      </linearGradient>
      
      <linearGradient id="planetGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ff9a9e", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#fad0c4", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
      </linearGradient>

      <linearGradient id="planetGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#a18cd1", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#fbc2eb", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#a6c1ee", stopOpacity: 1 }} />
      </linearGradient>

      <linearGradient id="planetGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ff9a9e", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#fecfef", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#fe99b4", stopOpacity: 1 }} />
      </linearGradient>

      {/* Advanced Filters */}
      <filter id="softGlow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <filter id="mediumGlow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <filter id="strongGlow">
        <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Background geometric shapes - more dynamic */}
    <g opacity="0.12" className="spin-slow">
      <circle cx="300" cy="300" r="250" fill="none" stroke="url(#planetGlowPurple)" strokeWidth="1" strokeDasharray="8 8" />
      <circle cx="300" cy="300" r="200" fill="none" stroke="url(#planetGlowPink)" strokeWidth="1.2" strokeDasharray="6 6" />
      <circle cx="300" cy="300" r="150" fill="none" stroke="#667eea" strokeWidth="0.8" strokeDasharray="4 4" />
    </g>
    
    {/* Enhanced core glow layers */}
    <circle cx="300" cy="300" r="60" fill="url(#coreGlow)" className="core-pulse" />
    <circle cx="300" cy="300" r="35" fill="url(#coreGlow)" filter="url(#strongGlow)" opacity="0.7" />
    
    {/* Multiple orbital rings with animated glow */}
    <circle cx="300" cy="300" r="210" fill="none" stroke="url(#planetGlowPurple)" strokeWidth="2.5" opacity="0.35" className="glow-wave" />
    <circle cx="300" cy="300" r="210" fill="none" stroke="#667eea" strokeWidth="0.5" opacity="0.2" />
    
    <circle cx="300" cy="300" r="150" fill="none" stroke="url(#planetGlowPink)" strokeWidth="2" opacity="0.3" className="glow-wave" style={{animationDelay: "0.5s"}} />
    <circle cx="300" cy="300" r="150" fill="none" stroke="#764ba2" strokeWidth="0.5" opacity="0.15" />
    
    <circle cx="300" cy="300" r="100" fill="none" stroke="url(#planetGlowPurple)" strokeWidth="1.8" opacity="0.25" className="glow-wave" style={{animationDelay: "1s"}} />
    <circle cx="300" cy="300" r="100" fill="none" stroke="#f093fb" strokeWidth="0.5" opacity="0.1" />
    
    <circle cx="300" cy="300" r="70" fill="none" stroke="url(#planetGlowPink)" strokeWidth="1.5" opacity="0.2" className="glow-wave" style={{animationDelay: "1.5s"}} />
    
    {/* Radiating energy lines */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle}, 300, 300)`}>
        <line x1="300" y1="300" x2="300" y2="240" stroke="url(#planetGrad1)" strokeWidth="1.2" opacity="0.2" style={{animation: `glowWave 3s ease-in-out infinite ${i * 0.2}s`}} />
        <circle cx="300" cy="230" r="3" fill="#fff" filter="url(#softGlow)" opacity="0.4" className="twinkle" />
      </g>
    ))}
    
    {/* Center core with multi-layer glow */}
    <circle cx="300" cy="300" r="32" fill="url(#planetGrad1)" filter="url(#strongGlow)" opacity="0.9" />
    <circle cx="300" cy="300" r="24" fill="url(#planetGrad2)" filter="url(#mediumGlow)" opacity="0.8" />
    <circle cx="300" cy="300" r="16" fill="#fff" className="center-pulse" filter="url(#softGlow)" />
    
    {/* Orbital planets - Enhanced with 6 planets */}
    {/* Planet 1 - Large outer */}
    <g className="planet1">
      <circle cx="470" cy="300" r="24" fill="url(#planetGlowPurple)" opacity="0.3" />
      <circle cx="470" cy="300" r="20" fill="url(#planetGrad1)" filter="url(#mediumGlow)" />
      <circle cx="465" cy="295" r="6" fill="#fff" opacity="0.8" filter="url(#softGlow)" />
      <circle cx="475" cy="305" r="4" fill="#fff" opacity="0.6" />
    </g>
    
    {/* Planet 2 - Medium */}
    <g className="planet2">
      <circle cx="390" cy="300" r="20" fill="url(#planetGlowPink)" opacity="0.25" />
      <circle cx="390" cy="300" r="17" fill="url(#planetGrad2)" filter="url(#softGlow)" />
      <circle cx="385" cy="295" r="5" fill="#fff" opacity="0.7" />
      <circle cx="395" cy="305" r="3" fill="#fff" opacity="0.5" />
    </g>
    
    {/* Planet 3 - Small inner */}
    <g className="planet3">
      <circle cx="340" cy="300" r="16" fill="url(#planetGlowPurple)" opacity="0.2" />
      <circle cx="340" cy="300" r="14" fill="url(#planetGrad3)" filter="url(#softGlow)" />
      <circle cx="336" cy="296" r="4" fill="#fff" opacity="0.7" />
    </g>

    {/* Planet 4 - Diagonal orbit */}
    <g className="planet4">
      <circle cx="460" cy="350" r="18" fill="url(#planetGlowPink)" opacity="0.25" />
      <circle cx="460" cy="350" r="16" fill="url(#planetGrad4)" filter="url(#softGlow)" />
      <circle cx="456" cy="346" r="5" fill="#fff" opacity="0.6" />
    </g>

    {/* Planet 5 - New inner orbit */}
    <g className="planet5">
      <circle cx="320" cy="300" r="12" fill="url(#planetGlowPurple)" opacity="0.2" />
      <circle cx="320" cy="300" r="10" fill="url(#planetGrad5)" filter="url(#softGlow)" />
      <circle cx="317" cy="297" r="3" fill="#fff" opacity="0.8" />
    </g>

    {/* Planet 6 - Far outer orbit */}
    <g className="planet6">
      <circle cx="490" cy="320" r="15" fill="url(#planetGlowPink)" opacity="0.2" />
      <circle cx="490" cy="320" r="13" fill="url(#planetGrad6)" filter="url(#softGlow)" />
      <circle cx="487" cy="317" r="4" fill="#fff" opacity="0.7" />
    </g>

    {/* Decorative floating stars - enhanced with more particles */}
    {[...Array(30)].map((_, i) => {
      const x = 100 + Math.random() * 400;
      const y = 100 + Math.random() * 400;
      const size = 2 + Math.random() * 4;
      const delay = Math.random() * 3;
      return (
        <circle 
          key={i}
          cx={x} 
          cy={y} 
          r={size} 
          fill={i % 3 === 0 ? "#667eea" : i % 3 === 1 ? "#f093fb" : "#764ba2"}
          opacity="0.6"
          className="twinkle"
          style={{animationDelay: `${delay}s`}}
        />
      );
    })}

    {/* Dynamic energy arcs - enhanced */}
    <path d="M 300 300 Q 360 250 400 290" fill="none" stroke="url(#planetGrad1)" strokeWidth="2.5" opacity="0.3" style={{animation: "glowWave 4s ease-in-out infinite"}} />
    <path d="M 300 300 Q 240 350 200 310" fill="none" stroke="url(#planetGrad2)" strokeWidth="2.5" opacity="0.3" style={{animation: "glowWave 4s ease-in-out infinite 0.7s"}} />
    <path d="M 300 300 Q 270 270 240 280" fill="none" stroke="url(#planetGrad3)" strokeWidth="2" opacity="0.25" style={{animation: "glowWave 3.5s ease-in-out infinite 1.2s"}} />
    <path d="M 300 300 Q 330 330 360 320" fill="none" stroke="url(#planetGrad4)" strokeWidth="2" opacity="0.25" style={{animation: "glowWave 3.5s ease-in-out infinite 0.3s"}} />
  </svg>
);

// ============================================
// ENHANCED ILLUSTRATION 2 - CLOUD/NETWORK ILLUSTRATION (VEEVA SECTION)
// ============================================
const EnhancedCloudNetworkSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 240" style={{ overflow: "visible", filter: "drop-shadow(0 20px 30px rgba(102,126,234,0.35))", maxWidth: "300px", margin: "0 auto" }}>
    <defs>
      <linearGradient id="cloudNetGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
        <stop offset="70%" style={{ stopColor: "#9c27b0", stopOpacity: 0.9 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 0.8 }} />
      </linearGradient>
      <linearGradient id="cloudNetGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 0.9 }} />
      </linearGradient>
      <filter id="cloudNetGlow">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <radialGradient id="nodeGlow">
        <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
        <stop offset="70%" style={{ stopColor: "#667eea", stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: "#764ba2", stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    
    {/* Main cloud structure - larger and more prominent */}
    <path d="M 40 130 Q 15 130 15 100 Q 15 70 45 70 Q 60 40 95 40 Q 130 40 145 70 Q 180 70 180 100 Q 180 130 150 130 Z" 
          fill="url(#cloudNetGrad1)" opacity="0.95" filter="url(#cloudNetGlow)" />
    <path d="M 160 160 Q 130 160 130 130 Q 130 100 165 100 Q 185 70 220 70 Q 255 70 270 100 Q 300 100 300 130 Q 300 160 270 160 Z" 
          fill="url(#cloudNetGrad2)" opacity="0.85" filter="url(#cloudNetGlow)" />
    
    {/* Network connection lines - animated */}
    <g stroke="url(#cloudNetGrad1)" strokeWidth="2" opacity="0.5" strokeDasharray="6 4">
      <line x1="80" y1="100" x2="140" y2="120">
        <animate attributeName="stroke-dashoffset" values="0;20;0" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="140" y1="120" x2="200" y2="90">
        <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2.8s" repeatCount="indefinite" />
      </line>
      <line x1="200" y1="90" x2="250" y2="110">
        <animate attributeName="stroke-dashoffset" values="0;20;0" dur="3.2s" repeatCount="indefinite" />
      </line>
      <line x1="120" y1="140" x2="180" y2="150">
        <animate attributeName="stroke-dashoffset" values="0;20;0" dur="3.5s" repeatCount="indefinite" />
      </line>
    </g>
    
    {/* Network nodes - glowing circles */}
    <circle cx="80" cy="100" r="8" fill="url(#nodeGlow)" filter="url(#cloudNetGlow)">
      <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="140" cy="120" r="10" fill="url(#nodeGlow)" filter="url(#cloudNetGlow)">
      <animate attributeName="r" values="10;14;10" dur="2.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="90" r="7" fill="url(#nodeGlow)" filter="url(#cloudNetGlow)">
      <animate attributeName="r" values="7;11;7" dur="1.9s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="110" r="9" fill="url(#nodeGlow)" filter="url(#cloudNetGlow)">
      <animate attributeName="r" values="9;13;9" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="180" cy="150" r="6" fill="url(#nodeGlow)" filter="url(#cloudNetGlow)">
      <animate attributeName="r" values="6;10;6" dur="2.1s" repeatCount="indefinite" />
    </circle>
    
    {/* Floating data particles */}
    <circle cx="110" cy="80" r="3" fill="#fff" opacity="0.8" className="float-animation" style={{animationDuration: "3s"}} />
    <circle cx="220" cy="130" r="4" fill="#f093fb" opacity="0.7" className="float-animation" style={{animationDuration: "3.7s"}} />
    <circle cx="50" cy="150" r="3" fill="#667eea" opacity="0.6" className="float-animation" style={{animationDuration: "4.2s"}} />
  </svg>
);

// ============================================
// ENHANCED ILLUSTRATION 4 - PLATFORM/INTEGRATION ILLUSTRATION (PLATFORM SECTION)
// ============================================
const EnhancedPlatformIntegrationSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 240" style={{ overflow: "visible", filter: "drop-shadow(0 20px 30px rgba(102,126,234,0.35))", maxWidth: "300px", margin: "0 auto" }}>
    <defs>
      <linearGradient id="platformGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="platformGradSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#f5576c", stopOpacity: 0.9 }} />
        <stop offset="100%" style={{ stopColor: "#667eea", stopOpacity: 0.8 }} />
      </linearGradient>
      <filter id="platformGlow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <pattern id="gridPattern2" patternUnits="userSpaceOnUse" width="20" height="20">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#667eea" strokeWidth="0.8" opacity="0.3" />
      </pattern>
    </defs>
    
    {/* Main platform base */}
    <rect x="30" y="80" width="240" height="120" rx="16" fill="url(#platformGradMain)" opacity="0.15" stroke="url(#platformGradMain)" strokeWidth="3" />
    
    {/* Platform layers */}
    <rect x="45" y="70" width="210" height="30" rx="8" fill="url(#platformGradMain)" opacity="0.3" filter="url(#platformGlow)" />
    <rect x="45" y="110" width="210" height="60" fill="url(#gridPattern2)" />
    
    {/* Integration nodes and connections */}
    <g>
      {/* Left node cluster */}
      <circle cx="70" cy="140" r="18" fill="url(#platformGradMain)" opacity="0.9" filter="url(#platformGlow)">
        <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="140" r="12" fill="#fff" opacity="0.8" />
      <text x="70" y="145" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">API</text>
      
      {/* Center node */}
      <circle cx="150" cy="140" r="24" fill="url(#platformGradSecondary)" opacity="0.9" filter="url(#platformGlow)">
        <animate attributeName="r" values="24;28;24" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="140" r="16" fill="#fff" opacity="0.8" />
      <text x="150" y="145" fontSize="14" fill="#667eea" textAnchor="middle" fontWeight="bold">HUB</text>
      
      {/* Right node cluster */}
      <circle cx="230" cy="140" r="18" fill="url(#platformGradMain)" opacity="0.9" filter="url(#platformGlow)">
        <animate attributeName="r" values="18;22;18" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="230" cy="140" r="12" fill="#fff" opacity="0.8" />
      <text x="230" y="145" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">DB</text>
      
      {/* Animated connection lines */}
      <line x1="88" y1="140" x2="126" y2="140" stroke="url(#platformGradMain)" strokeWidth="3" opacity="0.7" strokeDasharray="8 6">
        <animate attributeName="stroke-dashoffset" values="0;30;0" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="174" y1="140" x2="212" y2="140" stroke="url(#platformGradSecondary)" strokeWidth="3" opacity="0.7" strokeDasharray="8 6">
        <animate attributeName="stroke-dashoffset" values="0;30;0" dur="2.2s" repeatCount="indefinite" />
      </line>
      
      {/* Additional connection arcs */}
      <path d="M 70 120 Q 110 100 150 120" fill="none" stroke="url(#platformGradMain)" strokeWidth="2" opacity="0.5" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M 150 120 Q 190 100 230 120" fill="none" stroke="url(#platformGradSecondary)" strokeWidth="2" opacity="0.5" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2.7s" repeatCount="indefinite" />
      </path>
    </g>
    
    {/* Floating data elements */}
    <circle cx="110" cy="50" r="5" fill="#667eea" opacity="0.7" className="float-animation" style={{animationDuration: "4s"}} />
    <circle cx="190" cy="40" r="4" fill="#f093fb" opacity="0.7" className="float-animation" style={{animationDuration: "4.5s"}} />
    <circle cx="250" cy="60" r="6" fill="#764ba2" opacity="0.6" className="float-animation" style={{animationDuration: "5s"}} />
  </svg>
);

// ============================================
// ENHANCED ILLUSTRATION - DATA ANALYTICS (KEPT FROM BEFORE)
// ============================================
const EnhancedDataSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 280 220" style={{ overflow: "visible", filter: "drop-shadow(0 15px 25px rgba(102,126,234,0.25))", maxWidth: "280px", margin: "0 auto" }}>
    <defs>
      <linearGradient id="barGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9c27b0", stopOpacity: 0.9 }} />
      </linearGradient>
      <linearGradient id="barGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f093fb", stopOpacity: 0.9 }} />
      </linearGradient>
      <filter id="barGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect x="20" y="80" width="35" height="100" fill="url(#barGrad1)" rx="6" opacity="0.9" filter="url(#barGlow)">
      <animate attributeName="height" values="100;120;100" dur="3s" repeatCount="indefinite" />
      <animate attributeName="y" values="80;60;80" dur="3s" repeatCount="indefinite" />
    </rect>
    <rect x="65" y="50" width="35" height="130" fill="url(#barGrad2)" rx="6" opacity="0.9" filter="url(#barGlow)">
      <animate attributeName="height" values="130;150;130" dur="3.2s" repeatCount="indefinite" />
      <animate attributeName="y" values="50;30;50" dur="3.2s" repeatCount="indefinite" />
    </rect>
    <rect x="110" y="60" width="35" height="120" fill="url(#barGrad1)" rx="6" opacity="0.9" filter="url(#barGlow)">
      <animate attributeName="height" values="120;140;120" dur="2.8s" repeatCount="indefinite" />
      <animate attributeName="y" values="60;40;60" dur="2.8s" repeatCount="indefinite" />
    </rect>
    <rect x="155" y="70" width="35" height="110" fill="url(#barGrad2)" rx="6" opacity="0.9" filter="url(#barGlow)">
      <animate attributeName="height" values="110;130;110" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="y" values="70;50;70" dur="3.5s" repeatCount="indefinite" />
    </rect>
    <rect x="200" y="40" width="35" height="140" fill="url(#barGrad1)" rx="6" opacity="0.9" filter="url(#barGlow)">
      <animate attributeName="height" values="140;160;140" dur="3s" repeatCount="indefinite" />
      <animate attributeName="y" values="40;20;40" dur="3s" repeatCount="indefinite" />
    </rect>
    
    {/* Connecting line */}
    <line x1="37" y1="75" x2="217" y2="35" stroke="url(#barGrad2)" strokeWidth="2" opacity="0.3" strokeDasharray="5 3" />
    
    {/* Data points */}
    <circle cx="37" cy="75" r="4" fill="#667eea" filter="url(#barGlow)">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="217" cy="35" r="4" fill="#f093fb" filter="url(#barGlow)">
      <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// ============================================
// ENHANCED ILLUSTRATION - INTEGRATION (KEPT FROM BEFORE)
// ============================================
const EnhancedIntegrationSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 280 220" style={{ overflow: "visible", filter: "drop-shadow(0 15px 25px rgba(102,126,234,0.25))", maxWidth: "280px", margin: "0 auto" }}>
    <defs>
      <linearGradient id="connectGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="pulseGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect x="20" y="70" width="60" height="60" fill="url(#connectGrad1)" rx="12" opacity="0.9" filter="url(#pulseGlow)">
      <animate attributeName="y" values="70;65;70" dur="3s" repeatCount="indefinite" />
    </rect>
    <rect x="100" y="70" width="60" height="60" fill="url(#connectGrad1)" rx="12" opacity="0.9" filter="url(#pulseGlow)" style={{animationDelay: "0.3s"}}>
      <animate attributeName="y" values="70;65;70" dur="3.2s" repeatCount="indefinite" />
    </rect>
    <rect x="180" y="70" width="60" height="60" fill="url(#connectGrad1)" rx="12" opacity="0.9" filter="url(#pulseGlow)" style={{animationDelay: "0.6s"}}>
      <animate attributeName="y" values="70;65;70" dur="2.8s" repeatCount="indefinite" />
    </rect>
    
    {/* Animated connection lines */}
    <line x1="80" y1="100" x2="100" y2="100" stroke="#667eea" strokeWidth="3" strokeDasharray="5 5">
      <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2s" repeatCount="indefinite" />
    </line>
    <line x1="160" y1="100" x2="180" y2="100" stroke="#764ba2" strokeWidth="3" strokeDasharray="5 5">
      <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2.2s" repeatCount="indefinite" />
    </line>
    
    <polygon points="85,95 90,100 85,105" fill="#667eea" filter="url(#pulseGlow)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
    </polygon>
    <polygon points="165,95 170,100 165,105" fill="#764ba2" filter="url(#pulseGlow)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite" />
    </polygon>
    
    {/* Decorative circles */}
    <circle cx="50" cy="130" r="20" fill="none" stroke="url(#connectGrad1)" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="210" cy="130" r="25" fill="none" stroke="url(#connectGrad1)" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function EnhancedCloudSaaS() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredListItem, setHoveredListItem] = useState(null);
  const [hoveredIconCard, setHoveredIconCard] = useState(null);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState(null);

  const styles = {
    globalStyles: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .fade-in-up {
        animation: fadeInUp 1s ease-out;
      }
      .slide-in-left {
        animation: slideInLeft 1s ease-out;
      }
      .slide-in-right {
        animation: slideInRight 1s ease-out;
      }
      .scale-in {
        animation: scaleIn 0.8s ease-out;
      }
      .float {
        animation: float 6s ease-in-out infinite;
      }
      .gradient-bg {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        background-size: 200% 200%;
        animation: gradientShift 8s ease infinite;
      }
      
      /* Mobile Responsive Styles */
      @media (max-width: 1200px) {
        section {
          padding: 80px 6% !important;
        }
        h1 {
          font-size: 52px !important;
        }
      }
      
      @media (max-width: 992px) {
        section {
          padding: 70px 5% !important;
        }
        h1 {
          font-size: 48px !important;
        }
        h2 {
          font-size: 40px !important;
        }
        h3 {
          font-size: 24px !important;
        }
      }
      
      @media (max-width: 768px) {
        section {
          padding: 60px 4% !important;
        }
        h1 {
          font-size: 40px !important;
          line-height: 1.3 !important;
        }
        h2 {
          font-size: 32px !important;
        }
        h3 {
          font-size: 22px !important;
        }
        p {
          font-size: 16px !important;
        }
        .hero-section {
          grid-template-columns: 1fr !important;
          text-align: center;
          gap: 40px;
          padding-top: 108px !important;
          padding-bottom: 64px !important;
        }
        .hero-content {
          padding-right: 0 !important;
          max-width: 100% !important;
        }
        .hero-content p {
          margin-left: auto;
          margin-right: auto;
        }
        .content-row {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
        }
        .content-row > div:last-child {
          grid-row: 1;
        }
        .logo-grid {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
          gap: 30px !important;
        }
        .card-grid {
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
          gap: 15px !important;
        }
        .icon-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        .cta-buttons {
          flex-direction: column;
          align-items: center;
          gap: 15px !important;
        }
        .cta-buttons button {
          width: 100%;
          max-width: 320px;
        }
        .svg-container {
          min-height: 200px !important;
        }
      }
      
      @media (max-width: 480px) {
        section {
          padding: 50px 4% !important;
        }
        .hero-section {
          padding-top: 102px !important;
          padding-bottom: 56px !important;
        }
        h1 {
          font-size: 32px !important;
        }
        h2 {
          font-size: 28px !important;
        }
        .logo-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        .card-grid {
          grid-template-columns: 1fr !important;
        }
        .list-item {
          padding: 15px 20px !important;
          font-size: 15px !important;
        }
      }
    `,
    hero: {
      minHeight: "100vh",
      height: "auto",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      alignItems: "center",
      padding: "0 8%",
      color: "#fff",
      background: "linear-gradient(145deg, #0b0c1e 0%, #1a1b3a 50%, #2d1f3a 100%)",
      position: "relative",
      overflow: "hidden"
    },
    heroContent: {
      maxWidth: "700px",
      zIndex: 2,
      animation: "slideInLeft 1.2s ease-out",
      paddingRight: "40px"
    },
    heroTag: {
      fontSize: "18px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      opacity: 0.95,
      fontWeight: 700,
      color: "#f093fb",
      marginBottom: "24px",
      textShadow: "0 2px 10px rgba(240,147,251,0.3)"
    },
    heroTitle: {
      fontSize: "64px",
      fontWeight: 800,
      lineHeight: 1.2,
      marginBottom: "28px",
      background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #f093fb 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 5px 20px rgba(102,126,234,0.3)"
    },
    heroSubtitle: {
      fontSize: "20px",
      opacity: 0.95,
      lineHeight: 1.7,
      maxWidth: "600px",
      color: "#cbd5e0"
    },
    section: {
      padding: "120px 10%",
      background: "#fff"
    },
    sectionAlt: {
      padding: "120px 10%",
      background: "linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)"
    },
    heading: {
      fontSize: "48px",
      color: "#1a1b3a",
      fontWeight: 800,
      marginBottom: "20px",
      animation: "fadeInUp 0.8s ease-out"
    },
    headingWhite: {
      fontSize: "48px",
      color: "#fff",
      fontWeight: 800,
      marginBottom: "20px",
      animation: "fadeInUp 0.8s ease-out",
      textShadow: "0 2px 10px rgba(0,0,0,0.2)"
    },
    subHeading: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "28px",
      color: "#4a5568"
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: 2,
      color: "#4a5568",
      maxWidth: "900px",
      marginBottom: "28px",
      animation: "fadeInUp 1s ease-out"
    },
    paragraphWhite: {
      fontSize: "18px",
      lineHeight: 2,
      color: "#fff",
      maxWidth: "900px",
      marginBottom: "28px",
      animation: "fadeInUp 1s ease-out"
    },
    contentRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
      animation: "fadeInUp 1s ease-out"
    },
    logoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "60px",
      alignItems: "center",
      justifyItems: "center",
      marginTop: "60px",
      animation: "fadeInUp 1.2s ease-out"
    },
    logo: {
      maxWidth: "180px",
      width: "100%",
      opacity: 0.85,
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      cursor: "pointer",
      filter: "drop-shadow(0 5px 15px rgba(102,126,234,0.1))"
    },
    logoHover: {
      opacity: 1,
      transform: "scale(1.15)",
      filter: "drop-shadow(0 15px 30px rgba(102,126,234,0.25))"
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "25px",
      marginTop: "50px"
    },
    card: {
      background: "#fff",
      color: "#667eea",
      padding: "35px 25px",
      borderRadius: "16px",
      textAlign: "center",
      fontWeight: 600,
      fontSize: "17px",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      cursor: "pointer",
      border: "2px solid transparent",
      animation: "scaleIn 0.6s ease-out",
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
    },
    cardHover: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      transform: "translateY(-12px) scale(1.05)",
      boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)"
    },
    listItem: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      padding: "20px 28px",
      borderRadius: "10px",
      marginBottom: "16px",
      fontSize: "17px",
      transition: "all 0.3s ease",
      borderLeft: "5px solid #f093fb",
      animation: "slideInLeft 0.6s ease-out",
      boxShadow: "0 8px 15px rgba(102,126,234,0.15)"
    },
    listItemHover: {
      transform: "translateX(15px)",
      boxShadow: "0 12px 30px rgba(102, 126, 234, 0.3)"
    },
    iconGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
      marginTop: "40px"
    },
    iconCard: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      padding: "45px 30px",
      textAlign: "center",
      fontWeight: 700,
      fontSize: "20px",
      borderRadius: "16px",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      animation: "scaleIn 0.7s ease-out",
      boxShadow: "0 15px 30px rgba(102,126,234,0.2)"
    },
    iconCardHover: {
      transform: "translateY(-15px) scale(1.05)",
      boxShadow: "0 30px 50px rgba(102, 126, 234, 0.4)"
    },
    ctaSection: {
      background: "linear-gradient(145deg, #0b0c1e 0%, #1a1b3a 50%, #2d1f3a 100%)",
      padding: "120px 10%",
      color: "#fff",
      textAlign: "center",
      animation: "fadeInUp 1s ease-out",
      position: "relative",
      overflow: "hidden"
    },
    ctaTitle: {
      fontSize: "56px",
      fontWeight: 800,
      marginBottom: "50px",
      background: "linear-gradient(135deg, #fff 0%, #e0e7ff 50%, #f093fb 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 5px 30px rgba(240,147,251,0.3)"
    },
    ctaButtons: {
      display: "flex",
      gap: "25px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "40px"
    },
    button: {
      background: "#fff",
      color: "#667eea",
      border: "none",
      padding: "18px 38px",
      fontSize: "18px",
      fontWeight: 700,
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      letterSpacing: "0.5px"
    },
    buttonHover: {
      transform: "translateY(-6px)",
      boxShadow: "0 25px 45px rgba(0,0,0,0.3)"
    },
    svgContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      animation: "float 6s ease-in-out infinite",
      width: "100%",
      height: "100%",
      minHeight: "240px"
    }
  };

  return (
    <>
      <style>{styles.globalStyles}</style>

      {/* HERO SECTION */}
      <section style={styles.hero} className="hero-section">
        <div style={styles.heroContent} className="hero-content">
          <div style={styles.heroTag}>✨ ENTERPRISE CLOUD SaaS TRANSFORMATION</div>
          <h1 style={styles.heroTitle}>
            Transform SaaS platforms into<br />
            business value engines
          </h1>
          <p style={styles.heroSubtitle}>
            We help enterprises adopt, integrate, and optimize SaaS ecosystems—aligning applications, data, and workflows to accelerate innovation, improve operational intelligence, and deliver measurable outcomes.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", animation: "fadeInUp 1.2s ease-out" }} className="svg-container">
          <EnhancedOrbitalSVG />
        </div>
      </section>

      {/* INTRO SECTION - with fixed external logo URLs */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          🚀 Enterprise Cloud SaaS. Ready for Tomorrow.
        </h2>
        <p style={styles.subHeading}>
          Experience unparalleled performance, scalability, and innovation.
        </p>

        <p style={styles.paragraph}>
          We enable enterprises to move beyond isolated SaaS deployments to a unified, business‑aligned digital platform—where applications, data, and processes operate as a single value chain.
        </p>
        <p style={styles.paragraph}>
          Our platform‑led approach ensures continuous adoption, real‑time insights, and measurable business impact across finance, life sciences, and global enterprises.
        </p>

        {/* LOGOS SECTION - Using reliable external URLs */}
        <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#667eea", marginBottom: "30px", textAlign: "center" }}>
          Strategic SaaS ecosystems we transform and optimize
        </h3>
        <div style={styles.logoGrid} className="logo-grid">
          <div
            style={{
              ...styles.logo,
              ...(hoveredLogoIndex === 0 ? styles.logoHover : {})
            }}
            onMouseEnter={() => setHoveredLogoIndex(0)}
            onMouseLeave={() => setHoveredLogoIndex(null)}
          >
            <img
              src="https://logo.clearbit.com/murex.com"
              alt="Murex"
              style={{ maxWidth: "180px", width: "100%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/180x80/667eea/white?text=MUREX";
              }}
            />
          </div>
          <div
            style={{
              ...styles.logo,
              ...(hoveredLogoIndex === 1 ? styles.logoHover : {})
            }}
            onMouseEnter={() => setHoveredLogoIndex(1)}
            onMouseLeave={() => setHoveredLogoIndex(null)}
          >
            <img
              src="https://logo.clearbit.com/veeva.com"
              alt="Veeva"
              style={{ maxWidth: "180px", width: "100%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/180x80/764ba2/white?text=VEEVA";
              }}
            />
          </div>
          <div
            style={{
              ...styles.logo,
              ...(hoveredLogoIndex === 2 ? styles.logoHover : {})
            }}
            onMouseEnter={() => setHoveredLogoIndex(2)}
            onMouseLeave={() => setHoveredLogoIndex(null)}
          >
            <img
              src="https://logo.clearbit.com/workday.com"
              alt="Workday"
              style={{ maxWidth: "180px", width: "100%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/180x80/f093fb/white?text=WORKDAY";
              }}
            />
          </div>
        </div>
      </section>

      {/* VEEVA SECTION - Using Enhanced Cloud Network Illustration */}
      <section style={{...styles.section, background: "linear-gradient(145deg, #667eea 0%, #764ba2 70%, #8e44ad 100%)", color: "#fff", padding: "120px 10%"}}>
        <div style={styles.contentRow} className="content-row">
          <div>
            <h2 style={styles.headingWhite}>💊 Veeva Commercial Cloud</h2>
            <p style={styles.paragraphWhite}>
              We help life sciences organizations transform Veeva from a system of record into a real‑time commercial intelligence platform—connecting customer engagement, data, and analytics to accelerate market adoption and improve field productivity.
            </p>

            <div style={styles.cardGrid} className="card-grid">
              {[
                "Veeva CRM Pro",
                "Vault Platform",
                "Engage Meeting",
                "Approved Email",
                "OpenData",
                "Network"
              ].map((item, idx) => (
                <div
                  key={item}
                  style={{
                    ...styles.card,
                    background: "#fff",
                    color: "#667eea",
                    ...(hoveredCard === `veeva-${idx}` ? styles.cardHover : {})
                  }}
                  onMouseEnter={() => setHoveredCard(`veeva-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.svgContainer} className="svg-container">
            <EnhancedCloudNetworkSVG />
          </div>
        </div>

        <div style={{marginTop: "80px", animation: "fadeInUp 1.2s ease-out"}}>
          <h3 style={{fontSize: "28px", fontWeight: 700, marginBottom: "30px", color: "#fff"}}>
            Business outcomes we enable
          </h3>

          {[
            "Commercial data unified across the engagement lifecycle",
            "AI‑driven next‑best‑action for field teams",
            "Compliant, scalable global operating model",
            "Faster product launch and market penetration",
            "Continuous adoption and value realization"
          ].map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.listItem,
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                ...(hoveredListItem === `veeva-list-${index}` ? {transform: "translateX(15px)", background: "rgba(255,255,255,0.25)", boxShadow: "0 15px 35px rgba(0,0,0,0.25)"} : {})
              }}
              className="list-item"
              onMouseEnter={() => setHoveredListItem(`veeva-list-${index}`)}
              onMouseLeave={() => setHoveredListItem(null)}
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* WORKDAY SECTION */}
      <section style={{...styles.section, background: "#f8faff"}}>
        <div style={styles.contentRow} className="content-row">
          <div>
            <h2 style={styles.heading}>📊 Workday Enterprise Suite</h2>
            <p style={styles.paragraph}>
              We transform Workday into a continuous enterprise decision platform—connecting finance, workforce, and planning data to enable real‑time insights, intelligent automation, and agile business operations.
            </p>

            <div style={styles.iconGrid} className="icon-grid">
              {[
                "Adaptive Planning",
                "Financial Management",
                "Human Capital",
                "Analytics & AI"
              ].map((item, idx) => (
                <div
                  key={item}
                  style={{
                    ...styles.iconCard,
                    ...(hoveredIconCard === `workday-${idx}` ? styles.iconCardHover : {})
                  }}
                  onMouseEnter={() => setHoveredIconCard(`workday-${idx}`)}
                  onMouseLeave={() => setHoveredIconCard(null)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.svgContainer} className="svg-container">
            <EnhancedIntegrationSVG />
          </div>
        </div>

        <div style={{marginTop: "80px", animation: "fadeInUp 1.2s ease-out"}}>
          <h3 style={{fontSize: "28px", fontWeight: 700, color: "#667eea", marginBottom: "30px"}}>
            Enterprise value realization
          </h3>

          {[
            "Real‑time finance and workforce intelligence",
            "AI‑enabled planning and forecasting",
            "Global operating model standardization",
            "Continuous process optimization",
            "Experience‑driven employee lifecycle"
          ].map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.listItem,
                ...(hoveredListItem === `workday-list-${index}` ? styles.listItemHover : {})
              }}
              className="list-item"
              onMouseEnter={() => setHoveredListItem(`workday-list-${index}`)}
              onMouseLeave={() => setHoveredListItem(null)}
            >
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES - Using Enhanced Platform Integration Illustration */}
      <section style={{...styles.section, background: "linear-gradient(135deg, #f0f4ff 0%, #e6edff 100%)"}}>
        <h2 style={{...styles.heading, textAlign: "center", marginBottom: "60px"}}>
          🎯 Enterprise Platform Capabilities
        </h2>
        
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center"}} className="content-row">
          <div style={styles.svgContainer} className="svg-container">
            <EnhancedPlatformIntegrationSVG />
          </div>

          <div>
            <h3 style={{fontSize: "28px", fontWeight: 700, color: "#667eea", marginBottom: "30px"}}>
              The Ultimate Cloud Advantage
            </h3>
            {[
              "Unified SaaS operating model aligned to value streams",
              "Data‑driven decision intelligence across platforms",
              "Embedded governance, risk, and compliance automation",
              "Experience‑centric digital workflows",
              "Continuous innovation through platform analytics"
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  ...styles.listItem,
                  ...(hoveredListItem === `feature-${index}` ? styles.listItemHover : {})
                }}
                className="list-item"
                onMouseEnter={() => setHoveredListItem(`feature-${index}`)}
                onMouseLeave={() => setHoveredListItem(null)}
              >
                ⚡ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>
          Transform your SaaS landscape into a continuous value platform
        </h2>
        <p style={{fontSize: "20px", marginBottom: "50px", lineHeight: 1.8, color: "#e0e7ff"}}>
          Partner with our enterprise SaaS transformation specialists to align applications, data, and business processes for measurable outcomes and sustained innovation.
        </p>

        <div style={styles.ctaButtons} className="cta-buttons">
          <button
            style={styles.button}
            onClick={() => navigate('/contact')}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-6px) scale(1.05)";
              e.target.style.boxShadow = "0 25px 45px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
            }}
          >
            Professional Services
          </button>
          <button
            style={styles.button}
            onClick={() => navigate('/contact')}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-6px) scale(1.05)";
              e.target.style.boxShadow = "0 25px 45px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
            }}
          >
            Managed Services
          </button>
          <button
            style={{...styles.button, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "#fff", fontWeight: 800}}
            onClick={() => navigate('/contact')}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-6px) scale(1.05)";
              e.target.style.boxShadow = "0 25px 45px rgba(245, 87, 108, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
            }}
          >
            🚀 Start Your Journey
          </button>
        </div>
      </section>
    </>
  );
}
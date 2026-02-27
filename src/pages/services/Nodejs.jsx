import React from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation

export default function Nodejs() {
  const navigate = useNavigate(); // Initialize the navigation hook

  // Navigation handler
  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div className="node-page" style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0d1117 0%, #161b22 50%, #1c2128 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes typing { from { width: 0; } to { width: 100%; } }
        @keyframes blink { 50% { border-color: transparent; } }
        @keyframes codeRain { 
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(68, 160, 63, 0.3); } 50% { box-shadow: 0 0 40px rgba(68, 160, 63, 0.6); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .code-rain { position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; pointer-events: none; }
        .code-line { position: absolute; font-family: 'Fira Code', 'Consolas', monospace; font-size: 14px; color: #68a063; opacity: 0.15; animation: codeRain 15s linear infinite; white-space: nowrap; }
        .typing-cursor { border-right: 3px solid #68a063; animation: blink 0.75s step-end infinite; }
        .feature-card { background: linear-gradient(135deg, rgba(68, 160, 63, 0.1) 0%, rgba(22, 27, 34, 0.9) 100%); backdrop-filter: blur(10px); border-radius: 12px; padding: 28px; border: 1px solid rgba(68, 160, 63, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; position: relative; overflow: hidden; }
        .feature-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(68, 160, 63, 0.1), transparent); transition: left 0.5s; }
        .feature-card:hover::before { left: 100%; }
        .feature-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); border-color: rgba(68, 160, 63, 0.6); background: linear-gradient(135deg, rgba(68, 160, 63, 0.2) 0%, rgba(22, 27, 34, 0.95) 100%); }
        .terminal-window { background: #0d1117; border-radius: 12px; border: 1px solid #30363d; overflow: hidden; }
        .terminal-header { background: #161b22; padding: 12px 16px; display: flex; gap: 8px; }
        .terminal-dot { width: 12px; height: 12px; border-radius: 50%; }
        .terminal-body { padding: 20px; font-family: 'Fira Code', 'Consolas', monospace; font-size: 14px; color: #c9d1d9; }
        .keyword { color: #ff7b72; }
        .string { color: #a5d6ff; }
        .function { color: #d2a8ff; }
        .comment { color: #8b949e; }
        .number { color: #79c0ff; }
        .variable { color: #7ee787; }
        .stat-card { background: linear-gradient(135deg, rgba(68, 160, 63, 0.15) 0%, rgba(22, 27, 34, 0.8) 100%); border: 1px solid rgba(68, 160, 63, 0.3); border-radius: 16px; padding: 30px; text-align: center; transition: all 0.3s ease; }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.3); border-color: rgba(68, 160, 63, 0.5); }
        .tech-tag { background: rgba(68, 160, 63, 0.15); padding: 10px 20px; border-radius: 8px; color: #7ee787; font-size: 14px; font-weight: 600; border: 1px solid rgba(68, 160, 63, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { background: rgba(68, 160, 63, 0.25); transform: scale(1.05); box-shadow: 0 5px 15px rgba(68, 160, 63, 0.3); }
        .cta-btn { background: linear-gradient(135deg, #3c873a 0%, #68a063 100%); color: #fff; padding: 16px 36px; border-radius: 12px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(68, 160, 63, 0.4); }
        .cta-btn-outline { background: transparent; color: #68a063; padding: 16px 36px; border-radius: 12px; font-size: 16px; font-weight: 700; border: 2px solid #68a063; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(104, 160, 99, 0.1); transform: translateY(-3px); }

        @media (max-width: 992px) {
          .node-main { padding: 100px 5% !important; }
          .node-stats { gap: 14px !important; }
          .node-code-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .node-service-grid { grid-template-columns: 1fr !important; }
          .node-ecosystem { padding: 28px 20px !important; }
          .node-cta { padding: 36px 20px !important; }
        }

        @media (max-width: 640px) {
          .node-main { padding: 108px 4.5% 72px !important; }
          .node-page h1 { font-size: clamp(30px, 8.5vw, 42px) !important; }
          .node-page h2 { font-size: clamp(24px, 6.5vw, 30px) !important; }
          .node-page h3 { font-size: clamp(21px, 5.8vw, 26px) !important; }
          .terminal-body { padding: 14px !important; font-size: 12px !important; }
          .node-stats { gap: 10px !important; }
          .node-hero { margin-bottom: 56px !important; }
          .code-rain,
          .node-floating-left,
          .node-floating-right {
            display: none !important;
          }
          .node-cta-buttons { flex-direction: column; align-items: stretch; }
          .node-cta-buttons button { width: 100%; }
        }
      `}</style>
      
      {/* Code Rain Background */}
      <div className="code-rain">
        {['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'try', 'catch', 'async', 'await', 'import', 'export', 'class', 'require', 'module', 'exports', 'console'].map((keyword, i) => (
          <div key={i} className="code-line" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 15}s`, animationDuration: `${10 + Math.random() * 10}s`, fontSize: `${12 + Math.random() * 8}px` }}>
            {keyword} {Array(Math.floor(Math.random() * 5) + 1).fill(' ').join('')}
          </div>
        ))}
      </div>
      
      {/* Floating Code Brackets */}
      <div className="node-floating-left" style={{ position: 'absolute', top: '15%', left: '5%', fontSize: '120px', opacity: 0.05, fontFamily: 'monospace', color: '#68a063', animation: 'float 8s ease-in-out infinite' }}>{'{'}</div>
      <div className="node-floating-right" style={{ position: 'absolute', bottom: '20%', right: '8%', fontSize: '100px', opacity: 0.05, fontFamily: 'monospace', color: '#68a063', animation: 'float 10s ease-in-out infinite 2s' }}>{'}'}</div>
      
      <div className="node-main" style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div className="node-hero" style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3c873a" />
                  <stop offset="100%" stopColor="#68a063" />
                </linearGradient>
              </defs>
              <path fill="url(#nodeGrad)" d="M99.9 18.9c-5.8 0-10.9 1.9-15.2 5.6-4.3 3.7-6.4 8.6-6.4 14.7 0 6.2 2.1 11.1 6.4 14.9 4.3 3.7 9.4 5.6 15.2 5.6h24.7v-5.5H99.9c-4.5 0-8.1-1.4-10.8-4.1-2.7-2.7-4-6.4-4-11.1 0-4.7 1.3-8.5 4-11.3 2.7-2.8 6.3-4.1 10.8-4.1h24.7V18.9H99.9zM56.2 61.4c-5.8 0-10.9 1.9-15.2 5.6-4.3 3.7-6.4 8.6-6.4 14.7 0 6.2 2.1 11.1 6.4 14.9 4.3 3.7 9.4 5.6 15.2 5.6h24.7v-5.5H56.2c-4.5 0-8.1-1.4-10.8-4.1-2.7-2.7-4-6.4-4-11.1 0-4.7 1.3-8.5 4-11.3 2.7-2.8 6.3-4.1 10.8-4.1h24.7V61.4H56.2zM99.9 130c5.8 0 10.9-1.9 15.2-5.6 4.3-3.7 6.4-8.6 6.4-14.7 0-6.2-2.1-11.1-6.4-14.9-4.3-3.7-9.4-5.6-15.2-5.6H75.2v5.5h24.7c4.5 0 8.1 1.4 10.8 4.1 2.7 2.7 4 6.4 4 11.1 0 4.7-1.3 8.5-4 11.3-2.7 2.8-6.3 4.1-10.8 4.1H75.2v5.5h24.7zM132.9 89.2c5.8 0 10.9-1.9 15.2-5.6 4.3-3.7 6.4-8.6 6.4-14.7 0-6.2-2.1-11.1-6.4-14.9-4.3-3.7-9.4-5.6-15.2-5.6h-24.7v5.5h24.7c4.5 0 8.1 1.4 10.8 4.1 2.7 2.7 4 6.4 4 11.1 0 4.7-1.3 8.5-4 11.3-2.7 2.8-6.3 4.1-10.8 4.1h-24.7v5.5h24.7z"/>
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(68, 160, 63, 0.5)', letterSpacing: '-0.02em', fontFamily: "'Fira Code', monospace" }}>
            Node.js Development
          </h1>
          
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: '#8b949e', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            We help enterprises build high-performance, cloud-native digital platforms using Node.js. From API-led integration to real-time data processing and microservices, our solutions accelerate modernization and enable scalable business ecosystems.
          </p>
          
          <div className="node-stats" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { number: '200+', label: 'APIs Built', icon: '🔌' },
              { number: '50+', label: 'Microservices', icon: '🔄' },
              { number: '99.9%', label: 'Uptime', icon: '⚡' },
              { number: '24/7', label: 'Support', icon: '💬' }
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{ padding: '20px 30px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#7ee787' }}>{stat.number}</div>
                  <div style={{ fontSize: '13px', color: '#8b949e' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal / Code Example Section */}
        
        <div className="node-code-grid" style={{ marginBottom: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div className="terminal-window" style={{ animation: 'slideIn 0.8s ease-out' }}>
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#ff5f56' }} />
              <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
              <div className="terminal-dot" style={{ background: '#27c93f' }} />
            </div>
            <div className="terminal-body">
              <div style={{ marginBottom: '12px' }}>
                <span className="keyword">const</span> <span className="variable">express</span> = <span className="keyword">require</span>(<span className="string">'express'</span>);
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="keyword">const</span> <span className="variable">app</span> = <span className="function">express</span>();
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="keyword">const</span> <span className="variable">http</span> = <span className="keyword">require</span>(<span className="string">'http'</span>);
              </div>
              <div style={{ marginBottom: '20px', color: '#8b949e' }}>
                <span className="comment">// Create Express app and HTTP server</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="variable">app</span>.<span className="function">use</span>(<span className="function">express</span>.<span className="function">json</span>());
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="variable">app</span>.<span className="function">get</span>(<span className="string">'/'</span>, (<span className="variable">req</span>, <span className="variable">res</span>) ={'>'}
              </div>
              <div style={{ marginBottom: '12px', paddingLeft: '20px' }}>
                <span className="variable">res</span>.<span className="function">json</span>({'{'}<span className="string">'message'</span>: <span className="string">'API Running'</span>{'}'});
              </div>
              <div>
                <span className="variable">app</span>.<span className="function">listen</span>(<span className="number">3000</span>, () ={'>'} <span className="function">console</span>.<span className="function">log</span>(<span className="string">'Server running'</span>));
              </div>
              <div style={{ marginTop: '20px', color: '#27c93f' }}>→ Server started on port 3000!</div>
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>
              Node.js for Enterprise Transformation
            </h2>
            <p style={{ fontSize: '16px', color: '#8b949e', lineHeight: '1.8', marginBottom: '30px' }}>
              Node.js plays a critical role in modern enterprise architectures by enabling lightweight, high-performance services.
    We use it to build API layers for SAP and enterprise integration, real-time business applications,
    cloud-native microservices, and scalable digital platform backends.

            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['RESTful & GraphQL API Development', 'Real-time Applications (Socket.io)', 'Serverless Architecture (AWS Lambda, Azure)', 'Microservices Architecture', 'Express.js & Fastify Frameworks'].map((item, i) => (
                <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', color: '#c9d1d9' }}>
                  <span style={{ color: '#7ee787', marginRight: '12px', fontSize: '18px' }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Core Services
          </h2>
          <p style={{ fontSize: '18px', color: '#8b949e', textAlign: 'center', marginBottom: '50px' }}>
            Comprehensive Node.js development services
          </p>
          
          <div className="node-service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
  {
    title: 'API & Integration Platforms',
    icon: '🔌',
    desc: 'High-performance API ecosystems that connect SAP, enterprise systems, and digital applications.',
    features: ['API-led Architecture', 'Secure Integrations', 'High Throughput', 'Scalable Gateways']
  },
  {
    title: 'Real-Time Data Processing',
    icon: '⚡',
    desc: 'Event-driven systems for instant insights, live tracking, and intelligent business operations.',
    features: ['Streaming Architecture', 'Event Processing', 'Live Dashboards', 'Instant Notifications']
  },
  {
    title: 'Microservices & Cloud-Native Development',
    icon: '🔄',
    desc: 'Resilient and scalable services deployed across Kubernetes and serverless environments.',
    features: ['Containerized Services', 'Auto Scaling', 'Service Mesh', 'DevOps Pipelines']
  },
  {
    title: 'Digital Platform Backends',
    icon: '☁️',
    desc: 'Secure and scalable backend systems for web, mobile, and partner ecosystems.',
    features: ['Multi-Channel Support', 'High Availability', 'Identity & Access', 'Performance Optimization']
  }
].map((service, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: '#8b949e', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((feature, j) => (
                    <span key={j} style={{ background: 'rgba(68, 160, 63, 0.2)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#7ee787', fontWeight: '500' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="node-ecosystem" style={{ background: 'rgba(22, 27, 34, 0.8)', backdropFilter: 'blur(20px)', borderRadius: '24px', padding: '50px', border: '1px solid #30363d', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '40px', textAlign: 'center' }}>
            Our Node.js Ecosystem Expertise
          </h2>
          <p style={{ textAlign: 'center', color: '#8b949e', marginBottom: '30px' }}>
  Our Node.js capabilities are strengthened by deep expertise across modern cloud, containerization, and integration frameworks.
</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {['Express.js', 'Fastify', 'NestJS', 'Socket.io', 'TypeScript', 'PM2', 'Docker', 'Kubernetes', 'AWS Lambda', 'Azure Functions', 'GraphQL', 'Prisma', 'Mongoose', 'Redis', 'RabbitMQ', 'MongoDB', 'PostgreSQL', 'Jest', 'Mocha', 'Webpack'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="node-cta" style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(68, 160, 63, 0.15), rgba(126, 231, 135, 0.05))', borderRadius: '24px', border: '1px solid rgba(68, 160, 63, 0.3)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Accelerate Your Digital Platform Journey
          </h3>
          <p style={{ fontSize: '16px', color: '#8b949e', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
            Partner with us to build scalable API ecosystems, real-time applications, and cloud-native platforms that drive business growth.
          </p>
          <div className="node-cta-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Updated functional buttons */}
            <button className="cta-btn" onClick={handleNavigation}>
              Start Your Transformation
            </button>
            <button className="cta-btn-outline" onClick={handleNavigation}>
              Talk to Our Experts
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
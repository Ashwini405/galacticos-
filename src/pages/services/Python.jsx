import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Python() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <div className="python-page" style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0d1117 0%, #161b22 50%, #1c2128 100%)', position: 'relative', overflow: 'hidden' }}>
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
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(55, 118, 171, 0.3); } 50% { box-shadow: 0 0 40px rgba(55, 118, 171, 0.6); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .code-rain { position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; pointer-events: none; }
        .code-line { position: absolute; font-family: 'Fira Code', 'Consolas', monospace; font-size: 14px; color: #3776ab; opacity: 0.15; animation: codeRain 15s linear infinite; white-space: nowrap; }
        .typing-cursor { border-right: 3px solid #3776ab; animation: blink 0.75s step-end infinite; }
        .feature-card { background: linear-gradient(135deg, rgba(55, 118, 171, 0.1) 0%, rgba(22, 27, 34, 0.9) 100%); backdrop-filter: blur(10px); border-radius: 12px; padding: 28px; border: 1px solid rgba(55, 118, 171, 0.3); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out forwards; position: relative; overflow: hidden; }
        .feature-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(55, 118, 171, 0.1), transparent); transition: left 0.5s; }
        .feature-card:hover::before { left: 100%; }
        .feature-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); border-color: rgba(55, 118, 171, 0.6); background: linear-gradient(135deg, rgba(55, 118, 171, 0.2) 0%, rgba(22, 27, 34, 0.95) 100%); }
        .terminal-window { background: #0d1117; border-radius: 12px; border: 1px solid #30363d; overflow: hidden; }
        .terminal-header { background: #161b22; padding: 12px 16px; display: flex; gap: 8px; }
        .terminal-dot { width: 12px; height: 12px; border-radius: 50%; }
        .terminal-body { padding: 20px; font-family: 'Fira Code', 'Consolas', monospace; font-size: 14px; color: #c9d1d9; }
        .keyword { color: #ff7b72; }
        .string { color: #a5d6ff; }
        .function { color: #d2a8ff; }
        .comment { color: #8b949e; }
        .number { color: #79c0ff; }
        .stat-card { background: linear-gradient(135deg, rgba(55, 118, 171, 0.15) 0%, rgba(22, 27, 34, 0.8) 100%); border: 1px solid rgba(55, 118, 171, 0.3); border-radius: 16px; padding: 30px; text-align: center; transition: all 0.3s ease; }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.3); border-color: rgba(55, 118, 171, 0.5); }
        .tech-tag { background: rgba(55, 118, 171, 0.15); padding: 10px 20px; border-radius: 8px; color: #58a6ff; font-size: 14px; font-weight: 600; border: 1px solid rgba(55, 118, 171, 0.3); transition: all 0.3s ease; cursor: pointer; }
        .tech-tag:hover { background: rgba(55, 118, 171, 0.25); transform: scale(1.05); box-shadow: 0 5px 15px rgba(55, 118, 171, 0.3); }
        .cta-btn { background: linear-gradient(135deg, #3776ab 0%, #58a6ff 100%); color: #fff; padding: 16px 36px; border-radius: 12px; font-size: 16px; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(55, 118, 171, 0.4); }
        .cta-btn-outline { background: transparent; color: #58a6ff; padding: 16px 36px; border-radius: 12px; font-size: 16px; font-weight: 700; border: 2px solid #58a6ff; cursor: pointer; transition: all 0.3s ease; }
        .cta-btn-outline:hover { background: rgba(88, 166, 255, 0.1); transform: translateY(-3px); }

        @media (max-width: 992px) {
          .python-main { padding: 100px 5% !important; }
          .python-stats { gap: 14px !important; }
          .python-code-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .python-service-grid { grid-template-columns: 1fr !important; }
          .python-tech { padding: 28px 20px !important; }
          .python-cta { padding: 36px 20px !important; }
        }

        @media (max-width: 640px) {
          .python-main { padding: 108px 4.5% 72px !important; }
          .python-page h1 { font-size: clamp(30px, 8.5vw, 42px) !important; }
          .python-page h2 { font-size: clamp(24px, 6.5vw, 30px) !important; }
          .python-page h3 { font-size: clamp(21px, 5.8vw, 26px) !important; }
          .terminal-body { padding: 14px !important; font-size: 12px !important; }
          .python-hero { margin-bottom: 56px !important; }
          .code-rain,
          .python-floating-left,
          .python-floating-right {
            display: none !important;
          }
          .python-cta-buttons { flex-direction: column; align-items: stretch; }
          .python-cta-buttons button { width: 100%; }
        }
      `}</style>
      
      {/* Code Rain Background */}
      <div className="code-rain">
        {['def', 'class', 'import', 'from', 'return', 'if', 'else', 'for', 'while', 'try', 'except', 'with', 'as', 'lambda', 'yield', 'async', 'await', 'print', 'range', 'len'].map((keyword, i) => (
          <div key={i} className="code-line" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 15}s`, animationDuration: `${10 + Math.random() * 10}s`, fontSize: `${12 + Math.random() * 8}px` }}>
            {keyword} {Array(Math.floor(Math.random() * 5) + 1).fill(' ').join('')}
          </div>
        ))}
      </div>
      
      {/* Floating Code Brackets */}
      <div className="python-floating-left" style={{ position: 'absolute', top: '15%', left: '5%', fontSize: '120px', opacity: 0.05, fontFamily: 'monospace', color: '#3776ab', animation: 'float 8s ease-in-out infinite' }}>{'{'}</div>
      <div className="python-floating-right" style={{ position: 'absolute', bottom: '20%', right: '8%', fontSize: '100px', opacity: 0.05, fontFamily: 'monospace', color: '#3776ab', animation: 'float 10s ease-in-out infinite 2s' }}>{'}'}</div>
      
      <div className="python-main" style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 6%', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div className="python-hero" style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-block', marginBottom: '30px', animation: 'glow 3s ease-in-out infinite' }}>
            <svg width="100" height="100" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3776ab" />
                  <stop offset="100%" stopColor="#58a6ff" />
                </linearGradient>
              </defs>
              <path fill="url(#pythonGrad)" d="M99.5 24.6c-6.5 0-12.2 2.1-17 6.2-4.7 4.1-7.1 9.6-7.1 16.4 0 6.9 2.3 12.4 7 16.6 4.7 4.2 10.4 6.3 17 6.3h27.6v-6.2H99.6c-5 0-9-1.5-12-4.6-3-3-4.5-7.2-4.5-12.4 0-5.3 1.5-9.5 4.5-12.6 3-3.1 7-4.6 12-4.6h27.6V24.6H99.5zM62.8 70.7c-6.5 0-12.2 2.1-17 6.2-4.7 4.1-7.1 9.6-7.1 16.4 0 6.9 2.3 12.4 7 16.6 4.7 4.2 10.4 6.3 17 6.3h27.6v-6.2H62.8c-5 0-9-1.5-12-4.6-3-3-4.5-7.2-4.5-12.4 0-5.3 1.5-9.5 4.5-12.6 3-3.1 7-4.6 12-4.6h27.6V70.7H62.8zM99.5 141.4c6.5 0 12.2-2.1 17-6.2 4.7-4.1 7.1-9.6 7.1-16.4 0-6.9-2.3-12.4-7-16.6-4.7-4.2-10.4-6.3-17-6.3H72.4v6.2h27.1c5 0 9 1.5 12 4.6 3 3 4.5 7.2 4.5 12.4 0 5.3-1.5 9.5-4.5 12.6-3 3.1-7 4.6-12 4.6H72.4v6.2h27.1zM136.2 95.3c6.5 0 12.2-2.1 17-6.2 4.7-4.1 7.1-9.6 7.1-16.4 0-6.9-2.3-12.4-7-16.6-4.7-4.2-10.4-6.3-17-6.3h-27.6v6.2h27.6c5 0 9 1.5 12 4.6 3 3 4.5 7.2 4.5 12.4 0 5.3-1.5 9.5-4.5 12.6-3 3.1-7 4.6-12 4.6h-27.6v6.2h27.6z"/>
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', textShadow: '0 4px 20px rgba(55, 118, 171, 0.5)', letterSpacing: '-0.02em', fontFamily: "'Fira Code', monospace" }}>
            Enterprise Python Solutions
          </h1>
          
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: '#8b949e', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
           Leverage Python to power data-driven decision making, intelligent automation, and scalable digital platforms. We enable enterprises to modernize legacy systems, build AI-led solutions, and accelerate cloud transformation.
          </p>
          
          <div className="python-stats" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { number: 'AI & Data Platforms Delivered', label: 'ML Models', icon: '🤖' },
              { number: 'Enterprise Automation Programs', label: 'Data Projects', icon: '📊' },
              { number: 'Cloud-Native Implementations', label: 'Accuracy', icon: '🎯' },
              { number: 'Global Delivery Model', label: 'Support', icon: '💬' }
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{ padding: '20px 30px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#58a6ff' }}>{stat.number}</div>
                  <div style={{ fontSize: '13px', color: '#8b949e' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Example Section */}
        
        <div className="python-code-grid" style={{ marginBottom: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div className="terminal-window" style={{ animation: 'slideIn 0.8s ease-out' }}>
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#ff5f56' }} />
              <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
              <div className="terminal-dot" style={{ background: '#27c93f' }} />
            </div>
            <div className="terminal-body">
              <div style={{ marginBottom: '12px' }}>
                <span className="keyword">import</span> <span className="function">pandas</span> <span className="keyword">as</span> <span className="string">pd</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="keyword">import</span> <span className="function">numpy</span> <span className="keyword">as</span> <span className="string">np</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="keyword">from</span> <span className="function">sklearn</span> <span className="keyword">import</span> model
              </div>
              <div style={{ marginBottom: '20px', color: '#8b949e' }}>
                <span className="comment"># Load and preprocess data</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="function">df</span> = <span className="function">pd</span>.<span className="function">read_csv</span>(<span className="string">'data.csv'</span>)
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="function">X</span>, <span className="function">y</span> = <span className="function">df</span>.<span className="function">drop</span>(<span className="string">'target'</span>), <span className="function">df</span>[<span className="string">'target'</span>]
              </div>
              <div>
                <span className="function">model</span>.<span className="function">fit</span>(<span className="function">X</span>, <span className="function">y</span>)
              </div>
              <div style={{ marginTop: '20px', color: '#27c93f' }}>→ Model trained successfully!</div>
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>
              Enterprise Python Solutions
            </h2>
            <p style={{ fontSize: '16px', color: '#8b949e', lineHeight: '1.8', marginBottom: '30px' }}>
              We use Python to build enterprise-grade data platforms, AI-powered business solutions, and cloud-native applications. Our solutions help organizations unlock real-time insights, automate complex workflows, and create intelligent digital ecosystems.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['AI & Machine Learning Enablement', 'Enterprise Data Engineering & Analytics', 'Intelligent Process Automation', 'API-led System Integration', 'Cloud-native Python Applications'].map((item, i) => (
                <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', color: '#c9d1d9' }}>
                  <span style={{ color: '#58a6ff', marginRight: '12px', fontSize: '18px' }}>▸</span>
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
            Enterprise-Grade Python Capabilities
          </p>
          
          <div className="python-service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
              { title: 'AI & Machine Learning Solutions', icon: '🌐', desc: 'Design and deploy enterprise AI solutions for predictive analytics, NLP, computer vision, and intelligent decision systems.', features: ['Django & Flask', 'REST APIs', 'GraphQL', 'Real-time Apps'] },
              { title: 'Data Engineering & Modern Data Platforms', icon: '🤖', desc: 'Build scalable data pipelines, real-time processing systems, and cloud-based analytics platforms for business insights.', features: ['Deep Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'] },
              { title: 'Intelligent Automation', icon: '📊', desc: 'Automate business processes using Python-driven workflow orchestration, RPA integration, and event-based architectures.', features: ['ETL Pipelines', 'Data Warehousing', 'Big Data', 'Stream Processing'] },
              { title: 'Cloud-Native Application Development', icon: '⚙️', desc: 'Develop high-performance, containerized Python applications aligned with modern cloud and microservices strategies.', features: ['Scripting', 'Docker & K8s', 'Cloud Automation', 'Monitoring'] }
            ].map((service, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: '#8b949e', lineHeight: '1.7', marginBottom: '20px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((feature, j) => (
                    <span key={j} style={{ background: 'rgba(55, 118, 171, 0.2)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#58a6ff', fontWeight: '500' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="python-tech" style={{ background: 'rgba(22, 27, 34, 0.8)', backdropFilter: 'blur(20px)', borderRadius: '24px', padding: '50px', border: '1px solid #30363d', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '40px', textAlign: 'center' }}>
            Technologies We Use
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {['Django', 'Flask', 'FastAPI', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Beautiful Soup', 'Selenium', 'Celery', 'SQLAlchemy', 'Pytest', 'Airflow', 'Kafka', 'AWS Lambda', 'Azure Functions'].map((tech, i) => (
              <div key={i} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="python-cta" style={{ textAlign: 'center', padding: '60px', background: 'linear-gradient(135deg, rgba(55, 118, 171, 0.15), rgba(88, 166, 255, 0.05))', borderRadius: '24px', border: '1px solid rgba(55, 118, 171, 0.3)' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Transform Your Business with AI & Data
          </h3>
          <p style={{ fontSize: '16px', color: '#8b949e', marginBottom: '35px', maxWidth: '500px', margin: '0 auto 35px' }}>
           Connect with our experts to build intelligent, scalable, and future-ready enterprise solutions powered by Python.
          </p>
          <div className="python-cta-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-btn" onClick={handleNavigation}>
              Get Started
            </button>
            <button className="cta-btn-outline" onClick={handleNavigation}>
              Talk to Experts
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
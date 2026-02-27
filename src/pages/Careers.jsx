import { useState } from "react";

const jobs = [
  {
    title: "Senior Java Developer",
    location: "Hyderabad / Remote Hybrid",
    shift: "1pm – 11pm (UK Shift)",
    experience: "8+ years",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Java", "Spring Boot", "SQL", "Microservices", "AWS"],
    clientImpact:
      "Build resilient backend platforms for data-intensive enterprise workflows with better reliability and faster processing.",
    overview:
      "Design and build enterprise-grade backend platforms supporting mission-critical business operations across global clients. Contribute to scalable microservices architecture, cloud-native deployments, and high-performance data systems.",
    responsibilities: [
      "Design and implement Java-based backend services",
      "Build and optimize ETL and ingestion pipelines",
      "Collaborate with analysts and engineering teams",
      "Debug production issues and improve reliability"
    ],
    requirements: [
      "Strong Java and Spring Boot expertise",
      "Good SQL and data modeling knowledge",
      "Experience with microservices and APIs",
      "Cloud exposure (AWS/Azure) is a plus"
    ]
  },
  {
    title: "Senior Production Support Engineer",
    location: "Bengaluru",
    shift: "Rotational",
    experience: "6+ years",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Linux", "SQL", "Monitoring", "Incident Mgmt", "ITIL"],
    clientImpact:
      "Maintain uptime and operational continuity for critical client systems through proactive monitoring and rapid resolution.",
    overview:
      "Lead enterprise production support operations for mission-critical applications, ensuring business continuity, SLA adherence, and rapid incident resolution through cross-functional collaboration.",
    responsibilities: [
      "Provide L2/L3 support for enterprise applications",
      "Handle incidents, RCA, and problem management",
      "Monitor application and infrastructure health",
      "Coordinate with development and DevOps teams"
    ],
    requirements: [
      "Strong Linux/Unix and SQL troubleshooting",
      "Hands-on with monitoring and ticketing tools",
      "Experience in ITIL workflows",
      "Excellent communication and stakeholder management"
    ]
  },
  {
    title: "Java Developer",
    location: "Pune / Chennai",
    shift: "Day Shift",
    experience: "4+ years",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Java", "Spring", "REST APIs", "Git", "CI/CD"],
    clientImpact:
      "Deliver scalable API layers that improve application performance and accelerate feature delivery for business teams.",
    overview:
      "Develop and enhance enterprise backend services and API ecosystems that power high-volume business workflows. Work closely with product, QA, and DevOps teams to deliver scalable and resilient solutions.",
    responsibilities: [
      "Build and maintain Java microservices",
      "Write reusable and testable code",
      "Participate in code reviews and sprint planning",
      "Improve API performance and maintainability"
    ],
    requirements: [
      "Java, Spring Boot, REST API development",
      "Solid SQL and database fundamentals",
      "Working knowledge of Git and CI/CD",
      "Agile team collaboration experience"
    ]
  },
  {
    title: "ERP Consultant",
    location: "Hyderabad / Bengaluru",
    shift: "Day Shift",
    experience: "5+ years",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    techStack: ["ERP", "SAP/Oracle", "Business Process", "Integration", "Reporting"],
    clientImpact:
      "Enable process standardization and operational visibility through scalable ERP implementations and continuous optimization.",
    overview:
      "Deliver enterprise ERP transformation programs across finance, supply chain, and operations, enabling process standardization, governance, and measurable business outcomes for global organizations.",
    responsibilities: [
      "Gather business requirements and map ERP solutions",
      "Configure modules and support integrations",
      "Coordinate with technical and business stakeholders",
      "Support testing, go-live, and post-production stabilization"
    ],
    requirements: [
      "Hands-on ERP implementation experience",
      "Strong understanding of finance or supply chain processes",
      "Experience with system integration and data migration",
      "Excellent client communication and documentation skills"
    ]
  }
];

const highlights = [
  {
    title: "Global Enterprise Exposure",
    text: "Work on SAP, Oracle, Salesforce, and Cloud transformation programs across US, Middle East, and India markets.",
    value: "10+",
    metric: "Global Clients"
  },
  {
    title: "Certified Talent Network",
    text: "Collaborate with experienced architects, consultants, and certified professionals across digital platforms.",
    value: "30+",
    metric: "Certified Experts"
  },
  {
    title: "High-Impact Delivery",
    text: "Contribute to strategic enterprise programs with structured mentorship and real ownership opportunities.",
    value: "95+",
    metric: "Technology Professionals"
  }
];

const process = [
  "Profile review",
  "Technical assessment",
  "Leadership discussion",
  "Offer and onboarding"
];

const clientValueProps = [
  {
    title: "Enterprise-Scale Exposure",
    text: "Work on SAP, Oracle, Salesforce, Cloud, and AI programs serving global enterprises and public sector organizations.",
    icon: "01"
  },
  {
    title: "Clear Career Path",
    text: "Transparent growth frameworks, technical mentorship, and leadership opportunities designed to accelerate your professional journey.",
    icon: "02"
  },
  {
    title: "Flexible Engagement Models",
    text: "Onsite, offshore, hybrid, and global collaboration models that provide exposure to diverse industries and delivery environments.",
    icon: "03"
  }
];

export default function Careers() {
  const [openJob, setOpenJob] = useState(0);

  return (
    <div className="careers-page">
      <style>{`
        .careers-page {
          font-family: Inter, system-ui, sans-serif;
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 26%, #f8fafc 100%);
          color: #0f172a;
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulseSoft {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.06); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .careers-hero {
          min-height: 74vh;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(110deg, rgba(2, 6, 23, 0.8), rgba(29, 78, 216, 0.75)),
            url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80") center/cover no-repeat;
          display: grid;
          align-items: center;
          padding: 112px 3.5% 82px;
        }

        .hero-bubble,
        .hero-bubble-two {
          position: absolute;
          border-radius: 999px;
          filter: blur(2px);
          pointer-events: none;
          animation: pulseSoft 5s ease-in-out infinite;
        }

        .hero-bubble {
          width: 260px;
          height: 260px;
          right: -70px;
          top: 24px;
          background: radial-gradient(circle, rgba(148, 197, 255, 0.45), transparent 70%);
        }

        .hero-bubble-two {
          width: 220px;
          height: 220px;
          left: -60px;
          bottom: -30px;
          animation-delay: 1s;
          background: radial-gradient(circle, rgba(186, 230, 253, 0.35), transparent 70%);
        }

        .hero-content {
          max-width: 1360px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 30px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-copy {
          color: #ffffff;
          animation: slideUp 0.75s ease-out;
        }

        .hero-chip {
          display: inline-block;
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.32);
          background: rgba(255, 255, 255, 0.12);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-copy h1 {
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          line-height: 1.14;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .hero-copy p {
          font-size: clamp(1rem, 1.7vw, 1.14rem);
          line-height: 1.75;
          max-width: 690px;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 20px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          color: #0f172a;
          background: #ffffff;
          transition: transform 0.2s ease;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
        }

        .hero-illus {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.24);
          backdrop-filter: blur(5px);
          border-radius: 18px;
          padding: 18px;
          animation: floatY 4s ease-in-out infinite;
        }

        .hero-illus svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .highlights-section {
          max-width: 1360px;
          margin: -34px auto 0;
          padding: 0 3%;
          position: relative;
          z-index: 3;
        }

        @media (min-width: 1025px) {
          .careers-hero {
            min-height: 78vh;
            padding-top: 126px;
            padding-bottom: 90px;
          }

          .hero-content {
            grid-template-columns: 1.42fr 1fr;
            gap: 40px;
          }

          .hero-copy h1 {
            max-width: 860px;
          }
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .highlight-card {
          background: #ffffff;
          border: 1px solid #dbe7ff;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.09);
        }

        .highlight-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .highlight-value {
          font-size: 1.7rem;
          font-weight: 800;
          color: #1d4ed8;
        }

        .highlight-metric {
          font-size: 0.83rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .highlight-card h3 {
          margin-bottom: 8px;
          font-size: 1.06rem;
        }

        .highlight-card p {
          color: #475569;
          line-height: 1.65;
          font-size: 0.93rem;
        }

        .client-value-section {
          max-width: 1360px;
          margin: 24px auto 0;
          padding: 0 3%;
        }

        .client-value-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
          padding: 22px;
        }

        .client-value-head {
          margin-bottom: 14px;
        }

        .client-value-head h2 {
          margin: 0;
          font-size: 1.34rem;
        }

        .client-value-head p {
          margin: 8px 0 0;
          color: #64748b;
          line-height: 1.6;
          font-size: 0.92rem;
          max-width: 860px;
        }

        .client-value-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .client-value-card {
          border: 1px solid #dbeafe;
          background: #f8fbff;
          border-radius: 14px;
          padding: 14px;
        }

        .client-value-tag {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .client-value-card h3 {
          margin: 0 0 6px;
          font-size: 1rem;
          color: #0f172a;
        }

        .client-value-card p {
          margin: 0;
          color: #475569;
          line-height: 1.62;
          font-size: 0.9rem;
        }

        .career-layout {
          max-width: 1360px;
          margin: 42px auto 70px;
          padding: 0 3%;
          display: grid;
          grid-template-columns: 1.65fr 1fr;
          gap: 22px;
          align-items: start;
        }

        .jobs-box,
        .side-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
        }

        .box-head {
          padding: 22px 22px 14px;
          border-bottom: 1px solid #eef2f7;
        }

        .box-head h2,
        .box-head h3 {
          margin: 0;
          font-size: 1.34rem;
        }

        .box-head p {
          margin: 8px 0 0;
          color: #64748b;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .jobs-list {
          padding: 16px;
        }

        .job-card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .job-card:last-child {
          margin-bottom: 0;
        }

        .job-header {
          width: 100%;
          border: none;
          background: #fff;
          padding: 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          text-align: left;
        }

        .job-header:hover {
          background: #f8fafc;
        }

        .job-role {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .job-meta {
          color: #64748b;
          font-size: 0.85rem;
        }

        .job-toggle {
          min-width: 30px;
          height: 30px;
          border: 1px solid #cbd5e1;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #334155;
          font-size: 1.1rem;
        }

        .job-details {
          border-top: 1px solid #eef2f7;
          padding: 14px 15px 16px;
          background: #fbfdff;
          animation: slideUp 0.25s ease-out;
        }

        .job-details p {
          color: #475569;
          line-height: 1.65;
          font-size: 0.92rem;
          margin-bottom: 12px;
        }

        .job-details h4 {
          font-size: 0.92rem;
          color: #1e3a8a;
          margin: 0 0 6px;
        }

        .job-details ul {
          margin: 0 0 10px;
          padding-left: 18px;
          color: #334155;
          line-height: 1.6;
          font-size: 0.89rem;
        }

        .job-details li {
          margin-bottom: 5px;
        }

        .job-related {
          margin-top: 10px;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 0;
        }

        .job-related img {
          width: 100%;
          height: 100%;
          min-height: 150px;
          object-fit: cover;
          display: block;
        }

        .job-related-content {
          padding: 12px;
        }

        .job-related-content h5 {
          margin: 0 0 8px;
          font-size: 0.9rem;
          color: #1e3a8a;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 9px;
        }

        .tech-chip {
          padding: 5px 9px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1;
        }

        .job-impact {
          margin: 0;
          color: #334155;
          line-height: 1.58;
          font-size: 0.86rem;
        }

        .media-block {
          margin: 16px 16px 0;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #dbeafe;
          position: relative;
        }

        .media-block img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.05), rgba(15, 23, 42, 0.62));
          display: flex;
          align-items: end;
          padding: 14px;
          color: #fff;
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .side-content {
          padding: 16px;
        }

        .process-step {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px;
          margin-bottom: 10px;
          background: #f8fafc;
          font-size: 0.9rem;
          color: #334155;
        }

        .process-dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .mail-box {
          margin-top: 12px;
          border: 1px solid #dbeafe;
          background: #eff6ff;
          color: #1e3a8a;
          border-radius: 12px;
          padding: 12px;
          font-size: 0.91rem;
          line-height: 1.6;
        }

        .mail-btn {
          margin-top: 12px;
          width: 100%;
          border: none;
          border-radius: 999px;
          background: linear-gradient(90deg, #1d4ed8, #2563eb);
          color: #fff;
          font-weight: 600;
          padding: 11px 14px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          justify-content: center;
        }

        .life-box {
          margin-top: 14px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .life-box img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          display: block;
        }

        .life-caption {
          padding: 10px;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #475569;
          background: #fff;
        }

        @media (max-width: 1024px) {
          .hero-content,
          .career-layout {
            grid-template-columns: 1fr;
          }

          .hero-content {
            gap: 22px;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .client-value-grid {
            grid-template-columns: 1fr;
          }

          .careers-hero {
            min-height: auto;
          }

          .job-related {
            grid-template-columns: 1fr;
          }

          .job-related img {
            height: 160px;
          }
        }

        @media (max-width: 640px) {
          .careers-hero,
          .highlights-section,
          .career-layout {
            padding-left: 5%;
            padding-right: 5%;
          }

          .careers-hero {
            padding-top: 104px;
            padding-bottom: 52px;
          }

          .hero-bubble,
          .hero-bubble-two,
          .hero-illus {
            display: none;
          }

          .hero-content {
            display: block;
          }

          .hero-chip {
            font-size: 11px;
            padding: 6px 12px;
            margin-bottom: 14px;
          }

          .hero-copy h1 {
            font-size: clamp(1.7rem, 7.6vw, 2.05rem);
            line-height: 1.2;
            margin-bottom: 12px;
          }

          .hero-copy p {
            font-size: 0.96rem;
            line-height: 1.65;
            margin-bottom: 16px;
          }

          .hero-cta {
            width: 100%;
            max-width: 280px;
          }

          .highlights-section {
            margin-top: -14px;
          }

          .media-block img {
            height: 190px;
          }
        }
      `}</style>

      <section className="careers-hero">
        <div className="hero-bubble" />
        <div className="hero-bubble-two" />

        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-chip">Careers at Galacticos Network</span>
            <h1>Build Enterprise-Grade Solutions. Accelerate Your Career.</h1>
            <p>
              At Galacticos Network, you don’t just write code — you solve complex business problems for
              global enterprises across SAP, Cloud, Data, AI, and Digital platforms. Work alongside
              certified experts, gain exposure to international programs, and grow in a culture built on
              ownership, learning, and impact.
            </p>
            <a href="mailto:hr@galacticosnetwork.com?subject=Career%20Application" className="hero-cta">
              Apply via Email
            </a>
          </div>

          <div className="hero-illus" aria-hidden="true">
            <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="24" y="28" width="452" height="244" rx="20" fill="rgba(255,255,255,0.15)" />
              <rect x="58" y="64" width="170" height="170" rx="14" fill="rgba(255,255,255,0.22)" />
              <circle cx="145" cy="126" r="42" fill="#60A5FA" opacity="0.9" />
              <circle cx="145" cy="116" r="14" fill="white" />
              <path d="M109 170c9-18 23-28 36-28 13 0 27 10 36 28" stroke="white" strokeWidth="8" strokeLinecap="round"/>
              <rect x="252" y="76" width="196" height="24" rx="10" fill="rgba(255,255,255,0.72)" />
              <rect x="252" y="116" width="152" height="15" rx="7" fill="rgba(255,255,255,0.5)" />
              <rect x="252" y="142" width="168" height="15" rx="7" fill="rgba(255,255,255,0.5)" />
              <rect x="252" y="168" width="120" height="15" rx="7" fill="rgba(255,255,255,0.5)" />
              <rect x="252" y="198" width="108" height="32" rx="16" fill="#1D4ED8" />
              <path d="M284 214h44" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="highlights-grid">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <div className="highlight-top">
                <span className="highlight-value">{item.value}</span>
                <span className="highlight-metric">{item.metric}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="client-value-section">
        <div className="client-value-box">
          <div className="client-value-head">
            <h2>Why Professionals Choose Galacticos Network</h2>
            <p>
              We invest in people as much as we invest in technology. From structured career paths to real
              enterprise exposure, we create an environment where engineers, consultants, and leaders grow
              faster and deliver meaningful impact.
            </p>
          </div>

          <div className="client-value-grid">
            {clientValueProps.map((item) => (
              <article className="client-value-card" key={item.title}>
                <span className="client-value-tag">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-layout">
        <div className="jobs-box">
          <div className="box-head">
            <h2>Current Openings</h2>
            <p>Explore opportunities aligned with your skills and career goals.</p>
          </div>

          <div className="media-block">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaboration at workplace"
            />
            <div className="media-overlay">
              Work with cross-functional teams solving real enterprise challenges.
            </div>
          </div>

          <div className="jobs-list">
            {jobs.map((job, index) => {
              const expanded = openJob === index;

              return (
                <article className="job-card" key={job.title}>
                  <button
                    type="button"
                    className="job-header"
                    onClick={() => setOpenJob(expanded ? null : index)}
                    aria-expanded={expanded}
                    aria-controls={`career-job-${index}`}
                  >
                    <div>
                      <div className="job-role">{job.title}</div>
                      <div className="job-meta">
                        {job.location} • {job.shift} • {job.experience}
                      </div>
                    </div>
                    <span className="job-toggle">{expanded ? "−" : "+"}</span>
                  </button>

                  {expanded && (
                    <div className="job-details" id={`career-job-${index}`}>
                      <p>{job.overview}</p>

                      <h4>Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((item, i) => (
                          <li key={`${job.title}-resp-${i}`}>{item}</li>
                        ))}
                      </ul>

                      <h4>Requirements</h4>
                      <ul>
                        {job.requirements.map((item, i) => (
                          <li key={`${job.title}-req-${i}`}>{item}</li>
                        ))}
                      </ul>

                      <div className="job-related">
                        <img src={job.image} alt={`${job.title} technology illustration`} />
                        <div className="job-related-content">
                          <h5>Role Snapshot</h5>
                          <div className="tech-stack">
                            {job.techStack.map((tech) => (
                              <span className="tech-chip" key={`${job.title}-${tech}`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                          <p className="job-impact">{job.clientImpact}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <aside className="side-box">
          <div className="box-head">
            <h3>Hiring Journey</h3>
            <p>Structured, transparent, and designed to evaluate both technical excellence and cultural alignment.</p>
          </div>

          <div className="side-content">
            {process.map((step, i) => (
              <div className="process-step" key={step}>
                <span className="process-dot">{i + 1}</span>
                <span>{step}</span>
              </div>
            ))}

            <div className="mail-box">
              <strong>Share your profile:</strong>
              <br />
              hr@galacticosnetwork.com
            </div>

            <a href="mailto:hr@galacticosnetwork.com?subject=Career%20Application" className="mail-btn">
              Send Application
            </a>

            <div className="life-box">
              <img src="/images/map.png" alt="Global delivery footprint" />
              <div className="life-caption">
                Our teams collaborate across regions to deliver consistent, high-quality outcomes.
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

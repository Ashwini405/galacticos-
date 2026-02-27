import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, Target, Shield, Zap, ChevronRight, ArrowRight, Database, Cloud } from 'lucide-react';

export default function Expertise() {
    const navigate = useNavigate();

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

    return (
        <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: "80px" }}>
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, #020617 0%, #1e1b4b 100%)",
                color: "white",
                padding: "120px 6%",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Animated Background SVG for ERP/Tech theme */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ position: "absolute", top: "-20%", right: "-10%", opacity: 0.15, pointerEvents: "none" }}
                >
                    <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        {/* Geometric/Tech abstract paths */}
                        <path fill="none" stroke="#6366f1" strokeWidth="2" d="M100,50 L150,100 L100,150 L50,100 Z" strokeDasharray="5,5" />
                        <path fill="none" stroke="#8b5cf6" strokeWidth="1" d="M100,20 L180,100 L100,180 L20,100 Z" />
                        <circle cx="100" cy="100" r="40" fill="none" stroke="#a5b4fc" strokeWidth="1" strokeDasharray="4,4" />
                        <circle cx="150" cy="100" r="5" fill="#6366f1" />
                        <circle cx="50" cy="100" r="5" fill="#6366f1" />
                        <circle cx="100" cy="50" r="5" fill="#6366f1" />
                        <circle cx="100" cy="150" r="5" fill="#6366f1" />
                    </svg>
                </motion.div>

                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
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
                            fontSize: "clamp(40px, 6vw, 64px)",
                            fontWeight: "800",
                            marginBottom: "24px",
                            lineHeight: "1.1",
                            letterSpacing: "-1px"
                        }}>
                            Engineering the Digital Core of <br />
                            <span style={{ background: "linear-gradient(to right, #4f46e5, #a5b4fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Modern Enterprises
                            </span>
                        </h1>
                        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#cbd5e1", maxWidth: "650px", marginBottom: "40px", lineHeight: "1.6" }}>
                            Galacticos Network delivers enterprise transformation across SAP, Oracle, Cloud, Data, and Intelligent Automation.
                            We architect scalable digital platforms that enhance operational efficiency, strengthen governance, and accelerate measurable business outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Key Metrics Section */}
            <section style={{ padding: "0 6%", marginTop: "-60px", position: "relative", zIndex: 2 }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}
                    >
                        {[
                            { label: "Global Clients", value: "10+", icon: <Globe size={24} color="#6366f1" /> },
                            { label: "Technology Professionals", value: "95+", icon: <Users size={24} color="#6366f1" /> },
                            { label: "Certified Experts", value: "30+", icon: <Shield size={24} color="#6366f1" /> },
                            { label: "Average Industry Experience", value: "8+ Years", icon: <TrendingUp size={24} color="#6366f1" /> }
                        ].map((metric, idx) => (
                            <motion.div key={idx} variants={fadeIn} style={{
                                background: "white",
                                padding: "32px",
                                borderRadius: "20px",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                                border: "1px solid rgba(226, 232, 240, 0.8)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start"
                            }}>
                                <div style={{ background: "#e0e7ff", padding: "12px", borderRadius: "14px", marginBottom: "20px" }}>
                                    {metric.icon}
                                </div>
                                <h3 style={{ fontSize: "36px", fontWeight: "800", color: "#0f172a", marginBottom: "8px", letterSpacing: "-1px" }}>{metric.value}</h3>
                                <p style={{ color: "#64748b", fontWeight: "500", fontSize: "15px" }}>{metric.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section style={{ padding: "100px 6%" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "16px", letterSpacing: "-1px" }}>Architecting the Future of Enterprise</h2>
                        <p style={{ fontSize: "18px", color: "#64748b", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
                            Our cross-functional teams integrate enterprise applications, cloud infrastructure, and advanced analytics
                            into a unified ecosystem—reducing complexity, improving agility, and enabling scalable growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}
                    >
                        {[
                            {
                                title: "ERP Excellence",
                                desc: "End-to-end SAP S/4HANA implementations and modernization programs that streamline finance, supply chain, and operations while building a resilient digital core.",
                                icon: <Target size={32} color="#fff" />,
                                gradient: "linear-gradient(135deg, #4f46e5 0%, #312e81 100%)"
                            },
                            {
                                title: "Cloud Modernization",
                                desc: "Strategic cloud adoption, migration, and modernization across AWS, Azure, and GCP—optimizing infrastructure performance, cost governance, and security posture.",
                                icon: <Cloud size={32} color="#fff" />,
                                gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)"
                            },
                            {
                                title: "Data & AI Intelligence",
                                desc: "Designing modern data platforms, real-time analytics frameworks, and AI-driven solutions that transform raw data into actionable executive intelligence.",
                                icon: <Database size={32} color="#fff" />,
                                gradient: "linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn}
                                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                                style={{
                                    background: "white",
                                    padding: "40px 32px",
                                    borderRadius: "24px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                                    border: "1px solid rgba(226, 232, 240, 0.6)",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <div style={{
                                    background: item.gradient,
                                    width: "68px",
                                    height: "68px",
                                    borderRadius: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "28px",
                                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>{item.title}</h3>
                                <p style={{ color: "#64748b", lineHeight: "1.7", fontSize: "16px" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Capabilities & Strategy Info */}
            <section style={{ padding: "80px 6%", background: "white", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ flex: "1 1 500px" }}>
                        <h2 style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: "800", color: "#0f172a", marginBottom: "24px", letterSpacing: "-1px" }}>A Methodical Approach to Innovation</h2>
                        <p style={{ fontSize: "18px", color: "#64748b", marginBottom: "32px", lineHeight: "1.7" }}>
                            Our delivery framework combines enterprise architecture rigor, risk-controlled implementation models,
                            and continuous optimization strategies—ensuring predictable outcomes and long-term scalability.
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                            {["Enterprise Architecture Design", "Business Process Re-engineering", "System Integration & Automation", "Managed Services & Support"].map((item, idx) => (
                                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", color: "#334155", fontWeight: "600", fontSize: "16px", cursor: "pointer" }}>
                                    <div style={{ background: "#f1f5f9", padding: "8px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <ChevronRight size={18} color="#4f46e5" />
                                    </div>
                                    <span style={{ transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "#4f46e5"} onMouseOut={(e) => e.target.style.color = "#334155"}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ flex: "1 1 400px", background: "#f8fafc", padding: "40px", borderRadius: "32px", border: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
                        <svg width="100%" height="200" viewBox="0 0 400 200" style={{ overflow: "visible" }}>
                            {/* Technical Architecture/Diagram SVG */}
                            <defs>
                                <linearGradient id="techGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                                </linearGradient>
                            </defs>
                            <motion.rect
                                initial={{ width: 0 }}
                                whileInView={{ width: 150 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                x="50" y="40" width="150" height="30" rx="4" fill="url(#techGradient)"
                            />
                            <motion.rect
                                initial={{ width: 0 }}
                                whileInView={{ width: 100 }}
                                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                x="150" y="90" width="100" height="30" rx="4" fill="#8b5cf6"
                            />
                            <motion.rect
                                initial={{ width: 0 }}
                                whileInView={{ width: 200 }}
                                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                x="70" y="140" width="200" height="30" rx="4" fill="#10b981"
                            />
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ delay: 1.8, duration: 1 }}
                                viewport={{ once: true }}
                                d="M 125,70 L 125,90 M 200,120 L 200,140"
                                fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4"
                            />
                        </svg>
                        <div style={{ marginTop: "40px", textAlign: "center", position: "relative", zIndex: 2 }}>
                            <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#64748b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Our Impact Pillars</h4>
                            <p style={{ color: "#4f46e5", fontSize: "16px", fontWeight: "600", marginTop: "12px", background: "rgba(79, 70, 229, 0.1)", display: "inline-block", padding: "8px 16px", borderRadius: "12px", lineHeight: "1.6", textAlign: "center" }}>
                                Seamless System Migrations<br />
                                Optimized Cloud Total Cost of Ownership<br />
                                Actionable AI-Driven Insights
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Deep CTA Section */}
            <section style={{ padding: "100px 6%" }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    style={{
                        background: "linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)",
                        borderRadius: "32px",
                        padding: "80px 40px",
                        textAlign: "center",
                        color: "white",
                        maxWidth: "1100px",
                        margin: "0 auto",
                        boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
                        position: "relative",
                        overflow: "hidden"
                    }}
                >
                    {/* Decorative rings */}
                    <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "500px", height: "500px", border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>
                    <div style={{ position: "absolute", bottom: "-50%", right: "-10%", width: "600px", height: "600px", border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>

                    <div style={{ position: "relative", zIndex: 2 }}>
                        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "800", marginBottom: "24px", letterSpacing: "-1px" }}>Ready to transform your enterprise?</h2>
                        <p style={{ fontSize: "20px", color: "#c7d2fe", maxWidth: "600px", margin: "0 auto 48px auto", lineHeight: "1.6" }}>
                            Partner with Galacticos Network to modernize your enterprise architecture,
                            optimize digital investments, and accelerate strategic transformation initiatives.
                        </p>
                        <motion.button
                            onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{ background: "white", color: "#4f46e5", border: "none", padding: "20px 48px", borderRadius: "16px", fontSize: "18px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}
                        >
                            Consult With Us
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

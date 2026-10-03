import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  GraduationCap,
  MapPin,
  Briefcase,
  Sparkles,
  Zap,
} from "lucide-react";

const stats = [
  {
    icon: <Award size={22} />,
    title: "3X Certified",
    sub: "Salesforce Platform & AI",
  },
  {
    icon: <Trophy size={22} />,
    title: "5X Ranger",
    sub: "Trailhead Journey",
  },
  {
    icon: <Zap size={22} />,
    title: "AWT Finalist",
    sub: "Agentforce Hackathon 2026",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>About Me</span>
        </div>
        <h2 className="section-title">
          Passionate Developer. <span className="gradient-text">Trailblazer.</span>
        </h2>
        <p className="section-desc">
          Building high-impact solutions by bridging declarative Salesforce automation 
          with robust programmatic architecture and generative AI.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="about-grid">
        {/* Left Profile Card */}
        <motion.div
          className="about-profile-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-avatar-wrap">
            <img
              src="/images/headshot.webp"
              alt="Sarthak Saxena"
              className="about-avatar"
              loading="lazy"
            />
          </div>

          <h3 className="about-profile-name">Sarthak Saxena</h3>
          <p className="about-profile-role">Salesforce Developer</p>

          <div className="about-quick-specs">
            <div className="spec-item">
              <Briefcase size={16} />
              <span>Astrea IT Services</span>
            </div>
            <div className="spec-item">
              <MapPin size={16} />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
            <div className="spec-item">
              <GraduationCap size={16} />
              <span>B.Tech in Computer Science (2021–2025)</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content & Story */}
        <motion.div
          className="about-story-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="about-story-title">
            Turning business vision into reliable, scalable software.
          </h3>

          <div className="about-paragraphs">
            <p>
              I am a Salesforce Developer with deep hands-on expertise building enterprise 
              solutions using Apex, Lightning Web Components (LWC), Flow Orchestration, 
              REST APIs, Agentforce, and Salesforce Data Cloud.
            </p>
            <p>
              My background combines strong computer science fundamentals in Data Structures 
              and Database Optimization with real-world Salesforce development. Beyond building 
              production features, I actively mentor aspiring developers as a Trainer in summer 
              programs and participate in competitive hackathons.
            </p>
          </div>

          {/* Stat Pill Boxes */}
          <div className="stats-card-row">
            {stats.map((stat, i) => (
              <div key={i} className="stat-pill-box">
                <div className="stat-pill-icon">{stat.icon}</div>
                <div className="stat-pill-text">
                  <h4>{stat.title}</h4>
                  <p>{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

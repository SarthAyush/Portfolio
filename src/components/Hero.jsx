import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Award,
  Trophy,
  ArrowRight,
  Brain,
  Code2,
} from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Ambient background glows */}
      <div className="hero-bg-mesh" />
      <div className="hero-grid-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Availability Status */}
        <div className="hero-status-pill">
          <span className="status-dot-pulse" />
          <span>Available for Developer Opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-headline">
          Hi, I'm <span className="gradient-text">Sarthak Saxena</span>
        </h1>

        {/* Subtitle / Role */}
        <div className="hero-subtitle">
          <span>Salesforce Developer</span>
          <span>•</span>
          <span className="company">Astrea IT Services</span>
        </div>

        {/* Lead Summary */}
        <p className="hero-lead">
          Specializing in <strong>Apex</strong>, <strong>Lightning Web Components (LWC)</strong>, 
          <strong> Agentforce</strong>, and <strong>Data Cloud</strong>. Turning complex enterprise 
          workflows into scalable, automated, and intelligent cloud experiences.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn-primary"
          >
            <span>Featured Projects</span>
            <ArrowRight size={17} />
          </Link>

          <a
            href="/Sarthak_Saxena_Resume_A.pdf"
            download="Sarthak_Saxena_Resume.pdf"
            className="btn-secondary"
          >
            <Download size={17} />
            <span>Download Resume</span>
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn-secondary"
          >
            <span>Contact Me</span>
          </Link>
        </div>

        {/* Credentials Badges */}
        <div className="hero-badges-row">
          <div className="hero-badge-item">
            <Award size={16} color="var(--primary)" />
            <span>3X Salesforce Certified</span>
          </div>

          <div className="hero-badge-item">
            <Trophy size={16} color="#f59e0b" />
            <span>5X Trailhead Ranger</span>
          </div>

          <div className="hero-badge-item">
            <Brain size={16} color="#8b5cf6" />
            <span>Agentforce Specialist</span>
          </div>

          <div className="hero-badge-item">
            <Code2 size={16} color="#10b981" />
            <span>AWT Mumbai Finalist</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
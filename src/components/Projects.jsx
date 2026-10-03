import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  ExternalLink,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const subProjects = [
  {
    title: "Customer 360 Ingestion & Automation Hub",
    category: "Data Cloud & Reactive LWC",
    description:
      "Engineered an event-driven automation framework utilizing Salesforce Data Cloud data streams and reactive Lightning Web Components to surface real-time actionable customer insights.",
    tags: ["Data Cloud", "LWC", "Platform Events", "Apex"],
    link: "https://trailblazer.me/id/sarthaksaxena2004",
  },
  {
    title: "Enterprise REST & Web Services Integration",
    category: "Integrations & APIs",
    description:
      "Developed secure, bi-directional Apex REST web services and external callouts for syncing inventory and order records with third-party microservices using OAuth 2.0 authorization.",
    tags: ["Apex REST", "JSON Parsing", "Named Credentials", "Security"],
    link: "https://trailblazer.me/id/sarthaksaxena2004",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>Featured Work</span>
        </div>
        <h2 className="section-title">
          Engineering & <span className="gradient-text">Innovations</span>
        </h2>
        <p className="section-desc">
          Showcasing solutions built for real-world enterprise needs, competitive hackathons, and modern cloud architectures.
        </p>
      </div>

      <div className="projects-container">
        {/* Flagship Featured Project Card */}
        <motion.div
          className="project-hero-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Visual Showcase Side */}
          <div className="project-hero-visual">
            <div className="project-visual-badge">
              <Trophy size={14} />
              <span>Hackathon Finalist</span>
            </div>

            <div className="project-visual-center">
              <div className="project-visual-icon">
                <Bot size={46} />
              </div>
              <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem" }}>
                Agentforce World Tour Mumbai
              </h4>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", marginTop: "4px" }}>
                Retail & Consumer Goods Cloud Solution
              </p>
            </div>
          </div>

          {/* Details Side */}
          <div className="project-hero-details">
            <div className="project-category-tag">Featured Hackathon Project</div>
            <h3 className="project-title">
              Agentforce Retail Store Expansion Solution
            </h3>
            <p className="project-description">
              An intelligent autonomous agent solution designed for Retail & Consumer Goods Cloud. 
              The application automates the end-to-end store expansion pipeline — evaluating demographics, 
              streamlining permits, orchestrating tasks, and tapping into a unified data foundation powered by Data Cloud.
            </p>

            <div className="project-tech-chips">
              <span className="tech-chip">Agentforce</span>
              <span className="tech-chip">Salesforce Data Cloud</span>
              <span className="tech-chip">Retail Cloud</span>
              <span className="tech-chip">Apex & Flows</span>
              <span className="tech-chip">Intelligent Automation</span>
            </div>

            <div className="project-actions">
              <a
                href="https://trailblazer.me/id/sarthaksaxena2004"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>View Trailblazer Profile</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary Projects Grid */}
        <div className="sub-projects-grid">
          {subProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="sub-project-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div>
                <div className="project-category-tag">{proj.category}</div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </div>

              <div>
                <div className="project-tech-chips" style={{ marginBottom: "1.5rem" }}>
                  {proj.tags.map((t, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>Learn More</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
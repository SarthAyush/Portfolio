import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Salesforce Developer",
    company: "Astrea IT Services",
    duration: "January 2026 – Present",
    location: "Noida, Uttar Pradesh",
    current: true,
    points: [
      "Develop and implement enterprise Salesforce solutions using Apex, Lightning Web Components (LWC), and Advanced Flows.",
      "Architect customized business functionality integrating declarative automation with scalable programmatic code.",
      "Build secure REST API integrations connecting Salesforce with external third-party services and microservices.",
      "Explore and implement generative AI capabilities utilizing Agentforce and unified customer graphs in Data Cloud.",
      "Serve as an Instructor / Trainer in a 2-Month Summer Training program teaching Salesforce fundamentals to engineering students.",
    ],
  },
  {
    role: "Salesforce Developer Trainee",
    company: "Astrea IT Services",
    duration: "July 2025 – December 2025",
    location: "Noida, Uttar Pradesh",
    current: false,
    points: [
      "Rigorous hands-on training across Apex triggers, batch processing, LWC reactivity, and Salesforce security models.",
      "Designed and deployed automated workflows using Flow Orchestration and validation rules.",
      "Worked on real-world enterprise API integrations and data migration scripts.",
      "Acquired comprehensive knowledge of standard Salesforce CLI development, packaging, and release processes.",
    ],
  },
  {
    role: "Summer Intern – SQL & Databases",
    company: "Celebal Technologies",
    duration: "June 2024 – August 2024",
    location: "Kanpur Nagar, Uttar Pradesh",
    current: false,
    points: [
      "Authored complex SQL queries and stored procedures for efficient data aggregation and reporting.",
      "Analyzed execution plans and applied indexing strategies for performance query optimization.",
      "Strengthened relational database design principles and relational schema normalizations.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>Career Journey</span>
        </div>
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-desc">
          My path as a Salesforce professional, from database fundamentals to production enterprise solutions.
        </p>
      </div>

      {/* Timeline Flow */}
      <div className="timeline-flow">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`timeline-card-item ${exp.current ? "current" : ""}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="timeline-marker" />

            <div className="timeline-inner-card">
              <div className="timeline-head-meta">
                <div className="role-and-company">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="timeline-badge-date">
                  <Calendar size={13} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="timeline-location">
                <MapPin size={13} />
                <span>{exp.location}</span>
              </div>

              <ul className="timeline-bullet-list">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
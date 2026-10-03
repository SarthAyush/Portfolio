import React from "react";
import { motion } from "framer-motion";
import { Cloud, Code2, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Salesforce Ecosystem",
    subtitle: "CRM, Automation & AI Platforms",
    icon: <Cloud size={22} />,
    skills: [
      "Apex",
      "Lightning Web Components (LWC)",
      "Salesforce Flows",
      "Agentforce",
      "Data Cloud",
      "REST & SOAP APIs",
      "B2C Commerce Cloud",
      "SOQL & SOSL",
      "Lightning App Builder",
    ],
  },
  {
    title: "Programming & Engineering",
    subtitle: "Languages & Computer Science",
    icon: <Code2 size={22} />,
    skills: [
      "JavaScript (ES6+)",
      "Java",
      "Python",
      "SQL & RDBMS",
      "Data Structures & Algorithms",
      "HTML5 & CSS3",
      "Object-Oriented Design",
    ],
  },
  {
    title: "Architecture & DevOps",
    subtitle: "Tools, Modeling & Deployment",
    icon: <Wrench size={22} />,
    skills: [
      "Salesforce CLI (sf)",
      "Git & GitHub",
      "VS Code",
      "Data Modeling",
      "Database Optimization",
      "CI/CD Pipelines",
      "Postman",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Competencies</span>
        </h2>
        <p className="section-desc">
          A comprehensive overview of the technologies, frameworks, and architecture tools I work with daily.
        </p>
      </div>

      {/* Grid */}
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            className="skill-category-box"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="skill-category-head">
              <div className="category-icon-wrap">{cat.icon}</div>
              <div>
                <h3>{cat.title}</h3>
                <p>{cat.subtitle}</p>
              </div>
            </div>

            <div className="skill-tag-cloud">
              {cat.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react';
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: 'Salesforce Developer',
      company: 'Astrea IT Services',
      duration: 'January 2026 – Present',
      location: 'Noida, Uttar Pradesh',
      points: [
        'Develop and implement Salesforce solutions using Apex, LWC, Flows, and automation.',
        'Build customized business functionality using programmatic and declarative development.',
        'Work with REST API integrations to connect Salesforce with external systems.',
        'Explore and implement AI-driven solutions using Agentforce and Data Cloud.',
        'Trainer in 2-Month Summer Training program for college students.',
      ],
      current: true,
    },
    {
      role: 'Salesforce Developer Trainee',
      company: 'Astrea IT Services',
      duration: 'July 2025 – December 2025',
      location: 'Noida, Uttar Pradesh',
      points: [
        'Trained on Salesforce development concepts — Apex, LWC, Flows, and security.',
        'Developed hands-on solutions using Salesforce automation capabilities.',
        'Worked with Salesforce APIs and integrations for enterprise applications.',
        'Built practical knowledge of application development and deployment workflows.',
      ],
      current: false,
    },
    {
      role: 'Summer Intern – SQL',
      company: 'Celebal Technologies',
      duration: 'June 2024 – August 2024',
      location: 'Kanpur Nagar, Uttar Pradesh',
      points: [
        'Developed and optimized SQL queries for efficient data retrieval and analysis.',
        'Worked on database optimization to improve query performance.',
        'Strengthened understanding of database structures and efficient data handling.',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="experience-section">

      {/* Ambient Background */}
      <div className="experience-glow glow-one" />
      <div className="experience-glow glow-two" />

      {/* Floating particles */}
      <div className="experience-particles">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`particle particle-${i}`} />
        ))}
      </div>

      {/* Section Heading */}
      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="heading-badge">
          <Sparkles size={15} />
          <span>CAREER JOURNEY</span>
        </div>

        <h2>
          My <span>Trailblazer Path</span>
        </h2>

        <p>
          From learning the fundamentals to building enterprise Salesforce
          solutions and exploring AI-powered experiences.
        </p>
      </motion.div>

      <div className="timeline-wrapper">

        {/* Timeline */}
        <div className="timeline-line">
          <motion.div
            className="timeline-energy"
            initial={{ height: '0%' }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Experience Cards */}
        <div className="experience-list">

          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
            />
          ))}

        </div>
      </div>
    </section>
  );
};


/* =========================================================
   EXPERIENCE CARD
========================================================= */

const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    { stiffness: 200, damping: 25 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    { stiffness: 200, damping: 25 }
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="experience-item"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
    >

      {/* Timeline Node */}
      <motion.div
        className={`timeline-node ${exp.current ? 'active-node' : ''}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.18 + 0.2,
          type: 'spring',
          stiffness: 250,
          damping: 15,
        }}
      >
        {exp.current && <span className="node-pulse" />}

        <Briefcase size={14} strokeWidth={2.5} />
      </motion.div>

      {/* Card */}
      <motion.div
        ref={cardRef}
        className={`experience-card ${
          exp.current ? 'current-card' : ''
        }`}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 20,
        }}
      >

        {/* Animated Border */}
        <div className="card-border" />

        {/* Mouse-follow glow */}
        <div className="card-light" />

        <div className="card-content">

          {/* Header */}
          <div className="experience-header">

            <div>
              <div className="role-row">

                <h3>{exp.role}</h3>

                {exp.current && (
                  <motion.span
                    className="current-badge"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(255, 90, 54, 0)',
                        '0 0 18px rgba(255, 90, 54, 0.5)',
                        '0 0 0px rgba(255, 90, 54, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <span className="status-dot" />
                    CURRENT
                  </motion.span>
                )}

              </div>

              <motion.p
                className="company-name"
                whileHover={{ x: 5 }}
              >
                {exp.company}
              </motion.p>
            </div>

            <div className="experience-number">
              0{index + 1}
            </div>

          </div>

          {/* Metadata */}
          <div className="experience-meta">

            <span>
              <Calendar size={15} />
              {exp.duration}
            </span>

            <span>
              <MapPin size={15} />
              {exp.location}
            </span>

          </div>

          {/* Divider */}
          <div className="card-divider">
            <span />
          </div>

          {/* Responsibilities */}
          <ul className="experience-points">

            {exp.points.map((point, pi) => (
              <motion.li
                key={pi}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index * 0.18 +
                    0.35 +
                    pi * 0.08,
                }}
              >
                <span className="bullet">
                  <span />
                </span>

                <span>{point}</span>
              </motion.li>
            ))}

          </ul>

          {/* Bottom Accent */}
          <div className="card-footer">
            <span>
              {exp.current
                ? 'Building the future with Salesforce + AI'
                : 'Foundation that shaped the journey'}
            </span>

            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              →
            </motion.div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

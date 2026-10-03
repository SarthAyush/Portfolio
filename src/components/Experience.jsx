import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react';

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


/* =========================================================
   STYLES
========================================================= */

const style = document.createElement('style');

style.innerHTML = `

/* ===============================
   SECTION
================================ */

.experience-section {
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  perspective: 1200px;
}

/* ===============================
   BACKGROUND GLOWS
================================ */

.experience-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  opacity: 0.12;
}

.glow-one {
  top: 15%;
  left: -250px;
  background: #0176d3;
}

.glow-two {
  bottom: 10%;
  right: -250px;
  background: #00a1e0;
}

/* ===============================
   PARTICLES
================================ */

.experience-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--sf-blue);
  opacity: 0.35;
  animation: floatParticle 6s infinite ease-in-out;
}

.particle-0 { left: 8%; top: 20%; animation-delay: 0s; }
.particle-1 { left: 18%; top: 70%; animation-delay: 1s; }
.particle-2 { left: 32%; top: 15%; animation-delay: 2s; }
.particle-3 { left: 45%; top: 82%; animation-delay: 3s; }
.particle-4 { left: 58%; top: 12%; animation-delay: 1.5s; }
.particle-5 { left: 72%; top: 65%; animation-delay: 2.5s; }
.particle-6 { left: 87%; top: 25%; animation-delay: 4s; }
.particle-7 { left: 92%; top: 80%; animation-delay: 1s; }
.particle-8 { left: 25%; top: 45%; animation-delay: 3.5s; }
.particle-9 { left: 67%; top: 35%; animation-delay: 2s; }
.particle-10 { left: 12%; top: 90%; animation-delay: 4s; }
.particle-11 { left: 80%; top: 10%; animation-delay: 1.2s; }
.particle-12 { left: 38%; top: 55%; animation-delay: 2.2s; }
.particle-13 { left: 54%; top: 90%; animation-delay: 3s; }
.particle-14 { left: 95%; top: 50%; animation-delay: 4.2s; }
.particle-15 { left: 5%; top: 55%; animation-delay: 1.8s; }
.particle-16 { left: 47%; top: 30%; animation-delay: 2.8s; }
.particle-17 { left: 76%; top: 92%; animation-delay: 3.8s; }

@keyframes floatParticle {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: .15;
  }

  50% {
    transform: translateY(-25px) scale(1.7);
    opacity: .6;
  }
}

/* ===============================
   HEADING
================================ */

.experience-heading {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 6rem;
}

.heading-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(1,118,211,.08);
  border: 1px solid rgba(1,118,211,.15);
  color: var(--sf-blue);
  font-size: .7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 1.3rem;
}

.experience-heading h2 {
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.05;
  margin: 0;
  color: var(--sf-blue-dark);
  font-weight: 900;
  letter-spacing: -2px;
}

.experience-heading h2 span {
  background: linear-gradient(
    100deg,
    var(--sf-blue),
    #00a1e0,
    #5867e8,
    var(--sf-blue)
  );
  background-size: 250% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientText 5s linear infinite;
}

@keyframes gradientText {
  to {
    background-position: 250% center;
  }
}

.experience-heading p {
  max-width: 650px;
  margin: 1.4rem auto 0;
  color: var(--sf-text-gray);
  font-size: 1rem;
  line-height: 1.8;
}

/* ===============================
   TIMELINE
================================ */

.timeline-wrapper {
  position: relative;
}

.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(1,118,211,.12);
  overflow: hidden;
}

.timeline-energy {
  position: absolute;
  inset: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    #0176d3,
    #00a1e0,
    #5867e8,
    #0176d3
  );
  box-shadow:
    0 0 10px rgba(1,118,211,.8),
    0 0 25px rgba(1,118,211,.35);
}

/* ===============================
   EXPERIENCE ITEM
================================ */

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.experience-item {
  position: relative;
  padding-left: 65px;
}

/* ===============================
   TIMELINE NODE
================================ */

.timeline-node {
  position: absolute;
  left: 5px;
  top: 30px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  background: linear-gradient(
    135deg,
    #0176d3,
    #00a1e0
  );

  border: 4px solid white;

  box-shadow:
    0 0 0 2px rgba(1,118,211,.35),
    0 5px 15px rgba(1,118,211,.25);
}

.active-node {
  background: linear-gradient(
    135deg,
    #ff5a36,
    #ff8a65
  );

  box-shadow:
    0 0 0 2px rgba(255,90,54,.3),
    0 0 25px rgba(255,90,54,.35);
}

.node-pulse {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid rgba(255,90,54,.35);
  animation: nodePulse 2s infinite;
}

@keyframes nodePulse {
  0% {
    transform: scale(.8);
    opacity: .8;
  }

  70%, 100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

/* ===============================
   CARD
================================ */

.experience-card {
  position: relative;
  overflow: hidden;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.96),
      rgba(247,251,255,.92)
    );

  border: 1px solid rgba(1,118,211,.1);
  border-radius: 22px;

  box-shadow:
    0 10px 40px rgba(0,50,100,.07);

  transform-style: preserve-3d;

  transition:
    border-color .4s ease,
    box-shadow .4s ease;
}

.experience-card:hover {
  border-color: rgba(1,118,211,.3);

  box-shadow:
    0 25px 70px rgba(1,118,211,.13),
    0 0 0 1px rgba(1,118,211,.08);
}

.current-card {
  border-color: rgba(255,90,54,.22);
}

/* ===============================
   ANIMATED BORDER
================================ */

.card-border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;

  background:
    linear-gradient(
      120deg,
      transparent 20%,
      rgba(1,118,211,.5),
      transparent 80%
    );

  background-size: 250% 250%;
  animation: borderMove 5s linear infinite;

  opacity: 0;
  transition: opacity .4s ease;
}

.experience-card:hover .card-border {
  opacity: .8;
}

@keyframes borderMove {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 250% 50%;
  }
}

/* ===============================
   CARD LIGHT
================================ */

.card-light {
  position: absolute;
  width: 180px;
  height: 180px;

  right: -90px;
  top: -90px;

  border-radius: 50%;

  background: rgba(1,118,211,.08);

  filter: blur(30px);

  pointer-events: none;
}

/* ===============================
   CARD CONTENT
================================ */

.card-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
}

/* ===============================
   HEADER
================================ */

.experience-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.role-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.role-row h3 {
  margin: 0;
  color: var(--sf-text-dark);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -.3px;
}

.experience-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(1,118,211,.06);
  line-height: 1;
}

/* ===============================
   CURRENT BADGE
================================ */

.current-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 5px 10px;

  background: rgba(255,90,54,.09);
  border: 1px solid rgba(255,90,54,.2);

  color: #e84b2a;

  border-radius: 999px;

  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .8px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff5a36;
  box-shadow: 0 0 8px #ff5a36;
  animation: statusBlink 1.5s infinite;
}

@keyframes statusBlink {
  50% {
    opacity: .3;
  }
}

/* ===============================
   COMPANY
================================ */

.company-name {
  margin: .5rem 0 0;
  color: var(--sf-blue);
  font-weight: 750;
  font-size: 1rem;
}

/* ===============================
   META
================================ */

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  margin-top: 1.1rem;
}

.experience-meta span {
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--sf-text-gray);
  font-size: .82rem;
}

.experience-meta svg {
  color: var(--sf-blue);
}

/* ===============================
   DIVIDER
================================ */

.card-divider {
  height: 1px;
  background: rgba(0,0,0,.06);
  margin: 1.4rem 0;
  overflow: hidden;
}

.card-divider span {
  display: block;
  height: 100%;
  width: 30%;
  background: linear-gradient(
    90deg,
    var(--sf-blue),
    transparent
  );
}

/* ===============================
   POINTS
================================ */

.experience-points {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: .9rem;
}

.experience-points li {
  display: flex;
  align-items: flex-start;
  gap: 11px;

  color: var(--sf-text-gray);
  line-height: 1.7;
  font-size: .9rem;
}

.bullet {
  flex-shrink: 0;

  width: 17px;
  height: 17px;

  margin-top: 4px;

  border-radius: 50%;

  background: rgba(1,118,211,.08);

  display: flex;
  align-items: center;
  justify-content: center;
}

.bullet span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--sf-blue);
  box-shadow: 0 0 7px rgba(1,118,211,.6);
}

/* ===============================
   FOOTER
================================ */

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.7rem;
  padding-top: 1rem;

  border-top: 1px dashed rgba(1,118,211,.12);

  color: var(--sf-blue);
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .2px;
}

.card-footer div {
  font-size: 1.1rem;
}

/* ===============================
   MOBILE
================================ */

@media (max-width: 700px) {

  .experience-section {
    padding: 5rem 1rem;
  }

  .experience-heading {
    margin-bottom: 4rem;
  }

  .experience-heading h2 {
    letter-spacing: -1px;
  }

  .timeline-line {
    left: 14px;
  }

  .experience-item {
    padding-left: 42px;
  }

  .timeline-node {
    left: 0;
    width: 29px;
    height: 29px;
  }

  .card-content {
    padding: 1.35rem;
  }

  .experience-header {
    align-items: flex-start;
  }

  .experience-number {
    display: none;
  }

  .role-row h3 {
    font-size: 1.1rem;
  }

  .experience-meta {
    flex-direction: column;
    gap: .55rem;
  }

  .experience-card {
    border-radius: 17px;
  }

  .experience-points li {
    font-size: .85rem;
  }
}

`;

document.head.appendChild(style);

export default Experience;
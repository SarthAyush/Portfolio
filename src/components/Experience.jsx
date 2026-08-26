import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

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
    <section id="experience" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.2rem', color: 'var(--sf-blue-dark)', fontWeight: 800, textAlign: 'center', marginBottom: '3.5rem' }}
      >
        My <span style={{ color: 'var(--sf-blue)' }}>Trailblazer Path</span>
      </motion.h2>

      <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
        {/* Vertical line — like Salesforce Path progress bar */}
        <div
          style={{
            position: 'absolute',
            left: '11px',
            top: '10px',
            bottom: '10px',
            width: '3px',
            background: 'linear-gradient(180deg, var(--sf-blue) 0%, var(--sf-blue-light) 100%)',
            borderRadius: '10px',
          }}
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{ position: 'relative', marginBottom: '3rem' }}
          >
            {/* Timeline dot */}
            <motion.div
              whileInView={{ scale: [0, 1.3, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
              style={{
                position: 'absolute',
                left: '-2.5rem',
                top: '4px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: exp.current ? 'var(--sf-orange)' : 'var(--sf-blue)',
                border: '4px solid #fff',
                boxShadow: '0 0 0 3px var(--sf-blue-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Briefcase size={12} color="#fff" />
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 15px 35px var(--sf-shadow)' }}
              style={{
                background: 'var(--sf-card-bg)',
                borderRadius: '14px',
                padding: '1.8rem',
                boxShadow: '0 5px 20px rgba(0,0,0,0.06)',
                borderLeft: exp.current ? '4px solid var(--sf-orange)' : '4px solid var(--sf-blue-light)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--sf-text-dark)', fontSize: '1.25rem', fontWeight: 700 }}>{exp.role}</h3>
                {exp.current && (
                  <span style={{ background: 'var(--sf-orange)', color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.7rem', borderRadius: '20px', height: 'fit-content' }}>
                    Current
                  </span>
                )}
              </div>
              <p style={{ color: 'var(--sf-blue)', fontWeight: 600, marginBottom: '0.2rem' }}>{exp.company}</p>
              <p style={{ color: 'var(--sf-text-gray)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {exp.duration} • {exp.location}
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--sf-text-gray)', lineHeight: 1.8 }}>
                {exp.points.map((pt, pi) => (
                  <li key={pi}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
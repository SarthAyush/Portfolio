import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillGroups = [
    { title: 'Salesforce', items: ['Apex', 'LWC', 'Flows', 'Agentforce', 'Data Cloud', 'REST APIs', 'B2C Commerce', 'Lightning App Builder'] },
    { title: 'Programming', items: ['Java', 'JavaScript', 'Python', 'SQL', 'DSA'] },
    { title: 'Tools & Concepts', items: ['Git', 'VS Code', 'Data Modeling', 'DB Optimization', 'Automation'] },
  ];

  return (
    <section id="skills" style={{ padding: '6rem 2rem', background: 'var(--sf-cloud-white)' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.2rem', color: 'var(--sf-blue-dark)', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}
      >
        Skill <span style={{ color: 'var(--sf-blue)' }}>Badges</span>
      </motion.h2>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '2.5rem' }}>
        {skillGroups.map((group, gi) => (
          <div key={gi}>
            <h3 style={{ color: 'var(--sf-blue-dark)', marginBottom: '1rem', fontSize: '1.2rem' }}>{group.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {group.items.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, background: 'var(--sf-blue)', color: '#fff' }}
                  style={{
                    padding: '0.6rem 1.3rem',
                    borderRadius: '30px',
                    background: '#fff',
                    color: 'var(--sf-blue-dark)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                    cursor: 'default',
                    border: '1px solid var(--sf-blue-light)',
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
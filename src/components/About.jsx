import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={28} />, label: '3X Certified', sub: 'Salesforce' },
    { icon: <Trophy size={28} />, label: '5X Ranger', sub: 'Trailhead' },
    { icon: <GraduationCap size={28} />, label: 'B.Tech CSE', sub: '2021 - 2025' },
  ];

  return (
    <section id="about" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '3rem',
        }}
        className="about-grid"
      >
        <motion.img
          src="/images/headshot.png"
          alt="Sarthak Saxena"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          style={{
            width: '100%',
            aspectRatio: '1/1',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '20px',
            boxShadow: '0 15px 40px var(--sf-shadow)',
          }}
        />

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '2.2rem', color: 'var(--sf-blue-dark)', fontWeight: 800, marginBottom: '1rem' }}
          >
            About <span style={{ color: 'var(--sf-blue)' }}>Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ color: 'var(--sf-text-gray)', fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            Salesforce Developer with hands-on experience building and implementing solutions using
            Apex, Lightning Web Components, Flows, REST APIs, Agentforce, and Data Cloud. I work across
            both declarative and programmatic development to create scalable, automated business solutions —
            and I also train aspiring developers on Salesforce fundamentals.
          </motion.p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8, boxShadow: '0 15px 35px var(--sf-shadow)' }}
            style={{
              background: 'var(--sf-card-bg)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.06)',
              borderTop: '4px solid var(--sf-blue)',
            }}
          >
            <div style={{ color: 'var(--sf-blue)', marginBottom: '0.8rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
            <h3 style={{ color: 'var(--sf-text-dark)', fontSize: '1.3rem', fontWeight: 700 }}>{s.label}</h3>
            <p style={{ color: 'var(--sf-text-gray)' }}>{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
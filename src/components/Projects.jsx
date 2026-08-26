import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, ShoppingBag, ExternalLink, Trophy } from 'lucide-react';

const Projects = () => {
  const techTags = [
    { name: 'Agentforce', icon: <Sparkles size={14} /> },
    { name: 'Data Cloud', icon: <Database size={14} /> },
    { name: 'Retail & Consumer Goods Cloud', icon: <ShoppingBag size={14} /> },
  ];

  const points = [
    'Developed an Agentforce-powered solution for a Retail & Consumer Goods Cloud use case focused on retail store expansion.',
    'Designed the solution to make the store expansion process more automated, seamless, and efficient.',
    'Leveraged Agentforce to enable intelligent automation and assist with business processes.',
    'Utilized Data Cloud to provide a unified data foundation for the solution.',
  ];

  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: 'var(--sf-cloud-white)' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.2rem', color: 'var(--sf-blue-dark)', fontWeight: 800, textAlign: 'center', marginBottom: '0.8rem' }}
      >
        Featured <span style={{ color: 'var(--sf-blue)' }}>Project</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        style={{ textAlign: 'center', color: 'var(--sf-text-gray)', marginBottom: '3rem' }}
      >
        Built during the Agentforce Hackathon — Agentforce World Tour Mumbai
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        style={{
          maxWidth: '850px',
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(1,118,211,0.15)',
          background: '#fff',
        }}
      >
        {/* Top gradient banner */}
        <div
          style={{
            background: 'var(--sf-gradient)',
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: '-30px', right: '-30px', opacity: 0.15 }}
          >
            <Sparkles size={140} color="#fff" />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.2)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            <Trophy size={14} /> Hackathon Finalist
          </motion.div>

          <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.8rem' }}>
            Agentforce Retail Store Expansion Solution
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {techTags.map((tag, i) => (
              <span
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}
              >
                {tag.icon} {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '2rem' }}>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--sf-text-gray)', lineHeight: 1.9 }}>
            {points.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {pt}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="https://trailblazer.me/id/sarthaksaxena2004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, gap: '10px' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '1.5rem',
              color: 'var(--sf-blue)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            View Trailblazer Profile <ExternalLink size={16} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
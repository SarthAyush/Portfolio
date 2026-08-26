import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, Mic, Award } from 'lucide-react';

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const images = [
  {
    src: '/images/Arena.png',
    caption: 'The Arena',
    description: 'A wide shot of the Agentforce World Tour Mumbai venue — where hundreds of Trailblazers gathered for a day of AI-powered innovation.',
    size: 'large',
    position: 'center',
    icon: <Trophy size={16} />,
  },{
    src: '/images/with trophy.png',
    caption: 'Finalist Moment',
    description: 'Celebrating as a Hackathon Finalist — the moment the hard work on Agentforce and Data Cloud paid off.',
    size: 'tall',
    position: 'center', // face cut hone se bachane ke liye
    icon: <Award size={16} />,
  },
  
  {
    src: '/images/at Stage.png',
    caption: 'Pitching the Solution',
    description: 'Presenting our Agentforce-powered retail store expansion solution on stage during the Hackathon finals.',
    size: 'medium',
    position: 'center',
    icon: <Mic size={16} />,
  },
  {
    src: '/images/Community Session.jpg',
    caption: 'Community Session',
    description: 'Speaking at a Trailblazer Community Session, sharing insights on Agentforce and Data Cloud with fellow developers.',
    size: 'medium',
    position: 'center',
    icon: <Mic size={16} />,
  },
  
];

  const sizeStyles = {
    large: { gridColumn: 'span 2', gridRow: 'span 1' },
    tall: { gridColumn: 'span 1', gridRow: 'span 2' },
    medium: { gridColumn: 'span 1', gridRow: 'span 1' },
  };

  return (
    <section id="gallery" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 0.6 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--sf-orange)',
          color: '#fff',
          padding: '0.4rem 1.1rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1rem',
        }}
      >
        <Trophy size={14} /> Moments from the field
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ fontSize: '2.2rem', color: 'var(--sf-blue-dark)', fontWeight: 800, marginBottom: '0.6rem' }}
      >
        Agentforce World Tour <span style={{ color: 'var(--sf-blue)' }}>Mumbai</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        style={{ color: 'var(--sf-text-gray)', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: '650px' }}
      >
        From presenting on stage to speaking at a Community Session — a look back at the
        Hackathon where our Agentforce + Data Cloud retail solution made it to the finals.
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '220px',
          gap: '1.2rem',
        }}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelected(img)}
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(1,118,211,0.15)',
              ...sizeStyles[img.size],
            }}
          >
            <motion.img
              src={img.src}
              alt={img.caption}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(3,45,96,0.9) 0%, rgba(3,45,96,0.1) 55%, transparent 75%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--sf-orange)', marginBottom: '0.3rem' }}>
                {img.icon}
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  {img.caption.toUpperCase()}
                </span>
              </div>
              <p style={{ color: '#fff', fontWeight: 500, fontSize: '0.85rem', lineHeight: 1.4, opacity: 0.95 }}>
                {img.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox on click */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(3,45,96,0.92)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'pointer',
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selected.src}
              alt={selected.caption}
              style={{ maxWidth: '90%', maxHeight: '75vh', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{ textAlign: 'center', marginTop: '1.2rem', maxWidth: '600px' }}
            >
              <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.4rem' }}>{selected.caption}</h3>
              <p style={{ color: '#C9E4FF', fontSize: '0.95rem' }}>{selected.description}</p>
            </motion.div>
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X color="#fff" size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
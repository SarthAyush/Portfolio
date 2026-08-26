import React from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--sf-gradient)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <Cloud size={60} color="#fff" />
      </motion.div>
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ color: '#fff', marginTop: '1rem', fontWeight: 600, letterSpacing: '1px' }}
      >
        Loading Trailhead...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
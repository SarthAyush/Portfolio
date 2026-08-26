import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cloud } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Gallery', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          padding: '1rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(3, 45, 96, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 700, fontSize: '1.3rem' }}
        >
          <Cloud color="#1B96FF" size={28} />
          Sarthak<span style={{ color: '#1B96FF' }}>.dev</span>
        </motion.div>

        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-70}
              style={{ color: '#fff', cursor: 'pointer', fontWeight: 500 }}
            >
              <motion.span whileHover={{ color: '#1B96FF', y: -2 }} style={{ display: 'inline-block' }}>
                {link}
              </motion.span>
            </Link>
          ))}
        </div>
        <motion.button
  onClick={() => setDarkMode(!darkMode)}
  whileHover={{ scale: 1.15, rotate: 15 }}
  whileTap={{ scale: 0.9 }}
  style={{
    background: 'rgba(255,255,255,0.15)',
    border: 'none',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '1rem',
  }}
>
  {darkMode ? <Sun size={18} color="#FE9339" /> : <Moon size={18} color="#fff" />}
</motion.button>

        <div className="mobile-icon" style={{ display: 'none' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#fff" size={26} /> : <Menu color="#fff" size={26} />}
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '68px',
              width: '100%',
              background: 'rgba(3, 45, 96, 0.98)',
              backdropFilter: 'blur(10px)',
              zIndex: 999,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 0',
            }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-60}
                onClick={() => setIsOpen(false)}
                style={{ padding: '1rem 2rem', color: '#fff', cursor: 'pointer' }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{ fontWeight: 500 }}
                >
                  {link}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
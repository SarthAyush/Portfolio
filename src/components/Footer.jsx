import React from 'react';

const Footer = () => (
  <footer style={{ background: '#032D60', color: '#C9E4FF', textAlign: 'center', padding: '1.5rem', fontSize: '0.9rem' }}>
    © {new Date().getFullYear()} Sarthak Saxena — Built with React & ⚡ Salesforce spirit
  </footer>
);

export default Footer;
import React from "react";
import { Link } from "react-scroll";
import { ArrowUp, Cloud } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <Cloud size={20} color="var(--primary)" />
              <h3>Sarthak Saxena</h3>
            </div>
            <p>Salesforce Developer • Agentforce & Data Cloud Innovator</p>
          </div>

          <div className="footer-links-row">
            <Link to="home" smooth={true} duration={500} className="footer-link">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-70} className="footer-link">
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-70} className="footer-link">
              Skills
            </Link>
            <Link to="experience" smooth={true} duration={500} offset={-70} className="footer-link">
              Experience
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-70} className="footer-link">
              Projects
            </Link>
            <Link to="gallery" smooth={true} duration={500} offset={-70} className="footer-link">
              Moments
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className="footer-link">
              Contact
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Sarthak Saxena. Designed for high performance and clean aesthetics.
          </p>

          <button type="button" onClick={scrollToTop} className="back-to-top-btn">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

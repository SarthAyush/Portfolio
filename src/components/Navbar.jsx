import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Moon, Sun, Menu, X, Download } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Moments", to: "gallery" },
  { name: "Contact", to: "contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        setScrolled(window.scrollY > 30);

        const scrollPos = window.scrollY + window.innerHeight * 0.35;
        for (let i = navLinks.length - 1; i >= 0; i--) {
          const el = document.getElementById(navLinks[i].to);
          if (el && scrollPos >= el.offsetTop) {
            setActiveSection(navLinks[i].to);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="navbar-wrapper">
        <header className={`navbar-pill ${scrolled ? "scrolled" : ""}`}>
          {/* Logo / Brand */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-brand"
            aria-label="Sarthak Saxena Home"
          >
            <div className="nav-brand-icon">
              <Cloud size={19} />
            </div>
            <span>
              Sarthak<span style={{ color: "var(--primary)" }}>.dev</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setActiveSection(link.to)}
                className={`nav-item-btn ${activeSection === link.to ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Theme Toggle */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href="/Sarthak_Saxena_Resume_A.pdf"
              download="Sarthak_Saxena_Resume.pdf"
              className="nav-resume-btn"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className={`mobile-nav-link ${activeSection === link.to ? "active" : ""}`}
                onClick={() => {
                  setActiveSection(link.to);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Sarthak_Saxena_Resume_A.pdf"
              download="Sarthak_Saxena_Resume.pdf"
              className="btn-primary"
              style={{ justifyContent: "center", marginTop: "0.5rem" }}
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
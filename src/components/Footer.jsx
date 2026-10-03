import React from "react";
import { motion } from "framer-motion";
import { Trophy, Mail, ArrowUp, Sparkles, Heart, IdCard } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <IdCard size={17} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sarthak-saxena-dev",
    },
    {
      icon: <Trophy size={17} />,
      label: "Trailblazer",
      href: "https://trailblazer.me/id/sarthaksaxena2004",
    },
    {
      icon: <Mail size={17} />,
      label: "Email",
      href: "mailto:sarthak@astreait.com",
    },
  ];

  const navigation = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Gallery",
      href: "#gallery",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="footer">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-grid" />

      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <motion.div
        className="footer-cta"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className="footer-cta-badge">
          <Sparkles size={14} />

          <span>THANKS FOR VISITING</span>
        </div>

        <h2>
          Let's build something <span>extraordinary.</span>
        </h2>

        <p>
          Salesforce development, AI innovation, and a little bit of Trailblazer
          energy.
        </p>

        <motion.a
          href="#contact"
          className="footer-cta-button"
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          Let's Connect
          <ArrowUp size={16} />
        </motion.a>
      </motion.div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="footer-divider" />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">
        {/* ===================================================
            BRAND
        =================================================== */}

        <motion.div
          className="footer-brand"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="footer-logo">SS</div>

          <div>
            <h3>Sarthak Saxena</h3>

            <p>Salesforce Developer</p>
          </div>

          <p className="footer-brand-description">
            Building scalable Salesforce solutions and exploring the
            intersection of CRM, AI, and intelligent automation.
          </p>
        </motion.div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <motion.div
          className="footer-navigation"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          <span className="footer-column-title">NAVIGATION</span>

          <div className="footer-nav-grid">
            {navigation.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{
                  x: 4,
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            SOCIALS
        =================================================== */}

        <motion.div
          className="footer-social"
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <span className="footer-column-title">CONNECT</span>

          <div className="footer-social-links">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
              >
                {item.icon}

                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM DIVIDER
      ===================================================== */}

      <div className="footer-bottom-divider" />

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div className="footer-bottom">
        <span>© {currentYear} Sarthak Saxena</span>

        <span className="footer-built">
          Built with
          <Heart size={13} fill="currentColor" />
          React
          <span className="footer-dot">•</span>
          Salesforce Spirit ⚡
        </span>

        <motion.a
          href="#home"
          className="footer-back-top"
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <ArrowUp size={15} />

          <span>Back to top</span>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;

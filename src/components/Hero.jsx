import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Cloud,
  ArrowDown,
  Sparkles,
  Download,
  ExternalLink,
  Code2,
  Brain,
  Database,
} from "lucide-react";
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(clientX - rect.left);
      mouseY.set(clientY - rect.top);
    });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section"
      onMouseMove={handleMouseMove}
    >

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="hero-aurora hero-aurora-one" />
      <div className="hero-aurora hero-aurora-two" />
      <div className="hero-aurora hero-aurora-three" />

      {/* Grid */}

      <div className="hero-grid" />

      {/* Mouse spotlight */}

      <motion.div
        className="hero-mouse-light"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      {/* ==================================================
          FLOATING PARTICLES
      ================================================== */}

      <div className="hero-particles">

        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className={`hero-particle hero-particle-${i}`}
          />
        ))}

      </div>


      {/* ==================================================
          FLOATING CLOUDS
      ================================================== */}

      {[...Array(4)].map((_, i) => (

        <motion.div
          key={`cloud-${i}`}
          className={`hero-cloud hero-cloud-${i}`}
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 7 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud size={70 + i * 25} />
        </motion.div>

      ))}


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div className="hero-content">

        {/* Small badge */}

        <motion.div
          className="hero-badge"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <span className="hero-badge-dot" />

          <Sparkles size={14} />

          <span>
            SALESFORCE DEVELOPER
          </span>

        </motion.div>


        {/* ==================================================
            PROFILE IMAGE
        ================================================== */}

        <motion.div
          className="hero-profile"
          initial={{
            opacity: 0,
            scale: 0.5,
            y: -30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            scale: 1.04,
          }}
        >

          {/* Outer rotating ring */}

          <motion.div
            className="hero-profile-ring"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Glow */}

          <div className="hero-profile-glow" />

          {/* Image */}

          <div className="hero-profile-image">

            <img
              src="/images/headshot.png"
              alt="Sarthak Saxena"
            />

          </div>


          {/* Floating Salesforce badge */}

          <motion.div
            className="hero-tech-badge hero-salesforce-badge"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud size={15} />
            Salesforce
          </motion.div>


          {/* Floating AI badge */}

          <motion.div
            className="hero-tech-badge hero-ai-badge"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Brain size={15} />
            Agentforce
          </motion.div>

        </motion.div>


        {/* ==================================================
            WELCOME TEXT
        ================================================== */}

        <motion.p
          className="hero-welcome"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
        >
          WELCOME TO MY TRAILHEAD
        </motion.p>


        {/* ==================================================
            NAME
        ================================================== */}

        <motion.h1
          className="hero-title"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          Hi, I'm

          <span>
            Sarthak Saxena
          </span>

        </motion.h1>


        {/* ==================================================
            ROLE
        ================================================== */}

        <motion.h2
          className="hero-role"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.7,
          }}
        >

          Salesforce Developer
          <span className="hero-at">
            @
          </span>
          Astrea IT Services

        </motion.h2>


        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.75,
            duration: 0.7,
          }}
        >

          3X Certified
          <span>•</span>
          Agentforce Specialist
          <span>•</span>
          Platform App Builder
          <span>•</span>
          Platform Developer I

        </motion.p>


        {/* ==================================================
            SKILL MINI CARDS
        ================================================== */}

        <motion.div
          className="hero-skills"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.85,
            duration: 0.7,
          }}
        >

          <div>
            <Code2 size={16} />
            Apex & LWC
          </div>

          <div>
            <Brain size={16} />
            Agentforce
          </div>

          <div>
            <Database size={16} />
            Data Cloud
          </div>

        </motion.div>


        {/* ==================================================
            BUTTONS
        ================================================== */}

        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
        >

          {/* Projects */}

          <motion.a
            href="#projects"
            className="hero-btn hero-btn-primary"
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >

            <span>
              View Projects
            </span>

            <ExternalLink size={17} />

          </motion.a>


          {/* Resume */}

          <motion.a
            href="/Sarthak_Saxena_Resume_A.pdf"
            download
            className="hero-btn hero-btn-secondary"
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >

            <Download size={17} />

            <span>
              Download Resume
            </span>

          </motion.a>

        </motion.div>

      </div>


      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={17} />
        </motion.div>

      </motion.a>

    </section>
  );
};

export default Hero;

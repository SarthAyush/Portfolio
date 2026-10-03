import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import {
  GraduationCap,
  Award,
  Trophy,
  Sparkles,
  Code2,
  Zap,
  Brain,
} from "lucide-react";
import "../styles/About.css";

const About = () => {
  /* =====================================================
     STATS
  ===================================================== */

  const stats = [
    {
      icon: <Award size={30} />,
      label: "3X Certified",
      sub: "Salesforce",
      color: "#0176d3",
    },

    {
      icon: <Trophy size={30} />,
      label: "5X Ranger",
      sub: "Trailhead",
      color: "#ff5a36",
    },

    {
      icon: <GraduationCap size={30} />,
      label: "B.Tech CSE",
      sub: "2021 - 2025",
      color: "#5867e8",
    },
  ];

  /* =====================================================
     3D CARD MOUSE EFFECT
  ===================================================== */

  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 25,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 25,
  });

  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="about-section">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="about-bg-glow about-glow-one" />

      <div className="about-bg-glow about-glow-two" />

      <div className="about-grid-pattern" />

      {/* =================================================
          FLOATING PARTICLES
      ================================================= */}

      <div className="about-particles">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`about-particle about-particle-${i}`} />
        ))}
      </div>

      {/* =================================================
          HEADING
      ================================================= */}

      <motion.div
        className="about-heading"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="about-heading-badge">
          <Sparkles size={15} />

          <span>WHO I AM</span>
        </div>

        <h2>
          About <span>Me</span>
        </h2>

        <p>
          Developer. Trailblazer. Problem solver. Building meaningful
          experiences with Salesforce, AI, and modern technology.
        </p>
      </motion.div>

      {/* =================================================
          PROFILE CARD
      ================================================= */}

      <motion.div
        className="about-profile"
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Animated border */}

        <div className="about-card-border" />

        {/* Spotlight */}

        <div className="about-card-spotlight" />

        {/* =================================================
            PROFILE CONTENT
        ================================================= */}

        <div className="about-profile-inner">
          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <motion.div
            className="about-image-wrapper"
            initial={{
              opacity: 0,
              x: -70,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Rotating ring */}

            <motion.div
              className="image-gradient-ring"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Image */}

            <div className="image-ring-inner">
              <motion.img
                src="/images/headshot.webp"
                alt="Sarthak Saxena"
                loading="lazy"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
              />
            </div>

            {/* =================================================
                SALESFORCE BADGE
            ================================================= */}

            <motion.div
              className="
                floating-tech-badge
                badge-salesforce
              "
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Zap size={15} />
              Salesforce
            </motion.div>

            {/* =================================================
                AI BADGE
            ================================================= */}

            <motion.div
              className="
                floating-tech-badge
                badge-ai
              "
              animate={{
                y: [0, 8, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Brain size={15} />
              AI
            </motion.div>
          </motion.div>

          {/* =================================================
              ABOUT CONTENT
          ================================================= */}

          <div className="about-content">
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              {/* Role */}

              <div className="about-role">
                <Code2 size={16} />
                Salesforce Developer
              </div>

              {/* Heading */}

              <h3>
                Turning ideas into
                <span>scalable solutions.</span>
              </h3>

              {/* Description */}

              <p>
                Salesforce Developer with hands-on experience building and
                implementing solutions using Apex, Lightning Web Components,
                Flows, REST APIs, Agentforce, and Data Cloud.
              </p>

              <p>
                I work across both declarative and programmatic development to
                create scalable, automated business solutions — while also
                training aspiring developers on Salesforce fundamentals.
              </p>

              {/* =================================================
                  SKILLS
              ================================================= */}

              <div className="about-skills">
                <span>Apex</span>

                <span>LWC</span>

                <span>Agentforce</span>

                <span>Data Cloud</span>

                <span>REST APIs</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* =================================================
          STATS
      ================================================= */}

      <div className="about-stats">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="about-stat-card"
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -12,
              scale: 1.025,
            }}
          >
            {/* Glow */}

            <div
              className="stat-glow"
              style={{
                background: stat.color,
              }}
            />

            {/* Icon */}

            <motion.div
              className="stat-icon"
              style={{
                color: stat.color,
              }}
              whileHover={{
                rotate: [0, -10, 10, 0],

                scale: 1.15,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {stat.icon}
            </motion.div>

            <h3>{stat.label}</h3>

            <p>{stat.sub}</p>

            {/* Bottom line */}

            <div
              className="stat-line"
              style={{
                background: stat.color,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

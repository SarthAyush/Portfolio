import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  Sparkles,
  Database,
  ShoppingBag,
  
  Trophy,
  Bot,
  ArrowUpRight,
  Zap,
  Layers3,
  CheckCircle2,
} from "lucide-react";
import "../styles/Projects.css";

const Projects = () => {
  /* =====================================================
     PROJECT DATA
  ===================================================== */

  const techTags = [
    {
      name: "Agentforce",
      icon: <Sparkles size={14} />,
    },
    {
      name: "Data Cloud",
      icon: <Database size={14} />,
    },
    {
      name: "Retail & Consumer Goods Cloud",
      icon: <ShoppingBag size={14} />,
    },
  ];

  const points = [
    "Developed an Agentforce-powered solution for a Retail & Consumer Goods Cloud use case focused on retail store expansion.",

    "Designed the solution to make the store expansion process more automated, seamless, and efficient.",

    "Leveraged Agentforce to enable intelligent automation and assist with business processes.",

    "Utilized Data Cloud to provide a unified data foundation for the solution.",
  ];


  /* =====================================================
     3D CARD MOUSE EFFECT
  ===================================================== */

  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const rotateX = useSpring(
    useTransform(
      mouseY,
      [-0.5, 0.5],
      [4, -4]
    ),
    {
      stiffness: 180,
      damping: 25,
    }
  );


  const rotateY = useSpring(
    useTransform(
      mouseX,
      [-0.5, 0.5],
      [-5, 5]
    ),
    {
      stiffness: 180,
      damping: 25,
    }
  );


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
    <section
      id="projects"
      className="projects-section"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="projects-bg-glow projects-glow-one" />

      <div className="projects-bg-glow projects-glow-two" />

      <div className="projects-grid" />

      {/* =================================================
          PARTICLES
      ================================================= */}

      <div className="projects-particles">

        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`project-particle project-particle-${i}`}
          />
        ))}

      </div>


      {/* =================================================
          SECTION HEADING
      ================================================= */}

      <motion.div
        className="projects-heading"

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

        <div className="projects-heading-badge">

          <Layers3 size={15} />

          <span>
            FEATURED WORK
          </span>

        </div>


        <h2>

          Featured{" "}

          <span>
            Project
          </span>

        </h2>


        <p>

          A Salesforce + AI solution built during
          the Agentforce Hackathon at
          Agentforce World Tour Mumbai.

        </p>

      </motion.div>


      {/* =================================================
          PROJECT CARD
      ================================================= */}

      <motion.div
        ref={cardRef}

        className="project-card"

        style={{
          rotateX,
          rotateY,
          transformPerspective: 1400,
        }}

        onMouseMove={handleMouseMove}

        onMouseLeave={handleMouseLeave}

        initial={{
          opacity: 0,
          y: 70,
          scale: 0.96,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        viewport={{
          once: true,
          amount: 0.15,
        }}

        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        {/* =================================================
            ANIMATED BORDER
        ================================================= */}

        <div className="project-card-border" />


        {/* =================================================
            SPOTLIGHT
        ================================================= */}

        <div className="project-card-spotlight" />


        {/* =================================================
            PROJECT HEADER
        ================================================= */}

        <div className="project-header">

          {/* Decorative shapes */}

          <motion.div
            className="project-orb project-orb-one"

            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}

            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="project-orb project-orb-two"

            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* Rotating icon */}

          <motion.div
            className="project-main-icon"

            initial={{
              scale: 0,
              rotate: -30,
            }}

            whileInView={{
              scale: 1,
              rotate: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
              delay: 0.2,
            }}

            whileHover={{
              scale: 1.1,
              rotate: 8,
            }}
          >

            <Bot size={38} />

          </motion.div>


          {/* Hackathon badge */}

          <motion.div
            className="hackathon-badge"

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
              delay: 0.35,
            }}
          >

            <Trophy size={15} />

            <span>
              Hackathon Finalist
            </span>

          </motion.div>


          {/* Title */}

          <motion.h3

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
              delay: 0.3,
              duration: 0.6,
            }}
          >

            Agentforce Retail Store
            <span>
              Expansion Solution
            </span>

          </motion.h3>


          <p className="project-header-description">

            Intelligent automation for modern
            retail expansion powered by
            Salesforce AI.

          </p>


          {/* Tech tags */}

          <div className="project-tech-tags">

            {techTags.map((tag, i) => (

              <motion.div
                key={i}

                className="project-tech-tag"

                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay:
                    0.45 +
                    i * 0.1,
                }}

                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
              >

                {tag.icon}

                {tag.name}

              </motion.div>

            ))}

          </div>

        </div>


        {/* =================================================
            ARCHITECTURE STRIP
        ================================================= */}

        <div className="project-architecture">

          <div className="architecture-node">

            <Database size={17} />

            <span>
              Data Cloud
            </span>

          </div>


          <div className="architecture-line">

            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

          </div>


          <div className="architecture-node">

            <Sparkles size={17} />

            <span>
              Agentforce
            </span>

          </div>


          <div className="architecture-line">

            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />

          </div>


          <div className="architecture-node">

            <ShoppingBag size={17} />

            <span>
              Retail Expansion
            </span>

          </div>

        </div>


        {/* =================================================
            PROJECT BODY
        ================================================= */}

        <div className="project-body">

          <div className="project-body-heading">

            <div>

              <span>
                THE SOLUTION
              </span>

              <h4>
                Built for intelligent automation
              </h4>

            </div>


            <div className="project-status">

              <span />

              Live Concept

            </div>

          </div>


          {/* Points */}

          <div className="project-points">

            {points.map((point, i) => (

              <motion.div
                key={i}

                className="project-point"

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay:
                    i * 0.1,
                }}
              >

                <div className="project-point-number">

                  {String(i + 1).padStart(2, "0")}

                </div>


                <div className="project-point-icon">

                  <CheckCircle2 size={16} />

                </div>


                <p>
                  {point}
                </p>

              </motion.div>

            ))}

          </div>


          {/* =================================================
              CTA
          ================================================= */}

          <div className="project-footer">

            <div className="project-footer-tech">

              <Zap size={16} />

              <span>
                Salesforce
              </span>

              <span>×</span>

              <span>
                AI
              </span>

            </div>


            <motion.a
              href="https://trailblazer.me/id/sarthaksaxena2004"
              target="_blank"
              rel="noopener noreferrer"

              className="project-cta"

              whileHover={{
                scale: 1.04,
                x: 4,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >

              <span>
                View Trailblazer Profile
              </span>

              <ArrowUpRight
                size={18}
              />

            </motion.a>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default Projects;

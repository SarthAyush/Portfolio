import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Wrench,
  Sparkles,
  Zap,
 
} from "lucide-react";
import "../styles/Skills.css";

const Skills = () => {
  const skillGroups = [
    {
      title: "Salesforce",
      subtitle: "CRM & Cloud Development",
      icon: <Cloud size={25} />,
      color: "#0176d3",
      items: [
        "Apex",
        "LWC",
        "Flows",
        "Agentforce",
        "Data Cloud",
        "REST APIs",
        "B2C Commerce",
        "Lightning App Builder",
      ],
    },
    {
      title: "Programming",
      subtitle: "Development & Problem Solving",
      icon: <Code2 size={25} />,
      color: "#5867e8",
      items: [
        "Java",
        "JavaScript",
        "Python",
        "SQL",
        "DSA",
      ],
    },
    {
      title: "Tools & Concepts",
      subtitle: "Engineering & Architecture",
      icon: <Wrench size={25} />,
      color: "#ff5a36",
      items: [
        "Git",
        "VS Code",
        "Data Modeling",
        "DB Optimization",
        "Automation",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="skills-glow skills-glow-one" />
      <div className="skills-glow skills-glow-two" />

      <div className="skills-grid-background" />


      {/* ==================================================
          FLOATING PARTICLES
      ================================================== */}

      <div className="skills-particles">

        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`skills-particle skills-particle-${i}`}
          />
        ))}

      </div>


      {/* ==================================================
          HEADING
      ================================================== */}

      <motion.div
        className="skills-heading"

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

        <div className="skills-badge">

          <Sparkles size={15} />

          <span>
            MY TOOLKIT
          </span>

        </div>


        <h2>

          Skills{" "}

          <span>
            & Expertise
          </span>

        </h2>


        <p>
          Technologies and tools I use to build scalable
          Salesforce solutions, intelligent automation,
          and modern applications.
        </p>

      </motion.div>


      {/* ==================================================
          SKILL CARDS
      ================================================== */}

      <div className="skills-container">

        {skillGroups.map((group, gi) => (

          <motion.div
            key={gi}
            className="skill-category"

            initial={{
              opacity: 0,
              y: 60,
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
              duration: 0.75,
              delay: gi * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}

            whileHover={{
              y: -8,
            }}

            style={{
              "--category-color": group.color,
            }}
          >

            {/* ==========================================
                CARD GLOW
            =========================================== */}

            <div className="skill-card-glow" />


            {/* ==========================================
                TOP LINE
            =========================================== */}

            <div className="skill-card-top-line" />


            {/* ==========================================
                HEADER
            =========================================== */}

            <div className="skill-category-header">

              <motion.div
                className="skill-category-icon"

                whileHover={{
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                }}

                transition={{
                  duration: 0.5,
                }}
              >
                {group.icon}
              </motion.div>


              <div className="skill-category-title">

                <h3>
                  {group.title}
                </h3>

                <p>
                  {group.subtitle}
                </p>

              </div>


              <div className="skill-category-number">
                0{gi + 1}
              </div>

            </div>


            {/* ==========================================
                ENERGY BAR
            =========================================== */}

            <div className="skill-energy">

              <motion.div
                initial={{
                  width: "0%",
                }}

                whileInView={{
                  width:
                    gi === 0
                      ? "92%"
                      : gi === 1
                        ? "82%"
                        : "76%",
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 1.4,
                  delay:
                    gi * 0.15 + 0.4,
                  ease: "easeOut",
                }}

                className="skill-energy-fill"
              />

            </div>


            {/* ==========================================
                SKILLS
            =========================================== */}

            <div className="skill-pills">

              {group.items.map((item, i) => (

                <motion.div
                  key={i}

                  className="skill-pill"

                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 10,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    delay:
                      gi * 0.15 +
                      0.45 +
                      i * 0.06,
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}

                  whileHover={{
                    scale: 1.07,
                    y: -4,
                  }}
                >

                  <span className="skill-pill-dot" />

                  <span>
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>


            {/* ==========================================
                FOOTER
            =========================================== */}

            <div className="skill-category-footer">

              <span>
                {group.items.length} Technologies
              </span>

              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}

                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              >
                →
              </motion.div>

            </div>

          </motion.div>

        ))}

      </div>


      {/* ==================================================
          BOTTOM TECH STRIP
      ================================================== */}

      <motion.div
        className="skills-tech-strip"

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
          delay: 0.3,
        }}
      >

        <div className="tech-strip-icon">
          <Zap size={17} />
        </div>

        <span>
          Building with
        </span>

        <strong>
          Salesforce
        </strong>

        <span>+</span>

        <strong>
          AI
        </strong>

        <span>+</span>

        <strong>
          Modern Development
        </strong>

      </motion.div>

    </section>
  );
};

export default Skills;

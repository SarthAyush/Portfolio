import React from "react";
import { motion } from "framer-motion";
import { Cloud, Sparkles, Zap } from "lucide-react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="loader-glow loader-glow-one" />
      <div className="loader-glow loader-glow-two" />

      <div className="loader-grid" />


      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="loader-particles">

        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`loader-particle loader-particle-${i}`}
          />
        ))}

      </div>


      {/* =====================================================
          MAIN LOADER
      ===================================================== */}

      <div className="loader-content">

        {/* Outer rotating ring */}

        <motion.div
          className="loader-ring loader-ring-one"

          animate={{
            rotate: 360,
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        {/* Second rotating ring */}

        <motion.div
          className="loader-ring loader-ring-two"

          animate={{
            rotate: -360,
          }}

          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        {/* Center */}

        <motion.div
          className="loader-center"

          initial={{
            scale: 0,
            opacity: 0,
          }}

          animate={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 180,
            damping: 15,
          }}
        >

          <motion.div
            animate={{
              y: [0, -7, 0],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <Cloud
              size={42}
              strokeWidth={1.7}
            />

          </motion.div>


          {/* Sparkles */}

          <motion.div
            className="loader-sparkle loader-sparkle-one"

            animate={{
              scale: [0.7, 1.2, 0.7],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 20, 0],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <Sparkles size={15} />

          </motion.div>


          <motion.div
            className="loader-sparkle loader-sparkle-two"

            animate={{
              scale: [1, 0.6, 1],
              opacity: [1, 0.3, 1],
            }}

            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <Zap size={12} />

          </motion.div>

        </motion.div>


        {/* ===================================================
            TEXT
        =================================================== */}

        <motion.div
          className="loader-text"

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >

          <h2>
            Sarthak Saxena
          </h2>


          <div className="loader-status">

            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
              }}

              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            />

            Initializing Portfolio

          </div>

        </motion.div>


        {/* ===================================================
            PROGRESS
        =================================================== */}

        <motion.div
          className="loader-progress"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.5,
          }}
        >

          <motion.div
            className="loader-progress-bar"

            initial={{
              width: "0%",
            }}

            animate={{
              width: "100%",
            }}

            transition={{
              duration: 2.2,
              ease: [0.65, 0, 0.35, 1],
            }}
          />

        </motion.div>


        <motion.p
          className="loader-subtitle"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.7,
          }}
        >

          Salesforce Developer • Trailblazer • AI Enthusiast

        </motion.p>

      </div>


      {/* =====================================================
          BOTTOM BRANDING
      ===================================================== */}

      <motion.div
        className="loader-bottom"

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 0.8,
        }}
      >

        <span>
          POWERED BY
        </span>

        <strong>
          REACT
        </strong>

        <i>
          ×
        </i>

        <strong>
          SALESFORCE
        </strong>

        <i>
          ×
        </i>

        <strong>
          AI
        </strong>

      </motion.div>

    </motion.div>
  );
};

export default Loader;

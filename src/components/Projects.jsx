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


  const handleMouseMove = (e) => {

    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (e.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };


  const handleMouseLeave = () => {

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

        {[...Array(18)].map((_, i) => (

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


/* =========================================================
   CSS
========================================================= */

const style =
  document.createElement("style");

style.innerHTML = `

/* =========================================================
   SECTION
========================================================= */

.projects-section {

  position:
    relative;

  width:
    100%;

  padding:
    8rem 2rem;

  overflow:
    hidden;

  background:
    var(--sf-cloud-white);

  isolation:
    isolate;

}


/* =========================================================
   BACKGROUND
========================================================= */

.projects-bg-glow {

  position:
    absolute;

  width:
    500px;

  height:
    500px;

  border-radius:
    50%;

  filter:
    blur(120px);

  opacity:
    .08;

  pointer-events:
    none;

}


.projects-glow-one {

  top:
    5%;

  left:
    -300px;

  background:
    #0176d3;

}


.projects-glow-two {

  bottom:
    5%;

  right:
    -300px;

  background:
    #5867e8;

}


.projects-grid {

  position:
    absolute;

  inset:
    0;

  background-image:

    linear-gradient(
      rgba(1,118,211,.025) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(1,118,211,.025) 1px,
      transparent 1px
    );

  background-size:
    50px 50px;

  mask-image:
    linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );

  pointer-events:
    none;

}


/* =========================================================
   PARTICLES
========================================================= */

.projects-particles {

  position:
    absolute;

  inset:
    0;

  pointer-events:
    none;

}


.project-particle {

  position:
    absolute;

  width:
    3px;

  height:
    3px;

  border-radius:
    50%;

  background:
    #0176d3;

  opacity:
    .2;

  animation:
    projectParticleFloat
    7s
    ease-in-out
    infinite;

}


.project-particle-0 { left: 5%; top: 15%; }
.project-particle-1 { left: 12%; top: 75%; animation-delay: 1s; }
.project-particle-2 { left: 20%; top: 30%; animation-delay: 2s; }
.project-particle-3 { left: 28%; top: 85%; animation-delay: 3s; }
.project-particle-4 { left: 37%; top: 10%; animation-delay: 1.5s; }
.project-particle-5 { left: 45%; top: 70%; animation-delay: 2.5s; }
.project-particle-6 { left: 55%; top: 20%; animation-delay: 4s; }
.project-particle-7 { left: 63%; top: 85%; animation-delay: 1s; }
.project-particle-8 { left: 72%; top: 35%; animation-delay: 2s; }
.project-particle-9 { left: 80%; top: 75%; animation-delay: 3s; }
.project-particle-10 { left: 88%; top: 15%; animation-delay: 4s; }
.project-particle-11 { left: 94%; top: 60%; animation-delay: 1.5s; }
.project-particle-12 { left: 15%; top: 50%; animation-delay: 2.5s; }
.project-particle-13 { left: 32%; top: 45%; animation-delay: 3.5s; }
.project-particle-14 { left: 50%; top: 50%; animation-delay: 1.5s; }
.project-particle-15 { left: 68%; top: 55%; animation-delay: 2.5s; }
.project-particle-16 { left: 84%; top: 45%; animation-delay: 3s; }
.project-particle-17 { left: 97%; top: 88%; animation-delay: 4s; }


@keyframes projectParticleFloat {

  0%, 100% {

    transform:
      translateY(0)
      scale(1);

    opacity:
      .1;

  }

  50% {

    transform:
      translateY(-25px)
      scale(1.8);

    opacity:
      .6;

  }

}


/* =========================================================
   HEADING
========================================================= */

.projects-heading {

  position:
    relative;

  z-index:
    2;

  text-align:
    center;

  margin-bottom:
    4.5rem;

}


.projects-heading-badge {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    7px;

  padding:
    7px 14px;

  border-radius:
    999px;

  background:
    rgba(1,118,211,.07);

  border:
    1px solid
    rgba(1,118,211,.14);

  color:
    var(--sf-blue);

  font-size:
    .7rem;

  font-weight:
    800;

  letter-spacing:
    1.5px;

  margin-bottom:
    1.3rem;

}


.projects-heading h2 {

  margin:
    0;

  color:
    var(--sf-blue-dark);

  font-size:
    clamp(
      2.4rem,
      5vw,
      4rem
    );

  font-weight:
    900;

  letter-spacing:
    -2px;

  line-height:
    1;

}


.projects-heading h2 span {

  background:
    linear-gradient(
      100deg,
      #0176d3,
      #00a1e0,
      #5867e8,
      #0176d3
    );

  background-size:
    250% auto;

  -webkit-background-clip:
    text;

  -webkit-text-fill-color:
    transparent;

  animation:
    projectHeadingGradient
    5s
    linear
    infinite;

}


@keyframes projectHeadingGradient {

  to {

    background-position:
      250% center;

  }

}


.projects-heading p {

  max-width:
    680px;

  margin:
    1.3rem auto 0;

  color:
    var(--sf-text-gray);

  font-size:
    1rem;

  line-height:
    1.8;

}


/* =========================================================
   PROJECT CARD
========================================================= */

.project-card {

  position:
    relative;

  z-index:
    2;

  width:
    100%;

  max-width:
    1250px;

  margin:
    0 auto;

  overflow:
    hidden;

  border-radius:
    28px;

  background:
    var(--sf-card-bg);

  border:
    1px solid
    rgba(1,118,211,.12);

  box-shadow:
    0 25px 80px
    rgba(0,50,100,.1);

  transform-style:
    preserve-3d;

  transition:
    box-shadow .4s ease,
    border-color .4s ease;

}


.project-card:hover {

  border-color:
    rgba(1,118,211,.25);

  box-shadow:
    0 35px 100px
    rgba(1,118,211,.15);

}


/* =========================================================
   CARD BORDER
========================================================= */

.project-card-border {

  position:
    absolute;

  inset:
    0;

  z-index:
    10;

  border-radius:
    inherit;

  pointer-events:
    none;

  border:
    1px solid
    transparent;

  background:
    linear-gradient(
      120deg,
      transparent,
      rgba(27,150,255,.35),
      transparent
    )
    border-box;

  mask:
    linear-gradient(#000 0 0)
    padding-box,
    linear-gradient(#000 0 0);

  mask-composite:
    exclude;

  opacity:
    .5;

}


/* =========================================================
   SPOTLIGHT
========================================================= */

.project-card-spotlight {

  position:
    absolute;

  width:
    450px;

  height:
    450px;

  right:
    -200px;

  top:
    -250px;

  border-radius:
    50%;

  background:
    rgba(27,150,255,.12);

  filter:
    blur(70px);

  pointer-events:
    none;

}


/* =========================================================
   PROJECT HEADER
========================================================= */

.project-header {

  position:
    relative;

  overflow:
    hidden;

  padding:
    3.5rem 4rem;

  color:
    white;

  background:
    linear-gradient(
      135deg,
      #032d60 0%,
      #0176d3 50%,
      #5867e8 100%
    );

}


/* =========================================================
   HEADER ORBS
========================================================= */

.project-orb {

  position:
    absolute;

  border-radius:
    50%;

  filter:
    blur(10px);

  pointer-events:
    none;

}


.project-orb-one {

  width:
    350px;

  height:
    350px;

  right:
    -150px;

  top:
    -180px;

  background:
    rgba(255,255,255,.12);

}


.project-orb-two {

  width:
    250px;

  height:
    250px;

  left:
    -130px;

  bottom:
    -160px;

  background:
    rgba(0,161,224,.3);

}


/* =========================================================
   MAIN ICON
========================================================= */

.project-main-icon {

  position:
    relative;

  width:
    72px;

  height:
    72px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    20px;

  background:
    rgba(255,255,255,.13);

  border:
    1px solid
    rgba(255,255,255,.25);

  backdrop-filter:
    blur(12px);

  box-shadow:
    0 15px 35px
    rgba(0,0,0,.15);

  margin-bottom:
    1.3rem;

}


/* =========================================================
   HACKATHON BADGE
========================================================= */

.hackathon-badge {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    7px;

  width:
    fit-content;

  padding:
    6px 12px;

  border:
    1px solid
    rgba(255,255,255,.2);

  border-radius:
    999px;

  background:
    rgba(255,255,255,.12);

  backdrop-filter:
    blur(10px);

  color:
    white;

  font-size:
    .7rem;

  font-weight:
    750;

  margin-bottom:
    1rem;

}


/* =========================================================
   HEADER TITLE
========================================================= */

.project-header h3 {

  position:
    relative;

  margin:
    0;

  max-width:
    850px;

  font-size:
    clamp(
      2rem,
      4vw,
      3.4rem
    );

  line-height:
    1.05;

  font-weight:
    900;

  letter-spacing:
    -1.5px;

}


.project-header h3 span {

  display:
    block;

  color:
    #7dd3fc;

}


.project-header-description {

  position:
    relative;

  max-width:
    650px;

  margin:
    1.2rem 0 1.7rem;

  color:
    rgba(255,255,255,.75);

  font-size:
    .95rem;

  line-height:
    1.7;

}


/* =========================================================
   TECH TAGS
========================================================= */

.project-tech-tags {

  position:
    relative;

  display:
    flex;

  flex-wrap:
    wrap;

  gap:
    .6rem;

}


.project-tech-tag {

  display:
    flex;

  align-items:
    center;

  gap:
    6px;

  padding:
    .5rem .8rem;

  border-radius:
    10px;

  background:
    rgba(255,255,255,.1);

  border:
    1px solid
    rgba(255,255,255,.18);

  color:
    white;

  font-size:
    .7rem;

  font-weight:
    650;

  backdrop-filter:
    blur(10px);

}


/* =========================================================
   ARCHITECTURE
========================================================= */

.project-architecture {

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    .8rem;

  padding:
    1.2rem 2rem;

  background:
    rgba(1,118,211,.035);

  border-bottom:
    1px solid
    rgba(1,118,211,.08);

}


.architecture-node {

  display:
    flex;

  align-items:
    center;

  gap:
    7px;

  padding:
    .55rem .8rem;

  border-radius:
    10px;

  background:
    var(--sf-card-bg);

  border:
    1px solid
    rgba(1,118,211,.12);

  color:
    var(--sf-text-dark);

  font-size:
    .7rem;

  font-weight:
    700;

  white-space:
    nowrap;

}


.architecture-node svg {

  color:
    var(--sf-blue);

}


.architecture-line {

  position:
    relative;

  width:
    55px;

  height:
    2px;

  overflow:
    hidden;

  background:
    rgba(1,118,211,.12);

}


.architecture-line div {

  width:
    35px;

  height:
    100%;

  background:
    var(--sf-blue);

  box-shadow:
    0 0 8px
    var(--sf-blue);

}


/* =========================================================
   PROJECT BODY
========================================================= */

.project-body {

  padding:
    2.5rem 4rem;

}


.project-body-heading {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    flex-end;

  gap:
    1rem;

  margin-bottom:
    2rem;

}


.project-body-heading span {

  color:
    var(--sf-blue);

  font-size:
    .68rem;

  font-weight:
    800;

  letter-spacing:
    1.5px;

}


.project-body-heading h4 {

  margin:
    .4rem 0 0;

  color:
    var(--sf-text-dark);

  font-size:
    1.5rem;

  font-weight:
    800;

}


/* =========================================================
   STATUS
========================================================= */

.project-status {

  display:
    flex;

  align-items:
    center;

  gap:
    7px;

  padding:
    6px 10px;

  border-radius:
    999px;

  background:
    rgba(4,132,75,.07);

  color:
    var(--sf-green);

  font-size:
    .68rem;

  font-weight:
    700;

}


.project-status span {

  width:
    7px;

  height:
    7px;

  border-radius:
    50%;

  background:
    var(--sf-green);

  box-shadow:
    0 0 8px
    var(--sf-green);

  animation:
    projectStatusPulse
    1.8s
    infinite;

}


@keyframes projectStatusPulse {

  50% {
    opacity:
      .3;

    transform:
      scale(.7);
  }

}


/* =========================================================
   POINTS
========================================================= */

.project-points {

  display:
    grid;

  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );

  gap:
    1rem;

}


.project-point {

  display:
    grid;

  grid-template-columns:
    30px
    32px
    1fr;

  align-items:
    start;

  gap:
    .6rem;

  padding:
    1rem;

  border-radius:
    14px;

  background:
    rgba(1,118,211,.025);

  border:
    1px solid
    rgba(1,118,211,.07);

  transition:
    transform .3s ease,
    border-color .3s ease,
    background .3s ease;

}


.project-point:hover {

  transform:
    translateY(-3px);

  border-color:
    rgba(1,118,211,.2);

  background:
    rgba(1,118,211,.05);

}


.project-point-number {

  color:
    var(--sf-blue);

  font-size:
    .65rem;

  font-weight:
    800;

  opacity:
    .5;

  padding-top:
    3px;

}


.project-point-icon {

  width:
    30px;

  height:
    30px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    9px;

  color:
    var(--sf-green);

  background:
    rgba(4,132,75,.08);

}


.project-point p {

  margin:
    0;

  color:
    var(--sf-text-gray);

  font-size:
    .78rem;

  line-height:
    1.7;

}


/* =========================================================
   FOOTER
========================================================= */

.project-footer {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  gap:
    1rem;

  margin-top:
    2rem;

  padding-top:
    1.5rem;

  border-top:
    1px solid
    rgba(1,118,211,.1);

}


.project-footer-tech {

  display:
    flex;

  align-items:
    center;

  gap:
    .5rem;

  color:
    var(--sf-text-gray);

  font-size:
    .72rem;

  font-weight:
    700;

}


.project-footer-tech svg {

  color:
    var(--sf-orange);

}


.project-cta {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    7px;

  padding:
    .75rem 1.1rem;

  border-radius:
    999px;

  color:
    white;

  background:
    var(--sf-blue);

  text-decoration:
    none;

  font-size:
    .75rem;

  font-weight:
    750;

  box-shadow:
    0 10px 25px
    rgba(1,118,211,.2);

}


/* =========================================================
   DARK MODE
========================================================= */

[data-theme="dark"]
.project-card {

  background:
    var(--sf-card-bg);

  border-color:
    rgba(27,150,255,.14);

}


[data-theme="dark"]
.architecture-node {

  background:
    #10243a;

}


[data-theme="dark"]
.project-point {

  background:
    rgba(27,150,255,.04);

}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 900px) {

  .project-header {

    padding:
      3rem;

  }

  .project-body {

    padding:
      2.5rem 3rem;

  }

}


@media (max-width: 750px) {

  .projects-section {

    padding:
      5rem 1rem;

  }


  .projects-heading {

    margin-bottom:
      3rem;

  }


  .project-card {

    border-radius:
      20px;

  }


  .project-header {

    padding:
      2.5rem 1.5rem;

  }


  .project-header h3 {

    font-size:
      2rem;

  }


  .project-tech-tags {

    flex-direction:
      column;

    align-items:
      flex-start;

  }


  .project-architecture {

    flex-direction:
      column;

    padding:
      1.3rem;

  }


  .architecture-line {

    width:
      2px;

    height:
      25px;

  }


  .architecture-line div {

    width:
      100%;

    height:
      12px;

  }


  .project-body {

    padding:
      2rem 1.3rem;

  }


  .project-points {

    grid-template-columns:
      1fr;

  }


  .project-body-heading {

    align-items:
      flex-start;

    flex-direction:
      column;

  }


  .project-footer {

    flex-direction:
      column;

    align-items:
      stretch;

  }


  .project-cta {

    justify-content:
      center;

  }

}


@media (prefers-reduced-motion: reduce) {

  .projects-section *,
  .projects-section *::before,
  .projects-section *::after {

    animation-duration:
      .01ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      .01ms !important;

  }

}

`;

document.head.appendChild(style);

export default Projects;
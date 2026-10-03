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


/* =========================================================
   CSS
========================================================= */

const style = document.createElement("style");

style.innerHTML = `

/* =========================================================
   HERO
========================================================= */

.hero-section {

  position: relative;

  min-height: 100vh;

  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  text-align: center;

  overflow: hidden;

  padding:
    7rem 2rem 5rem;

  background:
    radial-gradient(
      circle at 50% 20%,
      rgba(27,150,255,.35),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #020f26 0%,
      #032d60 30%,
      #0176d3 65%,
      #0b8de3 100%
    );

  isolation: isolate;

}


/* =========================================================
   GRID
========================================================= */

.hero-grid {

  position: absolute;

  inset: 0;

  background-image:

    linear-gradient(
      rgba(255,255,255,.035) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(255,255,255,.035) 1px,
      transparent 1px
    );

  background-size:
    55px 55px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent 90%
    );

  opacity: .7;

  pointer-events: none;

}


/* =========================================================
   AURORA
========================================================= */

.hero-aurora {

  position: absolute;

  border-radius: 50%;

  filter:
    blur(100px);

  pointer-events: none;

  mix-blend-mode:
    screen;

  animation:
    heroAuroraMove
    10s
    ease-in-out
    infinite;

}


.hero-aurora-one {

  width:
    500px;

  height:
    500px;

  background:
    rgba(0,161,224,.3);

  top:
    -200px;

  left:
    -100px;

}


.hero-aurora-two {

  width:
    450px;

  height:
    450px;

  background:
    rgba(88,103,232,.3);

  right:
    -180px;

  bottom:
    -100px;

  animation-delay:
    -3s;

}


.hero-aurora-three {

  width:
    300px;

  height:
    300px;

  background:
    rgba(27,150,255,.25);

  top:
    45%;

  left:
    50%;

  animation-delay:
    -5s;

}


@keyframes heroAuroraMove {

  0%, 100% {

    transform:
      translate(
        0,
        0
      )
      scale(1);

  }

  50% {

    transform:
      translate(
        40px,
        -30px
      )
      scale(1.15);

  }

}


/* =========================================================
   MOUSE SPOTLIGHT
========================================================= */

.hero-mouse-light {

  position: absolute;

  width:
    450px;

  height:
    450px;

  transform:
    translate(
      -50%,
      -50%
    );

  border-radius:
    50%;

  background:
    radial-gradient(
      circle,
      rgba(255,255,255,.08),
      transparent 65%
    );

  pointer-events:
    none;

  z-index:
    1;

}


/* =========================================================
   PARTICLES
========================================================= */

.hero-particles {

  position:
    absolute;

  inset:
    0;

  pointer-events:
    none;

}


.hero-particle {

  position:
    absolute;

  width:
    3px;

  height:
    3px;

  border-radius:
    50%;

  background:
    rgba(255,255,255,.75);

  opacity:
    .25;

  animation:
    heroParticleFloat
    6s
    ease-in-out
    infinite;

}


/* Particle positions */

.hero-particle-0 { left: 5%; top: 15%; }
.hero-particle-1 { left: 12%; top: 72%; animation-delay: 1s; }
.hero-particle-2 { left: 18%; top: 32%; animation-delay: 2s; }
.hero-particle-3 { left: 25%; top: 82%; animation-delay: 3s; }
.hero-particle-4 { left: 31%; top: 18%; animation-delay: 1.5s; }
.hero-particle-5 { left: 37%; top: 65%; animation-delay: 2.5s; }
.hero-particle-6 { left: 44%; top: 10%; animation-delay: 4s; }
.hero-particle-7 { left: 50%; top: 90%; animation-delay: 1s; }
.hero-particle-8 { left: 57%; top: 23%; animation-delay: 2s; }
.hero-particle-9 { left: 63%; top: 76%; animation-delay: 3s; }
.hero-particle-10 { left: 70%; top: 13%; animation-delay: 4s; }
.hero-particle-11 { left: 77%; top: 60%; animation-delay: 1.5s; }
.hero-particle-12 { left: 84%; top: 30%; animation-delay: 2.5s; }
.hero-particle-13 { left: 90%; top: 75%; animation-delay: 3.5s; }
.hero-particle-14 { left: 95%; top: 18%; animation-delay: 4s; }
.hero-particle-15 { left: 8%; top: 48%; animation-delay: 2s; }
.hero-particle-16 { left: 22%; top: 55%; animation-delay: 3s; }
.hero-particle-17 { left: 34%; top: 40%; animation-delay: 1s; }
.hero-particle-18 { left: 47%; top: 45%; animation-delay: 2.5s; }
.hero-particle-19 { left: 59%; top: 52%; animation-delay: 3.5s; }
.hero-particle-20 { left: 73%; top: 43%; animation-delay: 1.5s; }
.hero-particle-21 { left: 88%; top: 48%; animation-delay: 4s; }
.hero-particle-22 { left: 15%; top: 90%; animation-delay: 2.2s; }
.hero-particle-23 { left: 28%; top: 8%; animation-delay: 3.2s; }
.hero-particle-24 { left: 42%; top: 75%; animation-delay: 1.2s; }
.hero-particle-25 { left: 54%; top: 15%; animation-delay: 2.7s; }
.hero-particle-26 { left: 67%; top: 88%; animation-delay: 3.7s; }
.hero-particle-27 { left: 80%; top: 20%; animation-delay: 1.7s; }
.hero-particle-28 { left: 93%; top: 55%; animation-delay: 2.7s; }
.hero-particle-29 { left: 4%; top: 85%; animation-delay: 4.2s; }
.hero-particle-30 { left: 40%; top: 92%; animation-delay: 3.2s; }
.hero-particle-31 { left: 61%; top: 6%; animation-delay: 2.2s; }
.hero-particle-32 { left: 75%; top: 92%; animation-delay: 4.2s; }
.hero-particle-33 { left: 86%; top: 8%; animation-delay: 1.2s; }
.hero-particle-34 { left: 98%; top: 40%; animation-delay: 3.7s; }


@keyframes heroParticleFloat {

  0%, 100% {

    transform:
      translateY(0)
      scale(1);

    opacity:
      .15;

  }

  50% {

    transform:
      translateY(-25px)
      scale(1.8);

    opacity:
      .8;

  }

}


/* =========================================================
   CLOUDS
========================================================= */

.hero-cloud {

  position:
    absolute;

  color:
    white;

  opacity:
    .08;

  pointer-events:
    none;

}


.hero-cloud-0 {
  top: 12%;
  left: 5%;
}

.hero-cloud-1 {
  top: 25%;
  right: 8%;
}

.hero-cloud-2 {
  bottom: 20%;
  left: 8%;
}

.hero-cloud-3 {
  bottom: 12%;
  right: 5%;
}


/* =========================================================
   CONTENT
========================================================= */

.hero-content {

  position:
    relative;

  z-index:
    5;

  max-width:
    1000px;

  width:
    100%;

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

}


/* =========================================================
   BADGE
========================================================= */

.hero-badge {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    7px;

  padding:
    7px 14px;

  border:
    1px solid
    rgba(255,255,255,.2);

  border-radius:
    999px;

  background:
    rgba(255,255,255,.07);

  backdrop-filter:
    blur(12px);

  color:
    #dcefff;

  font-size:
    .68rem;

  font-weight:
    800;

  letter-spacing:
    1.5px;

  margin-bottom:
    1.7rem;

}


.hero-badge-dot {

  width:
    7px;

  height:
    7px;

  border-radius:
    50%;

  background:
    #4ade80;

  box-shadow:
    0 0 12px
    #4ade80;

  animation:
    heroStatusPulse
    1.8s
    infinite;

}


@keyframes heroStatusPulse {

  50% {
    opacity:
      .35;

    transform:
      scale(.7);
  }

}


/* =========================================================
   PROFILE
========================================================= */

.hero-profile {

  position:
    relative;

  width:
    180px;

  height:
    180px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  margin-bottom:
    1.8rem;

}


.hero-profile-ring {

  position:
    absolute;

  inset:
    -8px;

  border-radius:
    50%;

  background:
    conic-gradient(
      from 0deg,
      #ffffff,
      #1b96ff,
      transparent 45%,
      #00a1e0,
      #ffffff
    );

  filter:
    drop-shadow(
      0 0 20px
      rgba(27,150,255,.55)
    );

}


.hero-profile-image {

  position:
    relative;

  z-index:
    3;

  width:
    170px;

  height:
    170px;

  padding:
    5px;

  border-radius:
    50%;

  background:
    rgba(255,255,255,.95);

  overflow:
    hidden;

}


.hero-profile-image img {

  width:
    100%;

  height:
    100%;

  object-fit:
    cover;

  object-position:
    top;

  border-radius:
    50%;

}


.hero-profile-glow {

  position:
    absolute;

  width:
    220px;

  height:
    220px;

  border-radius:
    50%;

  background:
    rgba(27,150,255,.3);

  filter:
    blur(45px);

  z-index:
    0;

}


/* =========================================================
   TECH BADGES
========================================================= */

.hero-tech-badge {

  position:
    absolute;

  z-index:
    10;

  display:
    flex;

  align-items:
    center;

  gap:
    6px;

  padding:
    8px 12px;

  border:
    1px solid
    rgba(255,255,255,.2);

  border-radius:
    999px;

  background:
    rgba(3,45,96,.75);

  backdrop-filter:
    blur(12px);

  box-shadow:
    0 10px 30px
    rgba(0,0,0,.2);

  color:
    white;

  font-size:
    .68rem;

  font-weight:
    700;

}


.hero-salesforce-badge {

  right:
    -70px;

  top:
    20px;

  color:
    #d8efff;

}


.hero-ai-badge {

  left:
    -75px;

  bottom:
    15px;

  color:
    #e4e8ff;

}


/* =========================================================
   WELCOME
========================================================= */

.hero-welcome {

  color:
    #66c7ff;

  font-size:
    .75rem;

  font-weight:
    800;

  letter-spacing:
    3px;

  margin-bottom:
    .8rem;

}


/* =========================================================
   TITLE
========================================================= */

.hero-title {

  margin:
    0 0 1rem;

  color:
    white;

  font-size:
    clamp(
      2.8rem,
      7vw,
      5.8rem
    );

  font-weight:
    900;

  letter-spacing:
    -3px;

  line-height:
    1;

}


.hero-title span {

  display:
    block;

  margin-top:
    .2rem;

  background:
    linear-gradient(
      90deg,
      #ffffff,
      #66c7ff,
      #ffffff,
      #66c7ff
    );

  background-size:
    250% auto;

  -webkit-background-clip:
    text;

  -webkit-text-fill-color:
    transparent;

  animation:
    heroTitleGradient
    5s
    linear
    infinite;

}


@keyframes heroTitleGradient {

  to {

    background-position:
      250% center;

  }

}


/* =========================================================
   ROLE
========================================================= */

.hero-role {

  margin:
    0 0 .8rem;

  color:
    #d6edff;

  font-size:
    clamp(
      1.15rem,
      3vw,
      1.7rem
    );

  font-weight:
    500;

}


.hero-at {

  color:
    #66c7ff;

  margin:
    0 .35rem;

  font-weight:
    800;

}


/* =========================================================
   DESCRIPTION
========================================================= */

.hero-description {

  display:
    flex;

  flex-wrap:
    wrap;

  justify-content:
    center;

  gap:
    .45rem;

  color:
    #b8dbf5;

  font-size:
    .88rem;

  line-height:
    1.8;

  margin:
    0 0 1.2rem;

}


.hero-description span {

  color:
    #66c7ff;

}


/* =========================================================
   SKILLS
========================================================= */

.hero-skills {

  display:
    flex;

  flex-wrap:
    wrap;

  justify-content:
    center;

  gap:
    .6rem;

  margin-bottom:
    2rem;

}


.hero-skills div {

  display:
    flex;

  align-items:
    center;

  gap:
    6px;

  padding:
    7px 11px;

  border:
    1px solid
    rgba(255,255,255,.13);

  background:
    rgba(255,255,255,.06);

  backdrop-filter:
    blur(10px);

  border-radius:
    9px;

  color:
    #d7edff;

  font-size:
    .7rem;

  font-weight:
    650;

  transition:
    all .3s ease;

}


.hero-skills div:hover {

  background:
    rgba(255,255,255,.13);

  border-color:
    rgba(255,255,255,.3);

  transform:
    translateY(-3px);

}


/* =========================================================
   BUTTONS
========================================================= */

.hero-buttons {

  display:
    flex;

  flex-wrap:
    wrap;

  justify-content:
    center;

  gap:
    1rem;

}


.hero-btn {

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    8px;

  padding:
    .9rem 1.6rem;

  border-radius:
    999px;

  font-size:
    .9rem;

  font-weight:
    750;

  text-decoration:
    none;

  cursor:
    pointer;

  transition:
    box-shadow .3s ease,
    background .3s ease;

}


.hero-btn-primary {

  color:
    #032d60;

  background:
    white;

  box-shadow:
    0 10px 30px
    rgba(0,0,0,.18);

}


.hero-btn-primary:hover {

  box-shadow:
    0 15px 40px
    rgba(255,255,255,.25);

}


.hero-btn-secondary {

  color:
    white;

  background:
    rgba(255,255,255,.06);

  border:
    1px solid
    rgba(255,255,255,.4);

  backdrop-filter:
    blur(10px);

}


.hero-btn-secondary:hover {

  background:
    rgba(255,255,255,.14);

  border-color:
    white;

}


/* =========================================================
   SCROLL
========================================================= */

.hero-scroll {

  position:
    absolute;

  bottom:
    1.8rem;

  left:
    50%;

  transform:
    translateX(-50%);

  z-index:
    5;

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

  gap:
    5px;

  color:
    rgba(255,255,255,.6);

  text-decoration:
    none;

  font-size:
    .58rem;

  font-weight:
    700;

  letter-spacing:
    2px;

}


.hero-scroll:hover {

  color:
    white;

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 700px) {

  .hero-section {

    padding:
      6rem 1rem 5rem;

  }


  .hero-title {

    font-size:
      clamp(
        2.6rem,
        13vw,
        4rem
      );

    letter-spacing:
      -2px;

  }


  .hero-profile {

    width:
      145px;

    height:
      145px;

  }


  .hero-profile-image {

    width:
      135px;

    height:
      135px;

  }


  .hero-profile-ring {

    inset:
      -6px;

  }


  .hero-tech-badge {

    font-size:
      .58rem;

    padding:
      6px 9px;

  }


  .hero-salesforce-badge {

    right:
      -55px;

  }


  .hero-ai-badge {

    left:
      -55px;

  }


  .hero-role {

    font-size:
      1.05rem;

  }


  .hero-description {

    font-size:
      .78rem;

    max-width:
      350px;

  }


  .hero-buttons {

    flex-direction:
      column;

    width:
      100%;

    max-width:
      280px;

  }


  .hero-btn {

    width:
      100%;

  }


  .hero-cloud {

    opacity:
      .04;

  }


  .hero-scroll {

    display:
      none;

  }

}


@media (prefers-reduced-motion: reduce) {

  .hero-section *,
  .hero-section *::before,
  .hero-section *::after {

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

export default Hero;
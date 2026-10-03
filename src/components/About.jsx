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

/* =========================================================
   COMPONENT CSS
========================================================= */

const style = document.createElement("style");

style.innerHTML = `

/* =========================================================
   BACKGROUND
========================================================= */

.about-bg-glow {

  position: absolute;

  width: 450px;
  height: 450px;

  border-radius: 50%;

  filter: blur(110px);

  opacity: .10;

  pointer-events: none;
}


.about-glow-one {

  top: 5%;
  left: -300px;

  background: #0176d3;

}


.about-glow-two {

  bottom: 10%;
  right: -300px;

  background: #5867e8;

}


/* =========================================================
   GRID
========================================================= */

.about-grid-pattern {

  position: absolute;

  inset: 0;

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
    45px 45px;

  mask-image:
    linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );

  pointer-events: none;
}


/* =========================================================
   PARTICLES
========================================================= */

.about-particles {

  position: absolute;

  inset: 0;

  pointer-events: none;

}


.about-particle {

  position: absolute;

  width: 3px;
  height: 3px;

  border-radius: 50%;

  background:
    #0176d3;

  opacity: .3;

  animation:
    aboutFloat
    6s
    ease-in-out
    infinite;

}


.about-particle-0 {
  left: 7%;
  top: 15%;
}

.about-particle-1 {
  left: 20%;
  top: 70%;
  animation-delay: 1s;
}

.about-particle-2 {
  left: 35%;
  top: 12%;
  animation-delay: 2s;
}

.about-particle-3 {
  left: 48%;
  top: 85%;
  animation-delay: 3s;
}

.about-particle-4 {
  left: 62%;
  top: 20%;
  animation-delay: 1.5s;
}

.about-particle-5 {
  left: 75%;
  top: 70%;
  animation-delay: 2.5s;
}

.about-particle-6 {
  left: 90%;
  top: 30%;
  animation-delay: 4s;
}

.about-particle-7 {
  left: 12%;
  top: 90%;
  animation-delay: 2s;
}

.about-particle-8 {
  left: 28%;
  top: 45%;
  animation-delay: 3s;
}

.about-particle-9 {
  left: 68%;
  top: 45%;
  animation-delay: 1s;
}

.about-particle-10 {
  left: 83%;
  top: 15%;
  animation-delay: 4s;
}

.about-particle-11 {
  left: 55%;
  top: 65%;
  animation-delay: 2s;
}

.about-particle-12 {
  left: 42%;
  top: 35%;
  animation-delay: 3.5s;
}

.about-particle-13 {
  left: 93%;
  top: 80%;
  animation-delay: 1.5s;
}

.about-particle-14 {
  left: 5%;
  top: 55%;
  animation-delay: 2.5s;
}

.about-particle-15 {
  left: 80%;
  top: 90%;
  animation-delay: 3s;
}


@keyframes aboutFloat {

  0%, 100% {

    transform:
      translateY(0)
      scale(1);

    opacity: .15;

  }

  50% {

    transform:
      translateY(-25px)
      scale(1.8);

    opacity: .7;

  }

}


/* =========================================================
   HEADING
========================================================= */

.about-heading {

  position: relative;

  z-index: 2;

  text-align: center;

  margin-bottom: 4.5rem;

}


.about-heading-badge {

  display: inline-flex;

  align-items: center;

  gap: 7px;

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


.about-heading h2 {

  margin: 0;

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


.about-heading h2 span {

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
    aboutGradientText
    5s
    linear
    infinite;

}


@keyframes aboutGradientText {

  to {

    background-position:
      250% center;

  }

}


.about-heading p {

  max-width:
    650px;

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
   PROFILE CARD
========================================================= */

.about-profile {

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.92),
      rgba(245,250,255,.9)
    );

  border:
    1px solid
    rgba(1,118,211,.12);

  box-shadow:
    0 25px 80px
    rgba(0,50,100,.08);

  transform-style:
    preserve-3d;

  transition:
    box-shadow .4s ease,
    border-color .4s ease;

}


.about-profile:hover {

  border-color:
    rgba(1,118,211,.28);

  box-shadow:
    0 35px 100px
    rgba(1,118,211,.13);

}


/* =========================================================
   CARD BORDER
========================================================= */

.about-card-border {

  position:
    absolute;

  inset:
    0;

  border-radius:
    inherit;

  pointer-events:
    none;

  background:
    linear-gradient(
      120deg,
      transparent 20%,
      rgba(1,118,211,.45),
      transparent 80%
    );

  background-size:
    250% 250%;

  opacity:
    .25;

  animation:
    aboutBorderMove
    6s
    linear
    infinite;

}


@keyframes aboutBorderMove {

  0% {

    background-position:
      0% 50%;

  }

  100% {

    background-position:
      250% 50%;

  }

}


/* =========================================================
   SPOTLIGHT
========================================================= */

.about-card-spotlight {

  position:
    absolute;

  width:
    400px;

  height:
    400px;

  right:
    -200px;

  top:
    -200px;

  border-radius:
    50%;

  background:
    rgba(1,118,211,.08);

  filter:
    blur(60px);

  pointer-events:
    none;

}


/* =========================================================
   IMAGE
========================================================= */

.about-image-wrapper {

  position:
    relative;

  width:
    280px;

  height:
    280px;

  margin:
    0 auto;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

}


.image-gradient-ring {

  position:
    absolute;

  inset:
    -10px;

  border-radius:
    50%;

  background:
    conic-gradient(
      from 0deg,
      #0176d3,
      #00a1e0,
      #5867e8,
      transparent 45%,
      #0176d3
    );

  filter:
    drop-shadow(
      0 0 18px
      rgba(1,118,211,.3)
    );

}


.image-ring-inner {

  position:
    relative;

  width:
    270px;

  height:
    270px;

  border-radius:
    50%;

  padding:
    7px;

  background:
    white;

  z-index:
    2;

  overflow:
    hidden;

}


.image-ring-inner img {

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

  display:
    block;

}


/* =========================================================
   FLOATING BADGES
========================================================= */

.floating-tech-badge {

  position:
    absolute;

  z-index:
    5;

  display:
    flex;

  align-items:
    center;

  gap:
    6px;

  padding:
    8px 12px;

  background:
    rgba(255,255,255,.9);

  backdrop-filter:
    blur(10px);

  border:
    1px solid
    rgba(1,118,211,.12);

  border-radius:
    999px;

  box-shadow:
    0 10px 30px
    rgba(0,0,0,.08);

  font-size:
    .7rem;

  font-weight:
    750;

}


.badge-salesforce {

  right:
    -25px;

  top:
    30px;

  color:
    #0176d3;

}


.badge-ai {

  left:
    -25px;

  bottom:
    35px;

  color:
    #5867e8;

}


/* =========================================================
   CONTENT
========================================================= */

.about-content {

  position:
    relative;

  z-index:
    3;

}


.about-role {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    7px;

  color:
    var(--sf-blue);

  font-size:
    .75rem;

  font-weight:
    800;

  letter-spacing:
    1px;

  text-transform:
    uppercase;

  margin-bottom:
    1rem;

}


.about-content h3 {

  margin:
    0 0 1.2rem;

  font-size:
    clamp(
      2rem,
      4vw,
      3rem
    );

  line-height:
    1.1;

  color:
    var(--sf-text-dark);

  font-weight:
    900;

  letter-spacing:
    -1.5px;

}


.about-content h3 span {

  display:
    block;

  background:
    linear-gradient(
      90deg,
      #0176d3,
      #00a1e0,
      #5867e8
    );

  -webkit-background-clip:
    text;

  -webkit-text-fill-color:
    transparent;

}


.about-content p {

  color:
    var(--sf-text-gray);

  font-size:
    .98rem;

  line-height:
    1.85;

  margin:
    0 0 1rem;

}


/* =========================================================
   SKILLS
========================================================= */

.about-skills {

  display:
    flex;

  flex-wrap:
    wrap;

  gap:
    .55rem;

  margin-top:
    1.4rem;

}


.about-skills span {

  padding:
    7px 11px;

  border-radius:
    8px;

  background:
    rgba(1,118,211,.06);

  border:
    1px solid
    rgba(1,118,211,.1);

  color:
    var(--sf-blue);

  font-size:
    .7rem;

  font-weight:
    700;

  transition:
    all .3s ease;

}


.about-skills span:hover {

  background:
    var(--sf-blue);

  color:
    white;

  transform:
    translateY(-3px);

  box-shadow:
    0 8px 20px
    rgba(1,118,211,.2);

}


/* =========================================================
   STAT CARDS
========================================================= */

.about-stat-card {

  position:
    relative;

  overflow:
    hidden;

  padding:
    2rem 1.5rem;

  text-align:
    center;

  background:
    rgba(255,255,255,.82);

  backdrop-filter:
    blur(15px);

  border:
    1px solid
    rgba(1,118,211,.09);

  border-radius:
    20px;

  box-shadow:
    0 10px 35px
    rgba(0,50,100,.06);

  transition:
    border-color .35s ease,
    box-shadow .35s ease;

}


.about-stat-card:hover {

  border-color:
    rgba(1,118,211,.25);

  box-shadow:
    0 20px 50px
    rgba(1,118,211,.12);

}


.stat-glow {

  position:
    absolute;

  width:
    140px;

  height:
    140px;

  right:
    -70px;

  top:
    -70px;

  border-radius:
    50%;

  opacity:
    .07;

  filter:
    blur(25px);

  pointer-events:
    none;

}


.stat-icon {

  position:
    relative;

  width:
    65px;

  height:
    65px;

  margin:
    0 auto 1rem;

  border-radius:
    18px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  background:
    rgba(1,118,211,.06);

}


.about-stat-card h3 {

  position:
    relative;

  margin:
    0;

  color:
    var(--sf-text-dark);

  font-size:
    1.25rem;

  font-weight:
    800;

}


.about-stat-card p {

  position:
    relative;

  margin:
    .35rem 0 0;

  color:
    var(--sf-text-gray);

  font-size:
    .85rem;

}


.stat-line {

  position:
    absolute;

  left:
    20%;

  right:
    20%;

  bottom:
    0;

  height:
    3px;

  border-radius:
    10px;

  transform:
    scaleX(.3);

  transform-origin:
    center;

  transition:
    transform .4s ease;

}


.about-stat-card:hover .stat-line {

  transform:
    scaleX(1);

}


/* =========================================================
   RESPONSIVE PROFILE
========================================================= */

@media (max-width: 850px) {

  .about-profile-inner {

    grid-template-columns:
      1fr;

    gap:
      2.5rem;

    text-align:
      center;

  }


  .about-image-wrapper {

    width:
      240px;

    height:
      240px;

  }


  .image-ring-inner {

    width:
      230px;

    height:
      230px;

  }


  .about-skills {

    justify-content:
      center;

  }


  .about-role {

    justify-content:
      center;

  }


  .about-content h3 span {

    display:
      inline;

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .about-heading {

    margin-bottom:
      3rem;

  }


  .about-heading h2 {

    letter-spacing:
      -1px;

  }


  .about-profile-inner {

    padding:
      2rem 1.3rem;

  }


  .about-stats {

    grid-template-columns:
      1fr;

  }


  .about-profile {

    border-radius:
      20px;

  }


  .badge-salesforce {

    right:
      -10px;

  }


  .badge-ai {

    left:
      -10px;

  }

}


/* =========================================================
   DARK MODE CARD ADJUSTMENTS
========================================================= */

[data-theme="dark"] .about-profile {

  background:
    linear-gradient(
      145deg,
      rgba(22,40,63,.96),
      rgba(13,31,50,.96)
    );

  border-color:
    rgba(27,150,255,.16);

}


[data-theme="dark"] .about-stat-card {

  background:
    rgba(22,40,63,.82);

  border-color:
    rgba(27,150,255,.12);

}


[data-theme="dark"] .image-ring-inner {

  background:
    #16283f;

}


[data-theme="dark"] .floating-tech-badge {

  background:
    rgba(13,27,42,.9);

  border-color:
    rgba(27,150,255,.2);

}


[data-theme="dark"] .about-heading h2 {

  color:
    #e8f0fe;

}

`;

document.head.appendChild(style);

export default About;

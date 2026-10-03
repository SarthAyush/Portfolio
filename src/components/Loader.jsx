import React from "react";
import { motion } from "framer-motion";
import { Cloud, Sparkles, Zap } from "lucide-react";

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


/* =========================================================
   CSS
========================================================= */

const style = document.createElement("style");

style.innerHTML = `

/* =========================================================
   LOADER
========================================================= */

.loader {

  position:
    fixed;

  inset:
    0;

  z-index:
    9999;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  overflow:
    hidden;

  background:
    linear-gradient(
      135deg,
      #021f43 0%,
      #032d60 35%,
      #0176d3 72%,
      #1b96ff 100%
    );

  color:
    white;

  isolation:
    isolate;

}


/* =========================================================
   GLOW
========================================================= */

.loader-glow {

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

  pointer-events:
    none;

}


.loader-glow-one {

  top:
    -300px;

  left:
    -200px;

  background:
    rgba(27,150,255,.3);

}


.loader-glow-two {

  bottom:
    -300px;

  right:
    -200px;

  background:
    rgba(88,103,232,.25);

}


/* =========================================================
   GRID
========================================================= */

.loader-grid {

  position:
    absolute;

  inset:
    0;

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
    radial-gradient(
      circle at center,
      black 0%,
      transparent 70%
    );

  pointer-events:
    none;

}


/* =========================================================
   PARTICLES
========================================================= */

.loader-particles {

  position:
    absolute;

  inset:
    0;

  pointer-events:
    none;

}


.loader-particle {

  position:
    absolute;

  width:
    3px;

  height:
    3px;

  border-radius:
    50%;

  background:
    rgba(255,255,255,.7);

  animation:
    loaderParticleFloat
    5s
    ease-in-out
    infinite;

}


.loader-particle-0 {
  left: 7%;
  top: 18%;
}

.loader-particle-1 {
  left: 15%;
  top: 75%;
  animation-delay: .5s;
}

.loader-particle-2 {
  left: 24%;
  top: 30%;
  animation-delay: 1s;
}

.loader-particle-3 {
  left: 32%;
  top: 85%;
  animation-delay: 1.5s;
}

.loader-particle-4 {
  left: 42%;
  top: 12%;
  animation-delay: 2s;
}

.loader-particle-5 {
  left: 50%;
  top: 78%;
  animation-delay: 2.5s;
}

.loader-particle-6 {
  left: 58%;
  top: 20%;
  animation-delay: 3s;
}

.loader-particle-7 {
  left: 67%;
  top: 88%;
  animation-delay: 3.5s;
}

.loader-particle-8 {
  left: 75%;
  top: 32%;
  animation-delay: 1s;
}

.loader-particle-9 {
  left: 84%;
  top: 72%;
  animation-delay: 1.5s;
}

.loader-particle-10 {
  left: 92%;
  top: 18%;
  animation-delay: 2s;
}

.loader-particle-11 {
  left: 10%;
  top: 50%;
  animation-delay: 2.5s;
}

.loader-particle-12 {
  left: 20%;
  top: 92%;
  animation-delay: 3s;
}

.loader-particle-13 {
  left: 35%;
  top: 45%;
  animation-delay: 3.5s;
}

.loader-particle-14 {
  left: 65%;
  top: 48%;
  animation-delay: 1s;
}

.loader-particle-15 {
  left: 80%;
  top: 55%;
  animation-delay: 2s;
}

.loader-particle-16 {
  left: 90%;
  top: 90%;
  animation-delay: 2.5s;
}

.loader-particle-17 {
  left: 4%;
  top: 88%;
  animation-delay: 3s;
}

.loader-particle-18 {
  left: 47%;
  top: 5%;
  animation-delay: 3.5s;
}

.loader-particle-19 {
  left: 70%;
  top: 10%;
  animation-delay: 4s;
}


@keyframes loaderParticleFloat {

  0%, 100% {

    transform:
      translateY(0)
      scale(.7);

    opacity:
      .2;

  }

  50% {

    transform:
      translateY(-25px)
      scale(1.5);

    opacity:
      .8;

  }

}


/* =========================================================
   CONTENT
========================================================= */

.loader-content {

  position:
    relative;

  z-index:
    3;

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

  justify-content:
    center;

}


/* =========================================================
   RINGS
========================================================= */

.loader-ring {

  position:
    absolute;

  border-radius:
    50%;

  pointer-events:
    none;

}


.loader-ring-one {

  width:
    155px;

  height:
    155px;

  border:
    1px solid
    rgba(255,255,255,.25);

  border-top-color:
    #7dd3fc;

  border-right-color:
    transparent;

  box-shadow:
    0 0 25px
    rgba(125,211,252,.15);

}


.loader-ring-two {

  width:
    195px;

  height:
    195px;

  border:
    1px dashed
    rgba(255,255,255,.12);

}


.loader-ring-two::before {

  content:
    "";

  position:
    absolute;

  width:
    6px;

  height:
    6px;

  top:
    -3px;

  left:
    50%;

  transform:
    translateX(-50%);

  border-radius:
    50%;

  background:
    #7dd3fc;

  box-shadow:
    0 0 15px
    #7dd3fc;

}


/* =========================================================
   CENTER
========================================================= */

.loader-center {

  position:
    relative;

  width:
    105px;

  height:
    105px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    50%;

  color:
    white;

  background:
    radial-gradient(
      circle at 35% 30%,
      #1b96ff,
      #0176d3 55%,
      #032d60
    );

  border:
    2px solid
    rgba(255,255,255,.4);

  box-shadow:
    0 0 40px
    rgba(27,150,255,.4),

    inset 0 0 25px
    rgba(255,255,255,.1);

}


.loader-center::before {

  content:
    "";

  position:
    absolute;

  inset:
    7px;

  border-radius:
    50%;

  border:
    1px solid
    rgba(255,255,255,.15);

}


/* =========================================================
   SPARKLES
========================================================= */

.loader-sparkle {

  position:
    absolute;

  color:
    #7dd3fc;

}


.loader-sparkle-one {

  top:
    10px;

  right:
    2px;

}


.loader-sparkle-two {

  bottom:
    15px;

  left:
    5px;

  color:
    #fe9339;

}


/* =========================================================
   TEXT
========================================================= */

.loader-text {

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

  margin-top:
    2.8rem;

}


.loader-text h2 {

  margin:
    0;

  font-size:
    1.45rem;

  font-weight:
    800;

  letter-spacing:
    .5px;

}


.loader-status {

  display:
    flex;

  align-items:
    center;

  gap:
    7px;

  margin-top:
    .45rem;

  color:
    #b8ddfa;

  font-size:
    .7rem;

  letter-spacing:
    1px;

  text-transform:
    uppercase;

}


.loader-status span {

  width:
    6px;

  height:
    6px;

  border-radius:
    50%;

  background:
    #7dd3fc;

  box-shadow:
    0 0 10px
    #7dd3fc;

}


/* =========================================================
   PROGRESS
========================================================= */

.loader-progress {

  width:
    220px;

  height:
    3px;

  margin-top:
    1.3rem;

  overflow:
    hidden;

  border-radius:
    999px;

  background:
    rgba(255,255,255,.12);

}


.loader-progress-bar {

  height:
    100%;

  border-radius:
    inherit;

  background:
    linear-gradient(
      90deg,
      #7dd3fc,
      #1b96ff,
      white
    );

  box-shadow:
    0 0 12px
    rgba(125,211,252,.6);

}


/* =========================================================
   SUBTITLE
========================================================= */

.loader-subtitle {

  margin:
    .9rem 0 0;

  color:
    rgba(201,228,255,.55);

  font-size:
    .62rem;

  letter-spacing:
    .4px;

}


/* =========================================================
   BOTTOM
========================================================= */

.loader-bottom {

  position:
    absolute;

  z-index:
    3;

  bottom:
    1.8rem;

  left:
    50%;

  transform:
    translateX(-50%);

  display:
    flex;

  align-items:
    center;

  gap:
    7px;

  color:
    rgba(255,255,255,.35);

  font-size:
    .55rem;

  font-weight:
    700;

  letter-spacing:
    1.2px;

  white-space:
    nowrap;

}


.loader-bottom strong {

  color:
    rgba(255,255,255,.6);

}


.loader-bottom i {

  color:
    rgba(255,255,255,.2);

  font-style:
    normal;

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .loader-ring-one {

    width:
      135px;

    height:
      135px;

  }


  .loader-ring-two {

    width:
      170px;

    height:
      170px;

  }


  .loader-center {

    width:
      90px;

    height:
      90px;

  }


  .loader-progress {

    width:
      190px;

  }


  .loader-subtitle {

    font-size:
      .55rem;

  }


  .loader-bottom {

    bottom:
      1.2rem;

    font-size:
      .48rem;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .loader *,
  .loader *::before,
  .loader *::after {

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

export default Loader;
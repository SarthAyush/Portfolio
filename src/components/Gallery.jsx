import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  X,
  Mic,
  Award,
  Camera,
  Maximize2,
  ChevronRight,
  Sparkles,
} from "lucide-react";


/* =========================================================
   GALLERY LIGHTBOX
   Rendered directly inside <body> using React Portal.
   This prevents the navbar / gallery stacking context
   from hiding the close button.
========================================================= */

const GalleryLightbox = ({ selected, onClose }) => {

  /* =======================================================
     LOCK PAGE SCROLL
  ======================================================= */

  useEffect(() => {

    if (!selected) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        onClose();
      }

    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [selected, onClose]);


  if (!selected) {
    return null;
  }


  return createPortal(

    <AnimatePresence>

      <motion.div
        key="gallery-lightbox"

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        exit={{
          opacity: 0,
        }}

        transition={{
          duration: 0.25,
        }}

        onClick={onClose}

        style={{
          position: "fixed",

          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          width: "100vw",
          height: "100vh",

          zIndex: 2147483647,

          background:
            "rgba(2, 15, 38, 0.97)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          padding:
            "80px 30px 30px",

          boxSizing: "border-box",

          overflowY: "auto",

          isolation: "isolate",

          cursor: "zoom-out",
        }}
      >

        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <motion.button
          type="button"

          aria-label="Close gallery"

          onClick={(event) => {

            event.stopPropagation();

            onClose();

          }}

          initial={{
            opacity: 0,
            scale: 0.6,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}

          whileHover={{
            scale: 1.1,
            rotate: 90,
          }}

          whileTap={{
            scale: 0.9,
          }}

          style={{
            position: "fixed",

            top: "22px",
            right: "22px",

            width: "56px",
            height: "56px",

            zIndex: 2147483647,

            borderRadius: "50%",

            border:
              "2px solid rgba(255,255,255,0.45)",

            background:
              "rgba(3,45,96,0.95)",

            color: "#ffffff",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            cursor: "pointer",

            padding: 0,

            outline: "none",

            boxShadow:
              "0 10px 40px rgba(0,0,0,0.55)",

            backdropFilter:
              "blur(15px)",

            WebkitBackdropFilter:
              "blur(15px)",
          }}
        >

          <X
            size={29}
            strokeWidth={2.5}
          />

        </motion.button>


        {/* =================================================
            IMAGE + INFORMATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.88,
            y: 25,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scale: 0.88,
            y: 25,
          }}

          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}

          onClick={(event) => {

            event.stopPropagation();

          }}

          style={{
            width:
              "min(1100px, 92vw)",

            maxHeight:
              "calc(100vh - 110px)",

            display: "flex",

            flexDirection: "column",

            alignItems: "center",

            position: "relative",

            zIndex: 10,

            cursor: "default",
          }}
        >

          {/* =================================================
              IMAGE CONTAINER
          ================================================= */}

          <div
            style={{
              width: "100%",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              position: "relative",
            }}
          >

            <img
              src={selected.src}

              alt={selected.caption}

              style={{
                display: "block",

                maxWidth: "100%",

                maxHeight:
                  "calc(100vh - 270px)",

                width: "auto",

                height: "auto",

                objectFit: "contain",

                borderRadius: "18px",

                boxShadow:
                  "0 30px 100px rgba(0,0,0,0.65)",

                userSelect: "none",
              }}
            />

          </div>


          {/* =================================================
              INFORMATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.15,
              duration: 0.4,
            }}

            style={{
              width: "100%",

              maxWidth: "900px",

              marginTop: "18px",

              display: "flex",

              alignItems: "flex-start",

              gap: "15px",

              color: "#fff",
            }}
          >

            {/* NUMBER */}

            <div
              style={{
                flexShrink: 0,

                width: "46px",
                height: "46px",

                borderRadius: "13px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                background:
                  "rgba(255,255,255,0.08)",

                border:
                  "1px solid rgba(255,255,255,0.18)",

                color: "#7dd3fc",

                fontSize: "12px",

                fontWeight: 800,
              }}
            >

              {selected.number}

            </div>


            {/* TEXT */}

            <div>

              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "6px",

                  color: "#7dd3fc",

                  fontSize: "10px",

                  fontWeight: 800,

                  letterSpacing: "1.5px",

                  marginBottom: "5px",
                }}
              >

                {selected.icon}

                {selected.caption.toUpperCase()}

              </div>


              <h3
                style={{
                  margin: 0,

                  color: "#fff",

                  fontSize:
                    "clamp(1.2rem, 3vw, 1.6rem)",

                  fontWeight: 800,

                  lineHeight: 1.2,
                }}
              >

                {selected.caption}

              </h3>


              <p
                style={{
                  margin:
                    "6px 0 0",

                  color:
                    "rgba(255,255,255,0.7)",

                  fontSize:
                    "0.82rem",

                  lineHeight:
                    1.6,

                  maxWidth:
                    "800px",
                }}
              >

                {selected.description}

              </p>

            </div>

          </motion.div>

        </motion.div>

      </motion.div>

    </AnimatePresence>,

    document.body

  );

};


/* =========================================================
   GALLERY
========================================================= */

const Gallery = () => {

  const [selected, setSelected] =
    useState(null);


  /* =======================================================
     IMAGES
  ======================================================= */

  const images = [
    {
      src: "/images/arena.webp",
      caption: "The Arena",
      description:
        "A wide shot of the Agentforce World Tour Mumbai venue, where hundreds of Trailblazers gathered for a day of AI-powered innovation.",
      size: "large",
      position: "center",
      icon: <Trophy size={15} />,
      number: "01",
    },
    {
      src: "/images/with-trophy.webp",
      caption: "Finalist Moment",
      description:
        "Celebrating as a Hackathon Finalist, the moment the hard work on Agentforce and Data Cloud paid off.",
      size: "tall",
      position: "center",
      icon: <Award size={15} />,
      number: "02",
    },
    {
      src: "/images/at-stage.webp",
      caption: "Pitching the Solution",
      description:
        "Presenting our Agentforce-powered retail store expansion solution on stage during the Hackathon finals.",
      size: "medium",
      position: "center",
      icon: <Mic size={15} />,
      number: "03",
    },
    {
      src: "/images/community-session.webp",
      caption: "Community Session",
      description:
        "Speaking at a Trailblazer Community Session, sharing insights on Agentforce and Data Cloud with fellow developers.",
      size: "medium",
      position: "center",
      icon: <Mic size={15} />,
      number: "04",
    },
  ];


  /* =======================================================
     CARD SIZES
  ======================================================= */

  const sizeStyles = {

    large: {

      gridColumn:
        "span 2",

      gridRow:
        "span 1",

    },

    tall: {

      gridColumn:
        "span 1",

      gridRow:
        "span 2",

    },

    medium: {

      gridColumn:
        "span 1",

      gridRow:
        "span 1",

    },

  };


  return (

    <section
      id="gallery"

      className="gallery-section"
    >

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="
          gallery-glow
          gallery-glow-one
        "
      />

      <div
        className="
          gallery-glow
          gallery-glow-two
        "
      />

      <div
        className="gallery-grid-bg"
      />


      {/* ===================================================
          HEADING
      =================================================== */}

      <motion.div
        className="gallery-heading"

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

          ease:
            [0.22, 1, 0.36, 1],
        }}
      >

        <motion.div
          className="
            gallery-heading-badge
          "

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
            duration: 0.5,
          }}
        >

          <Camera size={15} />

          <span>
            MOMENTS FROM THE FIELD
          </span>

        </motion.div>


        <h2>

          Agentforce World Tour{" "}

          <span>
            Mumbai
          </span>

        </h2>


        <p>

          From presenting on stage to speaking at a
          Community Session, a look back at the Hackathon
          where our Agentforce + Data Cloud retail
          solution made it to the finals.

        </p>

      </motion.div>


      {/* ===================================================
          META BAR
      =================================================== */}

      <motion.div
        className="gallery-meta"

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
          delay: 0.2,
        }}
      >

        <div
          className="
            gallery-meta-left
          "
        >

          <Sparkles
            size={15}
          />

          <span>
            FOUR MOMENTS
          </span>

        </div>


        <div
          className="
            gallery-meta-right
          "
        >

          <span>
            CLICK ANY IMAGE TO EXPLORE
          </span>

          <ChevronRight
            size={15}
          />

        </div>

      </motion.div>


      {/* ===================================================
          GALLERY GRID
      =================================================== */}

      <div
        className="gallery-container"
      >

        {images.map(
          (img, i) => (

            <motion.div

              key={i}

              className={`
                gallery-card
                gallery-card-${img.size}
              `}

              style={{
                ...sizeStyles[
                  img.size
                ],
              }}

              initial={{
                opacity: 0,

                y: 60,

                scale: 0.94,
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
                duration: 0.7,

                delay:
                  i * 0.12,

                ease:
                  [0.16, 1, 0.3, 1],
              }}

              whileHover={{
                y: -8,

                scale: 1.015,
              }}

              onClick={() =>
                setSelected(img)
              }
            >

              {/* IMAGE */}

              <motion.img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                style={{
                  objectPosition:
                    img.position ||
                    "center",
                }}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.7,
                  ease:
                    "easeOut",
                }}
              />


              {/* IMAGE OVERLAY */}

              <div
                className="
                  gallery-image-overlay
                "
              />


              {/* =================================================
                  TOP INFORMATION
              ================================================= */}

              <div
                className="
                  gallery-card-top
                "
              >

                <span
                  className="
                    gallery-card-number
                  "
                >

                  {img.number}

                </span>


                <div
                  className="
                    gallery-expand
                  "
                >

                  <Maximize2
                    size={15}
                  />

                </div>

              </div>


              {/* =================================================
                  BOTTOM INFORMATION
              ================================================= */}

              <div
                className="
                  gallery-card-content
                "
              >

                <div
                  className="
                    gallery-card-category
                  "
                >

                  {img.icon}

                  <span>
                    {img.caption.toUpperCase()}
                  </span>

                </div>


                <h3>
                  {img.caption}
                </h3>


                <p>
                  {img.description}
                </p>


                <div
                  className="
                    gallery-view
                  "
                >

                  <span>
                    View Moment
                  </span>

                  <ChevronRight
                    size={16}
                  />

                </div>

              </div>

            </motion.div>

          )
        )}

      </div>


      {/* ===================================================
          BOTTOM MESSAGE
      =================================================== */}

      <motion.div
        className="gallery-bottom"

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
          delay: 0.2,
        }}
      >

        <Trophy
          size={18}
        />

        <span>

          From building solutions to sharing them
          with the Trailblazer community.

        </span>

      </motion.div>


      {/* ===================================================
          LIGHTBOX

          IMPORTANT:
          This is rendered OUTSIDE the Gallery DOM
          using React Portal.
      =================================================== */}

      <GalleryLightbox
        selected={selected}

        onClose={() =>
          setSelected(null)
        }
      />


      {/* ===================================================
          RESPONSIVE CSS
      =================================================== */}

      <style>{`

        .gallery-section {

          position: relative;

          width: 100%;

          padding:
            7rem 2rem;

          background:
            #061a36;

          color: #fff;

          overflow: hidden;

          isolation: isolate;

        }


        /* ================================================
           GLOWS
        ================================================ */

        .gallery-glow {

          position: absolute;

          width: 500px;

          height: 500px;

          border-radius: 50%;

          filter:
            blur(120px);

          opacity: .12;

          pointer-events: none;

          z-index: -1;

        }


        .gallery-glow-one {

          top: -250px;

          left: -200px;

          background:
            #0176d3;

        }


        .gallery-glow-two {

          bottom: -300px;

          right: -200px;

          background:
            #5867e8;

        }


        /* ================================================
           GRID BACKGROUND
        ================================================ */

        .gallery-grid-bg {

          position: absolute;

          inset: 0;

          background-image:

            linear-gradient(
              rgba(125,211,252,.025)
              1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(125,211,252,.025)
              1px,
              transparent 1px
            );

          background-size:
            55px 55px;

          mask-image:
            radial-gradient(
              circle at center,
              black,
              transparent 80%
            );

          pointer-events: none;

          z-index: -1;

        }


        /* ================================================
           HEADING
        ================================================ */

        .gallery-heading {

          max-width:
            900px;

          margin:
            0 auto;

          text-align:
            center;

        }


        .gallery-heading-badge {

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
            rgba(27,150,255,.1);

          border:
            1px solid
            rgba(125,211,252,.2);

          color:
            #7dd3fc;

          font-size:
            .65rem;

          font-weight:
            800;

          letter-spacing:
            1.4px;

          margin-bottom:
            1.2rem;

        }


        .gallery-heading h2 {

          margin:
            0;

          font-size:
            clamp(
              2rem,
              5vw,
              3.5rem
            );

          line-height:
            1.1;

          font-weight:
            900;

          letter-spacing:
            -1.5px;

        }


        .gallery-heading h2 span {

          background:
            linear-gradient(
              90deg,
              #1b96ff,
              #7dd3fc
            );

          -webkit-background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

        }


        .gallery-heading p {

          max-width:
            700px;

          margin:
            1.2rem auto 0;

          color:
            rgba(201,228,255,.6);

          font-size:
            .9rem;

          line-height:
            1.8;

        }


        /* ================================================
           META
        ================================================ */

        .gallery-meta {

          max-width:
            1200px;

          margin:
            4rem auto 1rem;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          padding:
            0 .2rem;

          color:
            rgba(255,255,255,.4);

          font-size:
            .6rem;

          font-weight:
            800;

          letter-spacing:
            1.4px;

        }


        .gallery-meta-left,
        .gallery-meta-right {

          display:
            flex;

          align-items:
            center;

          gap:
            7px;

        }


        .gallery-meta-left {

          color:
            #7dd3fc;

        }


        /* ================================================
           GALLERY GRID
        ================================================ */

        .gallery-container {

          width:
            100%;

          max-width:
            1200px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            repeat(3, 1fr);

          grid-auto-rows:
            260px;

          gap:
            1.2rem;

        }


        /* ================================================
           CARD
        ================================================ */

        .gallery-card {

          position:
            relative;

          border-radius:
            20px;

          overflow:
            hidden;

          cursor:
            pointer;

          background:
            #0b2344;

          box-shadow:
            0 15px 45px
            rgba(0,0,0,.25);

          border:
            1px solid
            rgba(255,255,255,.06);

          transform:
            translateZ(0);

        }


        .gallery-card img {

          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;

          transition:
            transform .7s
            cubic-bezier(
              .16,
              1,
              .3,
              1
            );

        }


        /* ================================================
           OVERLAY
        ================================================ */

        .gallery-image-overlay {

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              180deg,
              rgba(2,15,38,.15)
              0%,

              transparent
              35%,

              rgba(2,15,38,.95)
              100%
            );

          pointer-events:
            none;

        }


        /* ================================================
           CARD TOP
        ================================================ */

        .gallery-card-top {

          position:
            absolute;

          top:
            14px;

          left:
            14px;

          right:
            14px;

          display:
            flex;

          justify-content:
            space-between;

          align-items:
            center;

          z-index:
            2;

        }


        .gallery-card-number {

          width:
            38px;

          height:
            38px;

          border-radius:
            11px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          background:
            rgba(3,45,96,.7);

          border:
            1px solid
            rgba(255,255,255,.15);

          backdrop-filter:
            blur(10px);

          color:
            #7dd3fc;

          font-size:
            .65rem;

          font-weight:
            800;

        }


        .gallery-expand {

          width:
            38px;

          height:
            38px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          background:
            rgba(255,255,255,.1);

          border:
            1px solid
            rgba(255,255,255,.15);

          backdrop-filter:
            blur(10px);

          color:
            white;

        }


        /* ================================================
           CARD CONTENT
        ================================================ */

        .gallery-card-content {

          position:
            absolute;

          left:
            20px;

          right:
            20px;

          bottom:
            18px;

          z-index:
            2;

        }


        .gallery-card-category {

          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          color:
            #7dd3fc;

          font-size:
            .6rem;

          font-weight:
            800;

          letter-spacing:
            1.2px;

          margin-bottom:
            5px;

        }


        .gallery-card h3 {

          margin:
            0;

          color:
            white;

          font-size:
            1.25rem;

          font-weight:
            800;

        }


        .gallery-card p {

          margin:
            5px 0 0;

          color:
            rgba(255,255,255,.68);

          font-size:
            .7rem;

          line-height:
            1.55;

          max-width:
            700px;

        }


        .gallery-view {

          display:
            flex;

          align-items:
            center;

          gap:
            3px;

          margin-top:
            9px;

          color:
            white;

          font-size:
            .62rem;

          font-weight:
            700;

          opacity:
            .75;

        }


        /* ================================================
           BOTTOM
        ================================================ */

        .gallery-bottom {

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          max-width:
            700px;

          margin:
            3rem auto 0;

          text-align:
            center;

          color:
            rgba(255,255,255,.45);

          font-size:
            .7rem;

        }


        .gallery-bottom svg {

          color:
            #fe9339;

          flex-shrink:
            0;

        }


        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 800px) {

          .gallery-section {

            padding:
              5rem 1.2rem;

          }


          .gallery-container {

            grid-template-columns:
              1fr 1fr;

            grid-auto-rows:
              230px;

          }


          .gallery-card-large {

            grid-column:
              span 2 !important;

            grid-row:
              span 1 !important;

          }


          .gallery-card-tall {

            grid-column:
              span 1 !important;

            grid-row:
              span 1 !important;

          }


          .gallery-card-medium {

            grid-column:
              span 1 !important;

            grid-row:
              span 1 !important;

          }

        }


        @media (max-width: 550px) {

          .gallery-container {

            grid-template-columns:
              1fr;

            grid-auto-rows:
              280px;

          }


          .gallery-card-large,
          .gallery-card-tall,
          .gallery-card-medium {

            grid-column:
              span 1 !important;

            grid-row:
              span 1 !important;

          }


          .gallery-meta-right {

            display:
              none;

          }


          .gallery-card h3 {

            font-size:
              1.1rem;

          }


          .gallery-card p {

            font-size:
              .68rem;

          }

        }


        /* ================================================
           LIGHTBOX MOBILE
        ================================================ */

        @media (max-width: 600px) {

          .gallery-lightbox-image {

            max-height:
              calc(100vh - 330px);

          }

        }

      `}</style>

    </section>

  );

};


export default Gallery;
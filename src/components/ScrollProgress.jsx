import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Cloud } from "lucide-react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  /*
   * The progress is controlled ONLY by page scrolling.
   * No independent animation is applied to the progress itself.
   */
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 35,
    mass: 0.25,
  });

  /* =========================================================
     PERCENTAGE
  ========================================================= */

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setPercentage(Math.round(value * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  /* =========================================================
     SHOW STATUS AFTER USER STARTS SCROLLING
  ========================================================= */

  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStatus(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CURRENT SECTION
  ========================================================= */

  const [currentSection, setCurrentSection] =
    useState("Home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "gallery",
      "contact",
    ];

    const labels = {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact",
    };

    const updateSection = () => {
      const position =
        window.scrollY +
        window.innerHeight * 0.35;

      let active = "home";

      sections.forEach((id) => {
        const element =
          document.getElementById(id);

        if (!element) return;

        if (position >= element.offsetTop) {
          active = id;
        }
      });

      setCurrentSection(labels[active]);
    };

    updateSection();

    window.addEventListener(
      "scroll",
      updateSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateSection
      );

      window.removeEventListener(
        "resize",
        updateSection
      );
    };
  }, []);

  return (
    <>
      {/* =====================================================
          MAIN PROGRESS TRACK
      ===================================================== */}

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",

          zIndex: 99999,

          pointerEvents: "none",

          background:
            "rgba(255,255,255,0.12)",
        }}
      >

        {/* =================================================
            ACTUAL SCROLL PROGRESS
        ================================================= */}

        <motion.div
          style={{
            position: "absolute",

            top: 0,
            left: 0,

            width: "100%",
            height: "100%",

            transformOrigin: "left center",

            scaleX: progress,

            background:
              "linear-gradient(90deg, #1B96FF 0%, #0176D3 55%, #FE9339 100%)",

            boxShadow:
              "0 0 10px rgba(27,150,255,0.75)",

            willChange: "transform",
          }}
        />

      </div>


      {/* =====================================================
          STATIC END DOT
          This follows the scroll position but NEVER
          independently animates.
      ===================================================== */}

      <motion.div
        style={{
          position: "fixed",

          top: "-2px",

          left: useTransform(
            progress,
            [0, 1],
            ["0%", "100%"]
          ),

          width: "8px",
          height: "8px",

          marginLeft: "-4px",

          borderRadius: "50%",

          background: "#FFFFFF",

          boxShadow:
            "0 0 8px #FFFFFF, 0 0 18px #1B96FF",

          zIndex: 100000,

          pointerEvents: "none",

          willChange: "left",
        }}
      />


      {/* =====================================================
          SCROLL STATUS
          This does NOT move continuously.
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}

        animate={{
          opacity: showStatus ? 1 : 0,
          y: showStatus ? 0 : -10,
        }}

        transition={{
          duration: 0.25,
        }}

        style={{
          position: "fixed",

          top: "70px",

          right: "20px",

          zIndex: 9998,

          pointerEvents: "none",

          display: "flex",

          alignItems: "center",

          gap: "8px",

          padding:
            "8px 12px",

          borderRadius:
            "999px",

          background:
            "rgba(3,45,96,0.88)",

          border:
            "1px solid rgba(125,211,252,0.2)",

          backdropFilter:
            "blur(12px)",

          WebkitBackdropFilter:
            "blur(12px)",

          boxShadow:
            "0 8px 25px rgba(0,0,0,0.2)",

          color: "#FFFFFF",

          fontSize: "10px",

          fontWeight: 700,

          whiteSpace: "nowrap",
        }}
      >

        <Cloud
          size={15}
          color="#7DD3FC"
        />

        <span
          style={{
            color:
              "rgba(255,255,255,0.75)",
          }}
        >
          {currentSection}
        </span>

        <span
          style={{
            width: "1px",
            height: "12px",
            background:
              "rgba(255,255,255,0.2)",
          }}
        />

        <span
          style={{
            color: "#7DD3FC",
            minWidth: "28px",
            textAlign: "right",
          }}
        >
          {percentage}%
        </span>

      </motion.div>


      {/* =====================================================
          MOBILE
      ===================================================== */}

      <style>{`

        @media (max-width: 600px) {

          .scroll-status {
            right: 10px;
            top: 65px;
          }

        }

      `}</style>
    </>
  );
};

export default ScrollProgress;
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Cloud } from "lucide-react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);
  const [showStatus, setShowStatus] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");
  const lastPercentRef = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const p = Math.round(value * 100);
      if (Math.abs(p - lastPercentRef.current) >= 2 || p === 0 || p === 100) {
        lastPercentRef.current = p;
        setPercentage(p);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

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

    const handleScroll = () => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        const scrollY = window.scrollY;
        setShowStatus(scrollY > 120);

        const position = scrollY + window.innerHeight * 0.35;
        let active = "home";

        for (let i = sections.length - 1; i >= 0; i--) {
          const id = sections[i];
          const el = document.getElementById(id);
          if (el && position >= el.offsetTop) {
            active = id;
            break;
          }
        }

        setCurrentSection(labels[active] || "Home");
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Top progress track */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "3.5px",
          zIndex: 99999,
          pointerEvents: "none",
          background: "rgba(255,255,255,0.08)",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transformOrigin: "0% 50%",
            scaleX: progress,
            background: "linear-gradient(90deg, #1B96FF 0%, #0176D3 55%, #FE9339 100%)",
            boxShadow: "0 0 12px rgba(27,150,255,0.7)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Floating Status Pill */}
      <motion.div
        initial={false}
        animate={{
          opacity: showStatus ? 1 : 0,
          y: showStatus ? 0 : -8,
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: "fixed",
          top: "68px",
          right: "20px",
          zIndex: 9998,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 12px",
          borderRadius: "999px",
          background: "rgba(3, 45, 96, 0.88)",
          border: "1px solid rgba(125, 211, 252, 0.25)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          color: "#FFFFFF",
          fontSize: "11px",
          fontWeight: 600,
          willChange: "transform, opacity",
        }}
      >
        <Cloud size={14} color="#7DD3FC" />
        <span style={{ color: "rgba(255,255,255,0.85)" }}>{currentSection}</span>
        <span
          style={{
            width: "1px",
            height: "10px",
            background: "rgba(255,255,255,0.2)",
          }}
        />
        <span style={{ color: "#7DD3FC", minWidth: "26px", textAlign: "right" }}>
          {percentage}%
        </span>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
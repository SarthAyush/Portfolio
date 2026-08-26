import React from "react";
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #032D60 0%, #0176D3 50%, #1B96FF 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Floating cloud animations */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: `${15 + i * 15}%`,
            left: `${10 + i * 18}%`,
            opacity: 0.15,
          }}
        >
          <Cloud size={80 + i * 20} color="#fff" />
        </motion.div>
      ))}

      <motion.img
  src="/images/headshot.png"
  alt="Sarthak Saxena"
  initial={{ opacity: 0, scale: 0.6, y: -20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  whileHover={{ scale: 1.05 }}
  style={{
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top',
    border: '4px solid #fff',
    boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
    marginBottom: '1.5rem',
  }}
/>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          color: "#1B96FF",
          fontWeight: 600,
          letterSpacing: "2px",
          marginBottom: "1rem",
        }}
      >
        WELCOME TO MY TRAILHEAD
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          color: "#fff",
          fontWeight: 800,
          marginBottom: "1rem",
        }}
      >
        Hi, I'm <span style={{ color: "#1B96FF" }}>Sarthak Saxena</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          color: "#C9E4FF",
          fontWeight: 500,
          marginBottom: "0.5rem",
        }}
      >
        Salesforce Developer @ Astrea IT Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        style={{ color: "#C9E4FF", fontSize: "1rem", marginBottom: "2rem" }}
      >
        3X Certified: Agentforce Specialist • Platform App Builder • Platform
        Developer I
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        style={{
          display: "flex",
          gap: "1.2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(27,150,255,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "0.9rem 2rem",
            background: "#fff",
            color: "#032D60",
            border: "none",
            borderRadius: "30px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="/Sarthak_Saxena_Resume_A.pdf"
          download
          whileHover={{ scale: 1.08, background: "rgba(255,255,255,0.15)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "0.9rem 2rem",
            background: "transparent",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "30px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

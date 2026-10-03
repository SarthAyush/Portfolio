import React from "react";
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-main)",
        gap: "1.5rem",
      }}
    >
      <div style={{ position: "relative", width: "72px", height: "72px" }}>
        {/* Outer glowing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid transparent",
            borderTopColor: "var(--primary)",
            borderRightColor: "var(--accent-cyan)",
          }}
        />

        {/* Center Cloud Icon */}
        <div
          style={{
            position: "absolute",
            inset: "8px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-card)",
            boxShadow: "0 4px 20px var(--primary-glow)",
          }}
        >
          <Cloud size={28} color="var(--primary)" />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: "0.02em",
        }}
      >
        Initializing Portfolio...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
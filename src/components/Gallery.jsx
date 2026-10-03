import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { X, Sparkles } from "lucide-react";

const galleryImages = [
  {
    src: "/images/arena.webp",
    title: "The Grand Arena",
    subtitle: "Agentforce World Tour Mumbai 2026",
    desc: "A wide perspective of the keynote hall where hundreds of Trailblazers gathered for AI innovation.",
  },
  {
    src: "/images/with-trophy.webp",
    title: "Hackathon Finalist Moment",
    subtitle: "Celebration with the Trophy",
    desc: "Recognized as finalists for our Agentforce & Data Cloud retail expansion solution.",
  },
  {
    src: "/images/at-stage.webp",
    title: "Presenting on Stage",
    subtitle: "Live Solution Pitch",
    desc: "Demonstrating autonomous retail workflows in front of industry judges and the community.",
  },
  {
    src: "/images/community-session.webp",
    title: "Community Tech Session",
    subtitle: "Knowledge Sharing",
    desc: "Speaking at a Trailblazer Community meetup, exchanging ideas on modern Salesforce development.",
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (!selectedImg) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImg]);

  return (
    <section id="gallery" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>Moments & Highlights</span>
        </div>
        <h2 className="section-title">
          From the <span className="gradient-text">Trailblazer Community</span>
        </h2>
        <p className="section-desc">
          Snapshots from hackathons, stage presentations, and developer sessions across the Salesforce ecosystem.
        </p>
      </div>

      {/* Grid */}
      <div className="gallery-grid-layout">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            className="gallery-tile"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="gallery-tile-caption">
              <h4>{img.title}</h4>
              <p>{img.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal rendered via Portal */}
      {selectedImg &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.div
                className="lightbox-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setSelectedImg(null)}
                  aria-label="Close image modal"
                >
                  <X size={20} />
                </button>

                <div className="lightbox-img-container">
                  <img src={selectedImg.src} alt={selectedImg.title} />
                </div>

                <div className="lightbox-info">
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)" }}>
                      {selectedImg.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "4px" }}>
                      {selectedImg.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default Gallery;
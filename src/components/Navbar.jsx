import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Cloud,
  Moon,
  Sun,
  
} from "lucide-react";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Gallery",
    "Contact",
  ];

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
     ACTIVE SECTION DETECTION
  ========================================================= */

  useEffect(() => {
    const sectionIds = navLinks.map((link) =>
      link.toLowerCase()
    );

    const handleSectionDetection = () => {
      const scrollPosition =
        window.scrollY +
        window.innerHeight * 0.3;

      let current = "home";

      sectionIds.forEach((id) => {
        const section =
          document.getElementById(id);

        if (!section) return;

        if (
          scrollPosition >=
          section.offsetTop
        ) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleSectionDetection();

    window.addEventListener(
      "scroll",
      handleSectionDetection,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleSectionDetection
      );
    };
  });


  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setIsOpen(false);
  };


  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}

        animate={{
          y: 0,
          opacity: 1,
        }}

        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}

        style={{
          position: "fixed",

          top: scrolled
            ? "12px"
            : "0px",

          left: scrolled
            ? "2%"
            : "0",

          width: scrolled
            ? "96%"
            : "100%",

          height: scrolled
            ? "64px"
            : "76px",

          zIndex: 5000,

          display: "flex",

          alignItems: "center",

          justifyContent:
            "space-between",

          padding:
            scrolled
              ? "0 1.2rem 0 1.4rem"
              : "0 3rem",

          borderRadius:
            scrolled
              ? "18px"
              : "0",

          background:
            scrolled
              ? "rgba(3, 45, 96, 0.82)"
              : "linear-gradient(180deg, rgba(3,45,96,0.5), transparent)",

          border:
            scrolled
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid transparent",

          backdropFilter:
            scrolled
              ? "blur(18px)"
              : "blur(0px)",

          WebkitBackdropFilter:
            scrolled
              ? "blur(18px)"
              : "blur(0px)",

          boxShadow:
            scrolled
              ? "0 12px 40px rgba(0,0,0,0.25)"
              : "none",

          transition:
            "all 0.35s cubic-bezier(0.22,1,0.36,1)",

          boxSizing: "border-box",
        }}
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}

          style={{
            display: "flex",

            alignItems: "center",

            gap: "9px",

            color: "#fff",

            fontWeight: 800,

            fontSize: "1.2rem",

            cursor: "pointer",

            whiteSpace: "nowrap",

            position: "relative",
          }}
        >

          {/* Logo glow */}

          <motion.div
            animate={{
              opacity: [0.35, 0.7, 0.35],
              scale: [0.9, 1.1, 0.9],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            style={{
              position: "absolute",

              left: "-5px",

              width: "38px",

              height: "38px",

              borderRadius: "50%",

              background:
                "rgba(27,150,255,0.35)",

              filter:
                "blur(12px)",

              pointerEvents: "none",
            }}
          />


          {/* Cloud */}

          <motion.div
            animate={{
              y: [0, -2, 0],
            }}

            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            style={{
              display: "flex",
              position: "relative",
              zIndex: 1,
            }}
          >

            <Cloud
              color="#1B96FF"
              size={29}
              strokeWidth={2.3}
            />

          </motion.div>


          {/* Name */}

          <span
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            Sarthak

            <span
              style={{
                color: "#1B96FF",
              }}
            >
              .dev
            </span>
          </span>

        </motion.div>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="desktop-menu"
          style={{
            display: "flex",

            alignItems: "center",

            gap: "0.25rem",

            position: "absolute",

            left: "50%",

            transform:
              "translateX(-50%)",

            height: "100%",
          }}
        >

          {navLinks.map((link) => {

            const id =
              link.toLowerCase();

            const isActive =
              activeSection === id;

            return (
              <Link
                key={link}

                to={id}

                smooth={true}

                duration={700}

                offset={-80}

                onClick={() =>
                  setActiveSection(id)
                }

                style={{
                  position: "relative",

                  display: "flex",

                  alignItems: "center",

                  height: "100%",

                  padding:
                    "0 0.7rem",

                  color:
                    isActive
                      ? "#FFFFFF"
                      : "rgba(255,255,255,0.7)",

                  cursor: "pointer",

                  fontWeight:
                    isActive
                      ? 700
                      : 500,

                  fontSize:
                    "0.82rem",

                  textDecoration:
                    "none",

                  transition:
                    "color 0.25s ease",
                }}
              >

                <motion.span
                  whileHover={{
                    color: "#FFFFFF",
                    y: -1,
                  }}
                >
                  {link}
                </motion.span>


                {/* Active underline */}

                <AnimatePresence>

                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      initial={{
                        opacity: 0,
                        scaleX: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scaleX: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scaleX: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      style={{
                        position:
                          "absolute",

                        bottom:
                          scrolled
                            ? "7px"
                            : "9px",

                        left:
                          "50%",

                        transform:
                          "translateX(-50%)",

                        width:
                          "20px",

                        height:
                          "3px",

                        borderRadius:
                          "999px",

                        background:
                          "linear-gradient(90deg, #1B96FF, #7DD3FC)",

                        boxShadow:
                          "0 0 10px rgba(27,150,255,0.8)",
                      }}
                    />
                  )}

                </AnimatePresence>

              </Link>
            );
          })}

        </div>


        {/* =================================================
            RIGHT CONTROLS
        ================================================= */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            gap: "8px",
          }}
        >

          {/* =================================================
              DARK MODE
          ================================================= */}

          <motion.button
            type="button"

            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }

            onClick={() =>
              setDarkMode(!darkMode)
            }

            whileHover={{
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.92,
            }}

            style={{
              width: "40px",

              height: "40px",

              borderRadius: "50%",

              border:
                "1px solid rgba(255,255,255,0.15)",

              background:
                "rgba(255,255,255,0.1)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              cursor: "pointer",

              color: "#fff",

              position: "relative",

              overflow: "hidden",
            }}
          >

            <AnimatePresence
              mode="wait"
            >

              {darkMode ? (

                <motion.div
                  key="sun"

                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5,
                  }}

                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}

                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                >

                  <Sun
                    size={18}
                    color="#FE9339"
                  />

                </motion.div>

              ) : (

                <motion.div
                  key="moon"

                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5,
                  }}

                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}

                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                >

                  <Moon
                    size={18}
                    color="#FFFFFF"
                  />

                </motion.div>

              )}

            </AnimatePresence>

          </motion.button>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <motion.button
            type="button"

            aria-label={
              isOpen
                ? "Close navigation"
                : "Open navigation"
            }

            className="mobile-menu-button"

            onClick={() =>
              setIsOpen(!isOpen)
            }

            whileTap={{
              scale: 0.9,
            }}

            style={{
              width: "40px",

              height: "40px",

              borderRadius: "12px",

              border:
                "1px solid rgba(255,255,255,0.15)",

              background:
                "rgba(255,255,255,0.1)",

              color: "#fff",

              display: "none",

              alignItems: "center",

              justifyContent: "center",

              cursor: "pointer",

              padding: 0,
            }}
          >

            <AnimatePresence
              mode="wait"
            >

              {isOpen ? (

                <motion.div
                  key="close"

                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}

                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}

                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >

                  <X size={22} />

                </motion.div>

              ) : (

                <motion.div
                  key="menu"

                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}

                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}

                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >

                  <Menu size={22} />

                </motion.div>

              )}

            </AnimatePresence>

          </motion.button>

        </div>

      </motion.nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="mobile-navigation"

            style={{
              position: "fixed",

              top:
                scrolled
                  ? "84px"
                  : "70px",

              left: "4%",

              width: "92%",

              zIndex: 4999,

              padding:
                "0.7rem",

              borderRadius:
                "18px",

              background:
                "rgba(3,45,96,0.94)",

              border:
                "1px solid rgba(255,255,255,0.12)",

              backdropFilter:
                "blur(20px)",

              WebkitBackdropFilter:
                "blur(20px)",

              boxShadow:
                "0 20px 50px rgba(0,0,0,0.3)",

              overflow: "hidden",
            }}
          >

            {/* Mobile menu glow */}

            <div
              style={{
                position: "absolute",

                width: "180px",

                height: "180px",

                borderRadius: "50%",

                background:
                  "rgba(27,150,255,0.15)",

                filter:
                  "blur(50px)",

                top: "-100px",

                right: "-70px",

                pointerEvents: "none",
              }}
            />


            {navLinks.map(
              (link, index) => {

                const id =
                  link.toLowerCase();

                const isActive =
                  activeSection === id;

                return (
                  <Link
                    key={link}

                    to={id}

                    smooth={true}

                    duration={700}

                    offset={-70}

                    onClick={() => {

                      setActiveSection(id);

                      closeMobileMenu();

                    }}

                    style={{
                      display: "block",

                      textDecoration: "none",

                      position:
                        "relative",

                      zIndex: 1,
                    }}
                  >

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay:
                          index * 0.045,

                        duration:
                          0.3,
                      }}

                      whileHover={{
                        x: 5,
                      }}

                      style={{
                        display: "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "space-between",

                        padding:
                          "0.85rem 1rem",

                        borderRadius:
                          "12px",

                        marginBottom:
                          "3px",

                        background:
                          isActive
                            ? "rgba(27,150,255,0.15)"
                            : "transparent",

                        color:
                          isActive
                            ? "#FFFFFF"
                            : "rgba(255,255,255,0.7)",

                        fontWeight:
                          isActive
                            ? 700
                            : 500,

                        fontSize:
                          "0.9rem",

                        transition:
                          "background 0.2s ease",
                      }}
                    >

                      <span>
                        {link}
                      </span>


                      {isActive && (

                        <motion.span
                          layoutId="mobileActive"
                          style={{
                            width: "7px",

                            height: "7px",

                            borderRadius:
                              "50%",

                            background:
                              "#1B96FF",

                            boxShadow:
                              "0 0 10px #1B96FF",
                          }}
                        />

                      )}

                    </motion.div>

                  </Link>
                );
              }
            )}

          </motion.div>

        )}

      </AnimatePresence>


      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style>{`

        @media (max-width: 1000px) {

          .desktop-menu {
            gap: 0 !important;
          }

          .desktop-menu a {
            padding-left: 0.45rem !important;
            padding-right: 0.45rem !important;
          }

        }


        @media (max-width: 820px) {

          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-button {
            display: flex !important;
          }

        }


        @media (max-width: 600px) {

          nav {
            padding-left:
              1rem !important;

            padding-right:
              1rem !important;
          }

        }


        @media (prefers-reduced-motion: reduce) {

          * {
            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;

            scroll-behavior:
              auto !important;
          }

        }

      `}</style>
    </>
  );
};

export default Navbar;
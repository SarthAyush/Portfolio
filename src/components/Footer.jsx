import React from "react";
import { motion } from "framer-motion";
import { Trophy, Mail, ArrowUp, Sparkles, Heart, IdCard } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <IdCard size={17} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sarthak-saxena-dev",
    },
    {
      icon: <Trophy size={17} />,
      label: "Trailblazer",
      href: "https://trailblazer.me/id/sarthaksaxena2004",
    },
    {
      icon: <Mail size={17} />,
      label: "Email",
      href: "mailto:sarthak@astreait.com",
    },
  ];

  const navigation = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Gallery",
      href: "#gallery",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="footer">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-grid" />

      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <motion.div
        className="footer-cta"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className="footer-cta-badge">
          <Sparkles size={14} />

          <span>THANKS FOR VISITING</span>
        </div>

        <h2>
          Let's build something <span>extraordinary.</span>
        </h2>

        <p>
          Salesforce development, AI innovation, and a little bit of Trailblazer
          energy.
        </p>

        <motion.a
          href="#contact"
          className="footer-cta-button"
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          Let's Connect
          <ArrowUp size={16} />
        </motion.a>
      </motion.div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="footer-divider" />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">
        {/* ===================================================
            BRAND
        =================================================== */}

        <motion.div
          className="footer-brand"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="footer-logo">SS</div>

          <div>
            <h3>Sarthak Saxena</h3>

            <p>Salesforce Developer</p>
          </div>

          <p className="footer-brand-description">
            Building scalable Salesforce solutions and exploring the
            intersection of CRM, AI, and intelligent automation.
          </p>
        </motion.div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <motion.div
          className="footer-navigation"
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
            duration: 0.6,
            delay: 0.1,
          }}
        >
          <span className="footer-column-title">NAVIGATION</span>

          <div className="footer-nav-grid">
            {navigation.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{
                  x: 4,
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            SOCIALS
        =================================================== */}

        <motion.div
          className="footer-social"
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <span className="footer-column-title">CONNECT</span>

          <div className="footer-social-links">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
              >
                {item.icon}

                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM DIVIDER
      ===================================================== */}

      <div className="footer-bottom-divider" />

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div className="footer-bottom">
        <span>© {currentYear} Sarthak Saxena</span>

        <span className="footer-built">
          Built with
          <Heart size={13} fill="currentColor" />
          React
          <span className="footer-dot">•</span>
          Salesforce Spirit ⚡
        </span>

        <motion.a
          href="#home"
          className="footer-back-top"
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <ArrowUp size={15} />

          <span>Back to top</span>
        </motion.a>
      </div>
    </footer>
  );
};

/* =========================================================
   CSS
========================================================= */

const style = document.createElement("style");

style.innerHTML = `

/* =========================================================
   FOOTER
========================================================= */

.footer {

  position:
    relative;

  width:
    100%;

  overflow:
    hidden;

  padding:
    5rem 2rem 1.5rem;

  background:
    #021f43;

  color:
    white;

  isolation:
    isolate;

}


/* =========================================================
   GLOWS
========================================================= */

.footer-glow {

  position:
    absolute;

  width:
    450px;

  height:
    450px;

  border-radius:
    50%;

  filter:
    blur(120px);

  opacity:
    .12;

  pointer-events:
    none;

}


.footer-glow-one {

  left:
    -250px;

  top:
    -250px;

  background:
    #0176d3;

}


.footer-glow-two {

  right:
    -250px;

  bottom:
    -300px;

  background:
    #5867e8;

}


/* =========================================================
   GRID
========================================================= */

.footer-grid {

  position:
    absolute;

  inset:
    0;

  background-image:

    linear-gradient(
      rgba(125,211,252,.025) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(125,211,252,.025) 1px,
      transparent 1px
    );

  background-size:
    50px 50px;

  mask-image:
    linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );

  pointer-events:
    none;

}


/* =========================================================
   CTA
========================================================= */

.footer-cta {

  position:
    relative;

  z-index:
    2;

  max-width:
    800px;

  margin:
    0 auto 4rem;

  text-align:
    center;

}


.footer-cta-badge {

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
    rgba(255,255,255,.07);

  border:
    1px solid
    rgba(255,255,255,.12);

  color:
    #7dd3fc;

  font-size:
    .65rem;

  font-weight:
    800;

  letter-spacing:
    1.5px;

  margin-bottom:
    1.2rem;

}


.footer-cta h2 {

  margin:
    0;

  font-size:
    clamp(
      2rem,
      4vw,
      3.2rem
    );

  font-weight:
    900;

  letter-spacing:
    -1.5px;

  line-height:
    1.1;

}


.footer-cta h2 span {

  background:
    linear-gradient(
      100deg,
      #7dd3fc,
      #1b96ff,
      #ffffff,
      #7dd3fc
    );

  background-size:
    250% auto;

  -webkit-background-clip:
    text;

  -webkit-text-fill-color:
    transparent;

  animation:
    footerGradient
    5s
    linear
    infinite;

}


@keyframes footerGradient {

  to {

    background-position:
      250% center;

  }

}


.footer-cta p {

  margin:
    1rem auto 1.5rem;

  color:
    rgba(201,228,255,.65);

  font-size:
    .85rem;

  line-height:
    1.7;

}


.footer-cta-button {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    7px;

  padding:
    .75rem 1.2rem;

  border-radius:
    999px;

  background:
    white;

  color:
    #032d60;

  text-decoration:
    none;

  font-size:
    .75rem;

  font-weight:
    800;

  box-shadow:
    0 10px 30px
    rgba(0,0,0,.15);

}


/* =========================================================
   DIVIDER
========================================================= */

.footer-divider {

  position:
    relative;

  z-index:
    2;

  width:
    100%;

  max-width:
    1250px;

  height:
    1px;

  margin:
    0 auto 3rem;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(125,211,252,.2),
      transparent
    );

}


/* =========================================================
   MAIN
========================================================= */

.footer-main {

  position:
    relative;

  z-index:
    2;

  width:
    100%;

  max-width:
    1250px;

  margin:
    0 auto;

  display:
    grid;

  grid-template-columns:
    1.5fr
    1fr
    .8fr;

  gap:
    4rem;

}


/* =========================================================
   BRAND
========================================================= */

.footer-brand {

  display:
    grid;

  grid-template-columns:
    48px
    1fr;

  column-gap:
    .8rem;

  align-items:
    center;

}


.footer-logo {

  width:
    48px;

  height:
    48px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    14px;

  background:
    linear-gradient(
      135deg,
      #0176d3,
      #1b96ff
    );

  color:
    white;

  font-size:
    .9rem;

  font-weight:
    900;

  box-shadow:
    0 10px 25px
    rgba(27,150,255,.2);

}


.footer-brand h3 {

  margin:
    0;

  font-size:
    1rem;

  font-weight:
    800;

}


.footer-brand > div p {

  margin:
    .15rem 0 0;

  color:
    rgba(201,228,255,.5);

  font-size:
    .65rem;

}


.footer-brand-description {

  grid-column:
    1 / -1;

  max-width:
    400px;

  margin:
    1rem 0 0;

  color:
    rgba(201,228,255,.55);

  font-size:
    .72rem;

  line-height:
    1.7;

}


/* =========================================================
   COLUMNS
========================================================= */

.footer-column-title {

  display:
    block;

  margin-bottom:
    1rem;

  color:
    #7dd3fc;

  font-size:
    .62rem;

  font-weight:
    800;

  letter-spacing:
    1.5px;

}


/* =========================================================
   NAVIGATION
========================================================= */

.footer-nav-grid {

  display:
    grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap:
    .6rem 1.5rem;

}


.footer-nav-grid a {

  width:
    fit-content;

  color:
    rgba(255,255,255,.55);

  text-decoration:
    none;

  font-size:
    .72rem;

  transition:
    color .25s ease;

}


.footer-nav-grid a:hover {

  color:
    #7dd3fc;

}


/* =========================================================
   SOCIAL
========================================================= */

.footer-social-links {

  display:
    flex;

  flex-direction:
    column;

  gap:
    .6rem;

}


.footer-social-links a {

  display:
    flex;

  align-items:
    center;

  gap:
    .6rem;

  width:
    fit-content;

  padding:
    .55rem .7rem;

  border-radius:
    9px;

  color:
    rgba(255,255,255,.6);

  text-decoration:
    none;

  background:
    rgba(255,255,255,.04);

  border:
    1px solid
    rgba(255,255,255,.06);

  font-size:
    .7rem;

  transition:
    color .25s ease,
    background .25s ease;

}


.footer-social-links a:hover {

  color:
    white;

  background:
    rgba(255,255,255,.08);

}


.footer-social-links svg {

  color:
    #7dd3fc;

}


/* =========================================================
   BOTTOM DIVIDER
========================================================= */

.footer-bottom-divider {

  position:
    relative;

  z-index:
    2;

  width:
    100%;

  max-width:
    1250px;

  height:
    1px;

  margin:
    3rem auto 1.2rem;

  background:
    rgba(255,255,255,.07);

}


/* =========================================================
   BOTTOM
========================================================= */

.footer-bottom {

  position:
    relative;

  z-index:
    2;

  width:
    100%;

  max-width:
    1250px;

  margin:
    0 auto;

  display:
    grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items:
    center;

  gap:
    1rem;

  color:
    rgba(201,228,255,.4);

  font-size:
    .62rem;

}


.footer-built {

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    5px;

}


.footer-built svg {

  color:
    #fe5c5c;

}


.footer-dot {

  color:
    rgba(255,255,255,.2);

  margin:
    0 3px;

}


.footer-back-top {

  justify-self:
    end;

  display:
    inline-flex;

  align-items:
    center;

  gap:
    5px;

  color:
    rgba(255,255,255,.55);

  text-decoration:
    none;

  transition:
    color .25s ease;

}


.footer-back-top:hover {

  color:
    #7dd3fc;

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 800px) {

  .footer {

    padding:
      4rem 1.2rem 1.2rem;

  }


  .footer-main {

    grid-template-columns:
      1fr
      1fr;

    gap:
      2.5rem;

  }


  .footer-brand {

    grid-column:
      1 / -1;

  }


  .footer-social {

    grid-column:
      1 / -1;

  }


  .footer-social-links {

    flex-direction:
      row;

    flex-wrap:
      wrap;

  }


  .footer-bottom {

    grid-template-columns:
      1fr;

    text-align:
      center;

  }


  .footer-back-top {

    justify-self:
      center;

  }

}


@media (max-width: 500px) {

  .footer {

    padding:
      4rem 1rem 1rem;

  }


  .footer-cta h2 {

    font-size:
      2rem;

  }


  .footer-cta p {

    font-size:
      .75rem;

  }


  .footer-main {

    grid-template-columns:
      1fr;

  }


  .footer-navigation,
  .footer-social {

    grid-column:
      1;

  }


  .footer-nav-grid {

    grid-template-columns:
      repeat(3, 1fr);

  }


  .footer-social-links {

    flex-direction:
      row;

  }


  .footer-bottom {

    font-size:
      .58rem;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .footer *,
  .footer *::before,
  .footer *::after {

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

export default Footer;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,

  Trophy,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  IdCard,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Direct and reliable client-side mail action
    const mailtoUrl = `mailto:sarthak@astreait.com?subject=Portfolio Message from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0A---%0AFrom: ${encodeURIComponent(
      form.name
    )}%0AEmail: ${encodeURIComponent(form.email)}`;

    window.open(mailtoUrl, "_blank");

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4500);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={19} />,
      label: "sarthak@astreait.com",
      description: "Drop me an email",
      href: "mailto:sarthak@astreait.com",
      color: "#0176d3",
    },
    {
      icon: <Phone size={19} />,
      label: "+91 8687926699",
      description: "Let's have a conversation",
      href: "tel:+918687926699",
      color: "#04844b",
    },
    {
      icon: <MapPin size={19} />,
      label: "Noida, Uttar Pradesh",
      description: "India",
      href: null,
      color: "#fe9339",
    },
    {
      icon: <IdCard size={19} />,
      label: "LinkedIn Profile",
      description: "Connect professionally",
      href: "https://linkedin.com/in/sarthak-saxena-dev",
      color: "#0a66c2",
    },
    {
      icon: <Trophy size={19} />,
      label: "Trailblazer Profile",
      description: "Explore my Salesforce journey",
      href: "https://trailblazer.me/id/sarthaksaxena2004",
      color: "#0176d3",
    },
  ];

  return (
    <section id="contact" className="contact-section">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-grid-bg" />


      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="contact-particles">

        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`contact-particle contact-particle-${i}`}
          />
        ))}

      </div>


      {/* =====================================================
          HEADING
      ===================================================== */}

      <motion.div
        className="contact-heading"

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

        <div className="contact-badge">

          <Sparkles size={15} />

          <span>
            LET'S BUILD SOMETHING
          </span>

        </div>


        <h2>

          Let's{" "}

          <span>
            Connect
          </span>

        </h2>


        <p>
          Open to new opportunities, collaborations,
          Salesforce projects, and interesting conversations.
        </p>

      </motion.div>


      {/* =====================================================
          MAIN CONTACT CONTAINER
      ===================================================== */}

      <div className="contact-container">


        {/* ===================================================
            LEFT SIDE
        =================================================== */}

        <motion.div
          className="contact-left"

          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
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

          {/* Intro Card */}

          <div className="contact-intro">

            <div className="contact-intro-icon">

              <MessageCircle size={25} />

            </div>


            <div>

              <span>
                HAVE A PROJECT?
              </span>

              <h3>
                Let's talk.
              </h3>

            </div>

          </div>


          <p className="contact-description">

            Whether you have an opportunity, a project idea,
            or simply want to talk about Salesforce, AI,
            Agentforce, or technology, I'd love to hear from you.

          </p>


          {/* Contact Items */}

          <div className="contact-items">

            {contactInfo.map((item, i) => (

              <motion.a
                key={i}

                href={item.href || undefined}

                target={
                  item.href?.startsWith("http")
                    ? "_blank"
                    : undefined
                }

                rel={
                  item.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }

                className={`contact-item ${
                  !item.href
                    ? "contact-item-static"
                    : ""
                }`}

                style={{
                  "--contact-color": item.color,
                }}

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay:
                    0.1 + i * 0.08,
                }}

                whileHover={
                  item.href
                    ? {
                        x: 8,
                        scale: 1.01,
                      }
                    : {}
                }
              >

                <div className="contact-item-icon">

                  {item.icon}

                </div>


                <div className="contact-item-content">

                  <span>
                    {item.description}
                  </span>

                  <strong>
                    {item.label}
                  </strong>

                </div>


                {item.href && (

                  <ArrowUpRight
                    className="contact-item-arrow"
                    size={17}
                  />

                )}

              </motion.a>

            ))}

          </div>


          {/* Availability */}

          <motion.div
            className="contact-availability"

            initial={{
              opacity: 0,
            }}

            whileInView={{
              opacity: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: 0.5,
            }}
          >

            <span className="availability-dot" />

            <span>
              Currently open to opportunities
            </span>

          </motion.div>

        </motion.div>


        {/* ===================================================
            RIGHT SIDE FORM
        =================================================== */}

        <motion.div
          className="contact-form-wrapper"

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
            amount: 0.2,
          }}

          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="contact-form-glow" />


          <div className="contact-form-header">

            <div>

              <span>
                SEND A MESSAGE
              </span>

              <h3>
                Start a conversation
              </h3>

            </div>


            <div className="form-status">

              <span />

              SECURE

            </div>

          </div>


          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="contact-input-group">

              <label>
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email */}

            <div className="contact-input-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Message */}

            <div className="contact-input-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                placeholder="Tell me a little about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* Submit */}

            <motion.button
              type="submit"
              className="contact-submit"

              whileHover={{
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.97,
              }}
            >

              <AnimatePresence mode="wait">

                {sent ? (

                  <motion.span
                    key="sent"

                    initial={{
                      opacity: 0,
                      y: 10,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      y: -10,
                    }}

                    className="contact-submit-content"
                  >

                    <CheckCircle2 size={18} />

                    Message Sent Successfully

                  </motion.span>

                ) : (

                  <motion.span
                    key="send"

                    initial={{
                      opacity: 0,
                      y: 10,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      y: -10,
                    }}

                    className="contact-submit-content"
                  >

                    Send Message

                    <Send size={17} />

                  </motion.span>

                )}

              </AnimatePresence>

            </motion.button>


            <p className="contact-form-note">

              I usually respond within 24–48 hours.

            </p>

          </form>

        </motion.div>

      </div>


      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <motion.div
        className="contact-bottom"

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
          delay: 0.3,
        }}
      >

        <span>
          Salesforce
        </span>

        <i>×</i>

        <span>
          AI
        </span>

        <i>×</i>

        <span>
          Innovation
        </span>

      </motion.div>

    </section>
  );
};


/* =========================================================
   CSS
========================================================= */

const style =
  document.createElement("style");

style.innerHTML = `

/* =========================================================
   SECTION
========================================================= */

.contact-section {

  position:
    relative;

  width:
    100%;

  padding:
    8rem 2rem;

  overflow:
    hidden;

  background:
    linear-gradient(
      135deg,
      #032d60 0%,
      #073f7c 45%,
      #0176d3 100%
    );

  color:
    white;

  isolation:
    isolate;

}


/* =========================================================
   GLOW
========================================================= */

.contact-glow {

  position:
    absolute;

  width:
    500px;

  height:
    500px;

  border-radius:
    50%;

  filter:
    blur(130px);

  pointer-events:
    none;

}


.contact-glow-one {

  top:
    -250px;

  left:
    -200px;

  background:
    rgba(27,150,255,.3);

}


.contact-glow-two {

  bottom:
    -250px;

  right:
    -200px;

  background:
    rgba(88,103,232,.3);

}


/* =========================================================
   GRID
========================================================= */

.contact-grid-bg {

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
    linear-gradient(
      to bottom,
      transparent,
      black 15%,
      black 85%,
      transparent
    );

  pointer-events:
    none;

}


/* =========================================================
   PARTICLES
========================================================= */

.contact-particles {

  position:
    absolute;

  inset:
    0;

  pointer-events:
    none;

}


.contact-particle {

  position:
    absolute;

  width:
    3px;

  height:
    3px;

  border-radius:
    50%;

  background:
    #7dd3fc;

  opacity:
    .2;

  animation:
    contactParticleFloat
    7s
    ease-in-out
    infinite;

}


.contact-particle-0 { left: 5%; top: 15%; }
.contact-particle-1 { left: 12%; top: 70%; animation-delay: 1s; }
.contact-particle-2 { left: 20%; top: 35%; animation-delay: 2s; }
.contact-particle-3 { left: 28%; top: 85%; animation-delay: 3s; }
.contact-particle-4 { left: 37%; top: 10%; animation-delay: 1.5s; }
.contact-particle-5 { left: 45%; top: 75%; animation-delay: 2.5s; }
.contact-particle-6 { left: 55%; top: 20%; animation-delay: 4s; }
.contact-particle-7 { left: 63%; top: 88%; animation-delay: 1s; }
.contact-particle-8 { left: 72%; top: 35%; animation-delay: 2s; }
.contact-particle-9 { left: 80%; top: 70%; animation-delay: 3s; }
.contact-particle-10 { left: 88%; top: 15%; animation-delay: 4s; }
.contact-particle-11 { left: 94%; top: 60%; animation-delay: 1.5s; }
.contact-particle-12 { left: 16%; top: 50%; animation-delay: 2.5s; }
.contact-particle-13 { left: 32%; top: 45%; animation-delay: 3.5s; }
.contact-particle-14 { left: 68%; top: 55%; animation-delay: 2s; }
.contact-particle-15 { left: 84%; top: 45%; animation-delay: 4s; }


@keyframes contactParticleFloat {

  0%, 100% {

    transform:
      translateY(0)
      scale(1);

    opacity:
      .1;

  }

  50% {

    transform:
      translateY(-25px)
      scale(1.7);

    opacity:
      .6;

  }

}


/* =========================================================
   HEADING
========================================================= */

.contact-heading {

  position:
    relative;

  z-index:
    2;

  max-width:
    750px;

  margin:
    0 auto 4.5rem;

  text-align:
    center;

}


.contact-badge {

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
    rgba(255,255,255,.08);

  border:
    1px solid
    rgba(255,255,255,.15);

  color:
    #7dd3fc;

  font-size:
    .7rem;

  font-weight:
    800;

  letter-spacing:
    1.5px;

  margin-bottom:
    1.3rem;

  backdrop-filter:
    blur(10px);

}


.contact-heading h2 {

  margin:
    0;

  color:
    white;

  font-size:
    clamp(
      2.5rem,
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


.contact-heading h2 span {

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
    contactHeadingGradient
    5s
    linear
    infinite;

}


@keyframes contactHeadingGradient {

  to {

    background-position:
      250% center;

  }

}


.contact-heading p {

  max-width:
    650px;

  margin:
    1.3rem auto 0;

  color:
    rgba(201,228,255,.8);

  font-size:
    1rem;

  line-height:
    1.8;

}


/* =========================================================
   MAIN CONTAINER
========================================================= */

.contact-container {

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
    .9fr
    1.1fr;

  gap:
    5rem;

  align-items:
    center;

}


/* =========================================================
   LEFT
========================================================= */

.contact-left {

  width:
    100%;

}


.contact-intro {

  display:
    flex;

  align-items:
    center;

  gap:
    1rem;

  margin-bottom:
    1.2rem;

}


.contact-intro-icon {

  width:
    55px;

  height:
    55px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    16px;

  background:
    rgba(255,255,255,.1);

  border:
    1px solid
    rgba(255,255,255,.15);

  color:
    #7dd3fc;

  backdrop-filter:
    blur(10px);

}


.contact-intro span {

  display:
    block;

  color:
    #7dd3fc;

  font-size:
    .65rem;

  font-weight:
    800;

  letter-spacing:
    1.5px;

}


.contact-intro h3 {

  margin:
    .2rem 0 0;

  font-size:
    2rem;

  font-weight:
    850;

}


.contact-description {

  max-width:
    550px;

  margin:
    0 0 2rem;

  color:
    rgba(201,228,255,.75);

  font-size:
    .88rem;

  line-height:
    1.8;

}


/* =========================================================
   CONTACT ITEMS
========================================================= */

.contact-items {

  display:
    flex;

  flex-direction:
    column;

  gap:
    .65rem;

}


.contact-item {

  position:
    relative;

  display:
    flex;

  align-items:
    center;

  gap:
    .9rem;

  width:
    100%;

  padding:
    .85rem;

  border-radius:
    14px;

  color:
    white;

  text-decoration:
    none;

  background:
    rgba(255,255,255,.06);

  border:
    1px solid
    rgba(255,255,255,.08);

  backdrop-filter:
    blur(10px);

  transition:
    background .3s ease,
    border-color .3s ease;

}


.contact-item:hover {

  background:
    rgba(255,255,255,.1);

  border-color:
    rgba(125,211,252,.25);

}


.contact-item-static {

  cursor:
    default;

}


.contact-item-icon {

  width:
    42px;

  height:
    42px;

  flex-shrink:
    0;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    11px;

  color:
    var(--contact-color);

  background:
    rgba(255,255,255,.08);

  border:
    1px solid
    rgba(255,255,255,.08);

}


.contact-item-content {

  display:
    flex;

  flex-direction:
    column;

  gap:
    2px;

  min-width:
    0;

}


.contact-item-content span {

  color:
    rgba(201,228,255,.55);

  font-size:
    .62rem;

}


.contact-item-content strong {

  color:
    white;

  font-size:
    .78rem;

  font-weight:
    650;

  overflow:
    hidden;

  text-overflow:
    ellipsis;

  white-space:
    nowrap;

}


.contact-item-arrow {

  margin-left:
    auto;

  color:
    rgba(255,255,255,.45);

  flex-shrink:
    0;

}


/* =========================================================
   AVAILABILITY
========================================================= */

.contact-availability {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    8px;

  margin-top:
    1.3rem;

  padding:
    .55rem .8rem;

  border-radius:
    999px;

  background:
    rgba(4,132,75,.1);

  border:
    1px solid
    rgba(4,132,75,.2);

  color:
    #72e6ad;

  font-size:
    .65rem;

  font-weight:
    700;

}


.availability-dot {

  width:
    7px;

  height:
    7px;

  border-radius:
    50%;

  background:
    #39d98a;

  box-shadow:
    0 0 10px
    #39d98a;

  animation:
    availabilityPulse
    1.8s
    infinite;

}


@keyframes availabilityPulse {

  50% {

    opacity:
      .3;

    transform:
      scale(.7);

  }

}


/* =========================================================
   FORM WRAPPER
========================================================= */

.contact-form-wrapper {

  position:
    relative;

  overflow:
    hidden;

  padding:
    2rem;

  border-radius:
    24px;

  background:
    rgba(255,255,255,.97);

  border:
    1px solid
    rgba(255,255,255,.3);

  box-shadow:
    0 30px 80px
    rgba(0,20,60,.25);

}


.contact-form-glow {

  position:
    absolute;

  width:
    250px;

  height:
    250px;

  right:
    -130px;

  top:
    -130px;

  border-radius:
    50%;

  background:
    rgba(27,150,255,.12);

  filter:
    blur(50px);

  pointer-events:
    none;

}


/* =========================================================
   FORM HEADER
========================================================= */

.contact-form-header {

  position:
    relative;

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    flex-start;

  gap:
    1rem;

  margin-bottom:
    1.8rem;

}


.contact-form-header > div:first-child span {

  color:
    var(--sf-blue);

  font-size:
    .65rem;

  font-weight:
    800;

  letter-spacing:
    1.4px;

}


.contact-form-header h3 {

  margin:
    .3rem 0 0;

  color:
    var(--sf-text-dark);

  font-size:
    1.5rem;

  font-weight:
    850;

}


.form-status {

  display:
    flex;

  align-items:
    center;

  gap:
    6px;

  padding:
    5px 9px;

  border-radius:
    999px;

  background:
    rgba(4,132,75,.07);

  color:
    var(--sf-green);

  font-size:
    .58rem;

  font-weight:
    800;

}


.form-status span {

  width:
    6px;

  height:
    6px;

  border-radius:
    50%;

  background:
    var(--sf-green);

}


/* =========================================================
   INPUT GROUP
========================================================= */

.contact-input-group {

  margin-bottom:
    1rem;

}


.contact-input-group label {

  display:
    block;

  margin-bottom:
    .4rem;

  color:
    var(--sf-text-dark);

  font-size:
    .7rem;

  font-weight:
    700;

}


.contact-input-group input,
.contact-input-group textarea {

  width:
    100%;

  padding:
    .85rem 1rem;

  border:
    1px solid
    #dfe5ec;

  border-radius:
    11px;

  background:
    #f8fafc;

  color:
    var(--sf-text-dark);

  font-family:
    inherit;

  font-size:
    .82rem;

  outline:
    none;

  transition:
    border-color .25s ease,
    box-shadow .25s ease,
    background .25s ease;

}


.contact-input-group input {

  height:
    46px;

}


.contact-input-group textarea {

  min-height:
    120px;

  resize:
    vertical;

}


.contact-input-group input::placeholder,
.contact-input-group textarea::placeholder {

  color:
    #9aa6b2;

}


.contact-input-group input:focus,
.contact-input-group textarea:focus {

  border-color:
    var(--sf-blue);

  background:
    white;

  box-shadow:
    0 0 0 4px
    rgba(1,118,211,.08);

}


/* =========================================================
   SUBMIT
========================================================= */

.contact-submit {

  position:
    relative;

  overflow:
    hidden;

  width:
    100%;

  min-height:
    48px;

  margin-top:
    .3rem;

  border:
    none;

  border-radius:
    11px;

  background:
    linear-gradient(
      100deg,
      #032d60,
      #0176d3,
      #1b96ff
    );

  background-size:
    200% auto;

  color:
    white;

  font-family:
    inherit;

  font-size:
    .82rem;

  font-weight:
    750;

  cursor:
    pointer;

  box-shadow:
    0 10px 25px
    rgba(1,118,211,.2);

  animation:
    contactButtonGradient
    5s
    linear
    infinite;

}


@keyframes contactButtonGradient {

  to {

    background-position:
      200% center;

  }

}


.contact-submit-content {

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    8px;

}


.contact-form-note {

  margin:
    .9rem 0 0;

  text-align:
    center;

  color:
    #9aa6b2;

  font-size:
    .62rem;

}


/* =========================================================
   BOTTOM
========================================================= */

.contact-bottom {

  position:
    relative;

  z-index:
    2;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    .6rem;

  width:
    fit-content;

  margin:
    4rem auto 0;

  padding:
    .7rem 1.1rem;

  border-radius:
    999px;

  background:
    rgba(255,255,255,.06);

  border:
    1px solid
    rgba(255,255,255,.1);

  color:
    rgba(255,255,255,.6);

  font-size:
    .65rem;

  font-weight:
    700;

}


.contact-bottom span {

  color:
    #7dd3fc;

}


.contact-bottom i {

  color:
    rgba(255,255,255,.3);

  font-style:
    normal;

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 900px) {

  .contact-container {

    grid-template-columns:
      1fr;

    gap:
      3rem;

    max-width:
      700px;

  }

}


@media (max-width: 600px) {

  .contact-section {

    padding:
      5rem 1rem;

  }


  .contact-heading {

    margin-bottom:
      3rem;

  }


  .contact-heading h2 {

    font-size:
      2.3rem;

    letter-spacing:
      -1px;

  }


  .contact-heading p {

    font-size:
      .85rem;

  }


  .contact-intro h3 {

    font-size:
      1.7rem;

  }


  .contact-form-wrapper {

    padding:
      1.3rem;

    border-radius:
      18px;

  }


  .contact-form-header {

    flex-direction:
      column;

  }


  .form-status {

    align-self:
      flex-start;

  }


  .contact-bottom {

    flex-wrap:
      wrap;

    text-align:
      center;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .contact-section *,
  .contact-section *::before,
  .contact-section *::after {

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

export default Contact;
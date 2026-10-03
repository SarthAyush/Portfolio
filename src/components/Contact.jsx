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
import "../styles/Contact.css";

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

export default Contact;

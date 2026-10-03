import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Trophy,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const contactCards = [
  {
    icon: <Mail size={20} />,
    title: "Email Address",
    value: "sarthak@astreait.com",
    href: "mailto:sarthak@astreait.com",
  },
  {
    icon: <Phone size={20} />,
    title: "Phone Number",
    value: "+91 8687926699",
    href: "tel:+918687926699",
  },
  {
    icon: <FaLinkedin size={20} />,
    title: "LinkedIn",
    value: "linkedin.com/in/sarthak-saxena-dev",
    href: "https://linkedin.com/in/sarthak-saxena-dev",
  },
  {
    icon: <Trophy size={20} />,
    title: "Trailblazer Profile",
    value: "trailblazer.me/id/sarthaksaxena2004",
    href: "https://trailblazer.me/id/sarthaksaxena2004",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Noida, Uttar Pradesh, India",
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const mailtoUrl = `mailto:sarthak@astreait.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0A---%0ASender Name: ${encodeURIComponent(
      form.name
    )}%0ASender Email: ${encodeURIComponent(form.email)}`;

    window.open(mailtoUrl, "_blank");
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>Connect</span>
        </div>
        <h2 className="section-title">
          Let's Build Something <span className="gradient-text">Extraordinary</span>
        </h2>
        <p className="section-desc">
          Have an opportunity, project, or question? Feel free to reach out directly through any channel below.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact Info Cards */}
        <div className="contact-info-cards">
          {contactCards.map((item, idx) => (
            <motion.div
              key={idx}
              className="contact-item-box"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="contact-icon-bubble">{item.icon}</div>
              <div className="contact-details-text">
                <h4>{item.title}</h4>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ color: "var(--text-main)", textDecoration: "none" }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Form */}
        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Send a Direct Message</h3>
          <p className="sub">I typically respond within 24 to 48 hours.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi Sarthak, let's discuss..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>Email Client Opened!</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
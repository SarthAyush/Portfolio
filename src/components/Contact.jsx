import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, IdCard, Trophy } from "lucide-react";
import { SiSalesforce, SiLinkedin } from "react-icons/si";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yaha aap EmailJS / Formspree API call kar sakte ho
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "sarthak@astreait.com",
      href: "mailto:sarthak@astreait.com",
    },
    {
      icon: <Phone size={20} />,
      label: "+91 8687926699",
      href: "tel:+918687926699",
    },
    {
      icon: <MapPin size={20} />,
      label: "Noida, Uttar Pradesh, India",
      href: null,
    },
    {
      icon: <IdCard size={20} />,
      label: "LinkedIn Profile",
      href: "https://linkedin.com/in/sarthak-saxena-dev",
    },
    {
      icon: <Trophy size={20} />,
      label: "Trailblazer Profile",
      href: "https://trailblazer.me/id/sarthaksaxena2004",
    },
  ];

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1rem",
    borderRadius: "10px",
    border: "1px solid #E0E5EB",
    marginBottom: "1rem",
    fontSize: "0.95rem",
    outline: "none",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        background: "var(--sf-gradient)",
        color: "#fff",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.2rem",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "0.8rem",
        }}
      >
        Let's <span style={{ color: "#1B96FF" }}>Connect</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        style={{
          textAlign: "center",
          color: "#C9E4FF",
          marginBottom: "3.5rem",
        }}
      >
        Open to new opportunities and collaborations — feel free to reach out.
      </motion.p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.map((item, i) => (
            <motion.a
              key={i}
              href={item.href || undefined}
              target={item.href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={item.href ? { x: 8 } : {}}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                marginBottom: "0.8rem",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                cursor: item.href ? "pointer" : "default",
              }}
            >
              <span style={{ color: "#1B96FF" }}>{item.icon}</span>
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Right: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: "#fff", borderRadius: "16px", padding: "2rem" }}
        >
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ ...inputStyle, minHeight: "110px", resize: "vertical" }}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              padding: "0.9rem",
              background: "var(--sf-blue)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {sent ? (
              "Message Sent ✓"
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

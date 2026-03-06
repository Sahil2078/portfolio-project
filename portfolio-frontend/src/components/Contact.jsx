
import React, { useState } from "react";
import api from "../services/api";
import "./Contact.css"; // ← create this file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      {/* LEFT SIDE - Form */}
      <div className="contact-left">
        <h2>Contact Me</h2>
        <p>Let’s connect</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>

      {/* RIGHT SIDE - Connect links */}
      <div className="contact-right">
        <h3>Connect with me</h3>

        <a href="https://mail.google.com/mail/u/0/#inbox" className="contact-link">📧 Email</a>
        <a href="https://www.linkedin.com/in/sahil-shetty-9b0646235/" className="contact-link">🔗 LinkedIn</a>
        <a href="https://github.com/Sahil2078?tab=repositories" className="contact-link">🐙 GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
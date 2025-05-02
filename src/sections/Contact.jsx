import React, { useState } from "react";
import styles from "../css/Contact.module.css";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setMessageError("");

    let valid = true;

    if (!name.trim()) {
      setNameError("Please enter your name.");
      valid = false;
    }

    if (!email.trim()) {
      setEmailError("Please enter your email address.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!message.trim()) {
      setMessageError("Please enter your message.");
      valid = false;
    }

    if (!valid) {
      alert("Please fill out all required fields correctly.");
      return;
    }

    e.target.submit();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h1>Contact</h1>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <p>
            Feel free to reach out with any questions, feedback, or opportunities.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/binildangol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Binil-Dangol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            {/* You can include the Twitter icon if needed:
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a> */}
          </div>
        </div>
        <div className={styles.contactFormContainer}>
          <form
            className={styles.contactForm}
            action="https://formspree.io/f/xrbqewwq"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {nameError && <span className={styles.errorMessage}>{nameError}</span>}
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <span className={styles.errorMessage}>{emailError}</span>}
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {messageError && <span className={styles.errorMessage}>{messageError}</span>}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className={styles.alternativeContacts}>
        <p>
          Alternatively, email me at:{" "}
          <a href="mailto:binildangol.005@gmail.com">
            binildangol.005@gmail.com
          </a>
        </p>
        <p>
          <FaPhone style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
          Call me at:{" "}
          <a href="tel:+9779849775477">+977 9849775477</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
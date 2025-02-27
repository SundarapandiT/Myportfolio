import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Let's Connect! 📬</h2>

      <div className="contact-info">
        <p><FaPhoneAlt size={18} color="#007BFF" /> <b>Phone:</b> +91 6369017779</p>
        <p>
          <a href="mailto:sundarapandi1707@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={18} color="#D44638" /> <b>Email:</b> sundarapandi1707@gmail.com
          </a>
        </p>
      </div>

      <div className="social-links">
        <a href="mailto:sundarapandi1707@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon gmail">
          <FaEnvelope size={40} />
        </a>
        <a href="https://github.com/SundarapandiT/" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/sundarapandi-t-5a1772247" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <FaLinkedin size={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;

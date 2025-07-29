import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="kontakt" className="contact">
      <h2>Kontakt</h2>
      <form action="mailto:Daniel.rusnok@gmail.com" method="post" encType="text/plain">
        <div className="form-group">
          <label htmlFor="name">Jméno:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Zpráva:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Odeslat</button>
      </form>
      <div className="social-row">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
          />
        </a>
      </div>
      <div className="contact-email">
        <a href="mailto:Daniel.rusnok@gmail.com">Daniel.rusnok@gmail.com</a>
      </div>
    </section>
  );
}

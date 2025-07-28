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
    </section>
  );
}

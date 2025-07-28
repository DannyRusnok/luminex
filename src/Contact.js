import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="kontakt" className="contact">
      <h2>Kontakt</h2>
      <form action="mailto:Daniel.rusnok@gmail.com" method="post" encType="text/plain">
        <div className="form-group">
          <label>
            Jméno:
            <input type="text" name="name" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Zpráva:
            <textarea name="message" required />
          </label>
        </div>
        <button type="submit">Odeslat</button>
      </form>
    </section>
  );
}

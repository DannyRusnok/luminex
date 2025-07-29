import React from 'react';
import Gallery from './Gallery.js';
import Navbar from './Navbar.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="mobile-title">Daniel Rusnok Portfolio</h1>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

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

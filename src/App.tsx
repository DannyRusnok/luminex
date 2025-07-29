import React from 'react';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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

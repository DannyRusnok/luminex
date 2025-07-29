import React from 'react';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

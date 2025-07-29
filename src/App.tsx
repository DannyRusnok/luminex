import React from 'react';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Layout } from './styled';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Navbar />
      <Gallery />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;

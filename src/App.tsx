import React from 'react';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Layout, GlobalStyle } from './styled';
import Contact from './components/Contact';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <Filter />
        <Gallery />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}

export default App;

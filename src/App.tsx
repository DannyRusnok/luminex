import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import { Layout, GlobalStyle } from './styled';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <HeroSection />
        <Portfolio />
        <Contact />
        <Footer />
      </Layout>
      <ScrollToTopButton />
    </>
  );
}

export default App;

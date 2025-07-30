import React, { useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import { Layout, GlobalStyle } from './styled';
import Contact from './components/Contact';
import Filter from './components/Filter/Filter';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <HeroSection />
        <Filter selectedTags={selectedTags} onChange={setSelectedTags} />
        <Gallery selectedTags={selectedTags} />
        <Contact />
        <Footer />
      </Layout>
      <ScrollToTopButton />
    </>
  );
}

export default App;

import React, { useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Layout, GlobalStyle } from './styled';
import Contact from './components/Contact';
import Filter from './components/Filter/Filter';

function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <Filter selectedTags={selectedTags} onChange={setSelectedTags} />
        <Gallery selectedTags={selectedTags} />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}

export default App;

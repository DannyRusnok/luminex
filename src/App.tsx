import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import { Layout, GlobalStyle } from './styled';
import { ThemeProvider } from 'styled-components';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Portfolio } from './components/Portfolio';
import Exhibitions from './components/Exhibitions';
import { luminexTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={luminexTheme}>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <HeroSection />
        <Exhibitions />
        <Portfolio />
        <Contact />
        <Footer />
      </Layout>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;

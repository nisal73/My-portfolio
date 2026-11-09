import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Sticky Header Navigation */}
        <Navbar />
        
        {/* Main Portfolio Sections */}
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer & Back-to-Top Button */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

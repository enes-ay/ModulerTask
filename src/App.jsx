import React, { useState, useEffect } from 'react';
import SideMenu from './components/SideMenu';
import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import "./App.css"

function App() {
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [secondaryColor, setSecondaryColor] = useState('#FFFFFF');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState({
    portfolio: true,
    about: true,
    blog: true,
    contact: true,
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.body.style.fontFamily = fontFamily;
  }, [primaryColor, secondaryColor, fontFamily]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Landing />
      <div className="flex">
        <SideMenu
          setPrimaryColor={setPrimaryColor}
          setSecondaryColor={setSecondaryColor}
          setFontFamily={setFontFamily}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          sections={sections}
          setSections={setSections}
        />
        <div className="flex-grow p-8" style={{ backgroundColor: 'var(--secondary-color)' }}>
          {sections.about && <About />}
          {sections.portfolio && <Portfolio />}
          {sections.blog && <Blog />}
          {sections.contact && <Contact />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

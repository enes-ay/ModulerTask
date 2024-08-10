import React from 'react';
import { LuPencil } from "react-icons/lu";

const SideMenu = ({ setPrimaryColor, setSecondaryColor, setFontFamily, isOpen, toggleMenu, sections, setSections }) => {
  // Tüm bölümleri gizle/göster
  const toggleAllSections = () => {
    const allHidden = Object.values(sections).every(value => !value); // Tüm bölümler zaten gizli mi?
    setSections({
      portfolio: allHidden ? true : false,
      about: allHidden ? true : false,
      blog: allHidden ? true : false,
      contact: allHidden ? true : false,
    });
  };

  const toggleSection = (section) => {
    setSections(prevSections => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div>
      <button 
        onClick={toggleMenu} 
        className={`fixed top-4 ${isOpen ? 'left-64' : 'left-4'} bg-gray-800 text-white p-2 rounded mt-40 z-50`}
      >
        <LuPencil />
      </button>
      {isOpen && (
        <div 
          className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out z-40" 
          style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}  
        >
          <h2 className="text-2xl mb-4 font-default">Style Switcher</h2>
          <div className="mb-4">
            <label className="block mb-2 font-default">Text Color</label>
            <input
              type="color"
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-default">Background Color</label>
            <input
              type="color"
              onChange={(e) => setSecondaryColor(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-default">Font Family</label>
            <select
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded font-default"
            >
              <option value="sans-serif">Sans Serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
            </select>
          </div>
          <div className="mb-4">
            <h3 className="text-xl mb-2 font-default">Toggle Sections</h3>
            <button onClick={() => toggleSection('portfolio')} className="w-full mb-2 bg-gray-700 p-2 rounded font-default">
              {sections.portfolio ? 'Hide' : 'Show'} Portfolio
            </button>
            <button onClick={() => toggleSection('about')} className="w-full mb-2 bg-gray-700 p-2 rounded font-default">
              {sections.about ? 'Hide' : 'Show'} About Us
            </button>
            <button onClick={() => toggleSection('blog')} className="w-full mb-2 bg-gray-700 p-2 rounded font-default">
              {sections.blog ? 'Hide' : 'Show'} Blog
            </button>
            <button onClick={() => toggleSection('contact')} className="w-full mb-2 bg-gray-700 p-2 rounded font-default">
              {sections.contact ? 'Hide' : 'Show'} Contact
            </button>
          </div>
          <div className="mb-4">
            <button 
              onClick={toggleAllSections} 
              className="w-full bg-red-600 p-2 rounded font-default"
            >
              {Object.values(sections).every(value => !value) ? 'Show All' : 'Hide All'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;

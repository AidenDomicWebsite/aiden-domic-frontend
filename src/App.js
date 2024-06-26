import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import FitnessPage from './Pages/FitnessPage';
import BreathworkPage from './Pages/BreathworkPage';
import NutritionPage from './Pages/NutritionPage';
import MeditationPage from './Pages/MeditationPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons'
import Footer from './Components/Footer';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Disable scrolling when the menu is open
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    // Enable scrolling when the menu is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <Router>
      <div class="main-container">
        <header>
          <FontAwesomeIcon className={menuOpen ? 'x-icon' : 'x-icon-hide'} icon={faX} onClick={toggleMenu} />
          <FontAwesomeIcon className='nav-mobile-icon' icon={faBars} onClick={toggleMenu} />
          <Link id='home' onClick={closeMenu} to="/">STRENGTH TO BREATH</Link>
          <nav className={menuOpen ? 'menu-open' : ''}>
            <Link to="/services" onClick={closeMenu}>SERVICES <FontAwesomeIcon className='chevron' icon={faChevronRight} /></Link>
            <Link to="/contact" onClick={closeMenu}>CONTACT <FontAwesomeIcon className='chevron' icon={faChevronRight} /></Link>
          </nav>
        </header>
        <body>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/fitness" element={<FitnessPage />} />
            <Route path="/services/breathwork" element={<BreathworkPage />} />
            <Route path="/services/nutrition" element={<NutritionPage />} />
            <Route path="/services/meditation" element={<MeditationPage />} />
          </Routes>
          {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </body>
        <footer className={menuOpen ? 'overlay-footer' : ''}>
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;

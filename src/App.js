import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div>
        <header>
          <FontAwesomeIcon className={menuOpen ? 'x-icon' : 'x-icon-hide'} icon={faX} onClick={toggleMenu} />
          <FontAwesomeIcon className='nav-mobile-icon' icon={faBars} onClick={toggleMenu} />
          <Link id='home' onClick={closeMenu} to="/">STRENTH TO BREATH</Link>
          <nav className={menuOpen ? 'menu-open' : ''}>
          <Link to="/services" onClick={closeMenu}>SERVICES <FontAwesomeIcon className='chevron' icon={faChevronRight} /></Link>
          <Link to="/contact" onClick={closeMenu}>CONTACT <FontAwesomeIcon className='chevron' icon={faChevronRight} /></Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </Router>
  );
}

export default App;

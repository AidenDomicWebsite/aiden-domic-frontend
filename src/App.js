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
        <body>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        <footer>
        <div className='test'>
        <Link className='footerhome' onClick={closeMenu} to="/">STRENTH TO BREATH</Link>
        <Link className='footerhome' onClick={closeMenu} to="/contact">CONTACT</Link>
        </div>
        <p className='footer-text'>50/100 example st, Melbourne</p>
        <p className='footer-text'>example@email.com</p>
        <p className='footer-text'>0412 345 678</p>
        </footer>
        </body>
      </div>
    </Router>
  );
}

export default App;

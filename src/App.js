import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import NavIcon from './Assets/Icons/NavIcon';
import XIcon from './Assets/Icons/XIcon';

function App() {
  return (
    <Router>
    <div>
    <header>
    <NavIcon/>
    <XIcon/>
      <Link id='home'to="/">STRENTH TO BREATH</Link>
        <nav>
            <Link to="/services">SERVICES</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
      </header>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
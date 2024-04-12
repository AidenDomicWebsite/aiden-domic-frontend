import React, { useState } from 'react';

const Footer = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    // Enable scrolling when the menu is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={menuOpen ? 'overlay-footer' : ''}>
      <div>
        <a className='footerhome' href="/" onClick={closeMenu}>STRENGTH TO BREATH</a>
        <a className='footerhome' href="/contact" onClick={closeMenu}>CONTACT US</a>
      </div>
      <div>
        {/* <p className='footer-text'>50/100 example st, Melbourne</p>
        <p className='footer-text'>example@email.com</p> */}
        <p className='footer-text'>0478 662 654</p>
      </div>
    </div>
  );
};

export default Footer;
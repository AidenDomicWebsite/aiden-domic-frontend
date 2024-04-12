import React from 'react';
import ContactFormCard from '../Components/ContactFormCard'

const ContactPage = () => {
    return (
      <div className='contact-page-container'>
        <div className='contact-details'>
          <h1 className='our-details-heading'>OUR DETAILS</h1>
          <a className='footerhome' href="/" >STRENGTH TO BREATH</a>
          <p className=''>50/100 example st, Melbourne</p>
          <p >example@email.com</p>
          <p >0412 345 678</p>
        </div>
        <div className='contact-form-container'>
          < ContactFormCard/>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
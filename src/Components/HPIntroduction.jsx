import React from 'react';
import NewAppBannerMobile from '../Assets/NewAppBannerMobile.png'

const HPIntroduction = () => {
    return (
      <div>
       <img className='newappbanner' src={NewAppBannerMobile} alt="New App Banner" />
      <h1 className='heading1'>UNLOCK YOUR FULL POTENTIAL.</h1>
      <h1 className='heading2'>TRY OUR SPECIALISED TRAINING PROGRAMS.</h1>
      <p className='main-content-text'>
        Are you ready to become a high performer in your chosen field? Whether you're a corporate professional, athlete, busy parent, or everyday individual striving for excellence, our upcoming app launch is designed to help you elevate your performance and upgrade your life.
      </p>
      </div>
    );
  };
  
  export default HPIntroduction;
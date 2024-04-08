import React from 'react';
import Embrace from '../Assets/Embrace.png';

const Banner2 = () => {
    return (
      <div>
       <div className='imgs-container'>
        <img className='mainpageimgs' src={Embrace} alt="Embrace" />
        <h1 className='img-text'>Embrace Growth & Transformation</h1>
      </div>
      <p className='main-content-text'>
        Regardless of your background or current status, you possess the capacity for growth and transformation. Our training programs are tailored to help you break free from stagnation and ascend to even greater heights.
      </p>
      </div>
    );
  };
  
  export default Banner2;
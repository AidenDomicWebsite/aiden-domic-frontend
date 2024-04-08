import React from 'react';
import Cultivate from '../Assets/Cultivate.png';

const Banner3 = () => {
  return (
    <div>
      <div className='imgs-container'>
        <img className='mainpageimgs' src={Cultivate} alt="Cultivate" />
        <h1 className='img-text'>Cultivate Positivity</h1>
      </div>
      <div>
        <p className='main-content-text'>
          Your environment plays a crucial role in your journey towards success. Cultivating positivity in your surroundings can propel you towards your goals and create a conducive space for growth.
        </p>
      </div>
    </div>
  );
};

export default Banner3;
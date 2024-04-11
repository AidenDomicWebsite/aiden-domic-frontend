import React from 'react';
import BreathworkImg from '../Assets/Breathwork_img.png';

const BreathworkCard = () => {
  return (
    <div>
      <div className='imgs-container'>
        <a href='/services/breathwork'>
          <img className='mainpageimgs' src={BreathworkImg} alt="Breathwork_img" />
          <h1 className='img-text'>BREATHWORK</h1>
        </a>
      </div>
    </div>
  );
};

export default BreathworkCard;
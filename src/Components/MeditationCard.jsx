import React from 'react';
import MeditationImg from '../Assets/Meditation_img.png';

const MeditationCard = () => {
  return (
    <div>
      <div className='imgs-container'>
        <a href='/services/meditation'>
          <img className='mainpageimgs' src={MeditationImg} alt="Meditation_img" />
          <h1 className='img-text'>MEDITATION</h1>
        </a>
      </div>
    </div>
  );
};

export default MeditationCard;
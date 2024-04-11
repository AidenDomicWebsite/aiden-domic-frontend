import React from 'react';
import FitnessImg from '../Assets/Fitness_img.png';

const FitnessCard = () => {
  return (
    <div>
      <div className='imgs-container'>
        <a href='/services/fitness'>
          <img className='mainpageimgs' src={FitnessImg} alt="Fitness_img"/>
          <h1 className='img-text'>FITNESS</h1>
        </a>
      </div>
    </div>
  );
};

export default FitnessCard;
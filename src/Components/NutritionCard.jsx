import React from 'react';
import NutritionImg from '../Assets/Nutrition_img.png';

const NutritionCard = () => {
  return (
    <div>
      <div className='imgs-container'>
        <a href='/services/nutrition'>
          <img className='mainpageimgs' src={NutritionImg} alt="Nutrition_img" />
          <h1 className='img-text'>NUTRITION</h1>
        </a>
      </div>
    </div>
  );
};

export default NutritionCard;
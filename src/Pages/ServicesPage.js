import React from 'react';
import FitnessCard from '../Components/FitnessCard';
import BreathworkCard from '../Components/BreathworkCard';
import NutritionCard from '../Components/NutritionCard';
import MeditationCard from '../Components/MeditationCard';

const ServicesPage = () => {
    return (
      <div className='test'>
        <div className='service-card-container'>
          <FitnessCard/>
          <BreathworkCard/>
          <NutritionCard/>
          <MeditationCard/>
        </div>
      </div>
    );
  };
  
  export default ServicesPage;
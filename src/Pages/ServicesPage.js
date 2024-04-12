import React from 'react';
import FitnessCard from '../Components/FitnessCard';
import BreathworkCard from '../Components/BreathworkCard';
import NutritionCard from '../Components/NutritionCard';
import MeditationCard from '../Components/MeditationCard';

const ServicesPage = () => {
    return (
      <div>
        <div className='service-card-container'>
        <div className='test'><FitnessCard/></div>
        <div className='test' ><BreathworkCard/></div>
        <div className='test'><NutritionCard/></div>
        <div className='test'><MeditationCard/></div>
        </div>
      </div>
    );
  };
  
  export default ServicesPage;
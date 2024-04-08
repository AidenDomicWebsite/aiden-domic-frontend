import React from 'react';
import HPIntroduction from '../Components/HPIntroduction';
import Banner1 from '../Components/Banner1';
import Banner2 from '../Components/Banner2';
import Banner3 from '../Components/Banner3';
import Banner4 from '../Components/Banner4';

const HomePage = () => {
  return (
    <div>
      <div className="background-img-container">
        <h1 className='tagline'>FITNESS | BREATHWORK | NUTRITION | MEDITATION</h1>
      </div>
      <HPIntroduction/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
    </div>
    
  );
};
  
  export default HomePage;
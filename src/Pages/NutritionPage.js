import React from 'react';
import NutritionImg from '../Assets/Nutrition_img.png';
import NutritionBanner from '../Assets/Nutrition_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const NutritionPage = () => {
  return (
    <div>
      <div class="service-banner-container">
        <img className='service-image-mobile' src={NutritionImg} alt="Nutrition_img"/>
        <img className='service-image-desktop' src={NutritionBanner} alt="Nutrition_img"/>
        <h1 className='service-title2'>NUTRITION</h1>
        <h2 className='service-tag2'>Powering Success from Within</h2>
        <a className='service-cta2' href='/contact'><h2 >Speak to us about our nutrition program<FontAwesomeIcon className='cta-icon' icon={faSquareArrowUpRight} /></h2></a>
      </div>
      <div>
        <p className='page-blurb'>
        Nutrition plays a crucial role in fuelling success from within. 
        <br></br>
        <br></br>
        Our nutrition program is meticulously crafted to provide high achievers with the strategic fuelling they need to sustain peak performance. With personalised meal plans, nutritional coaching, and performance-focused supplementation, clients optimise their dietary habits to support their ambitious goals and maintain optimal energy levels.
        </p>
      </div>
    </div>
  );
};
  
  export default NutritionPage;
import React from 'react';
import FitnessImg from '../Assets/Fitness_img.png';
import FitnessBanner from '../Assets/Fitness_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const FitnessPage = () => {
    return (
      <div>
        <div class="service-banner-container">
          <img className='service-image-mobile' src={FitnessImg} alt="Fitness_img"/>
          <img className='service-image-desktop' src={FitnessBanner} alt="Fitness_img"/>
          <h1 className='service-title'>FITNESS</h1>
          <h2 className='service-tag'>Sculpting Success with Mind-Body Mastery</h2>
          <a className='service-cta' href='/contact'><h2 >Speak to us about expanding your fitness <FontAwesomeIcon className='cta-icon' icon={faSquareArrowUpRight} /></h2></a>
        </div>
        <div>
          <p className='page-blurb'>
          Our fitness programs are designed to sculpt success by focusing on mind-body mastery. This is a no frills attached approach… Enjoyment is still paramount to sessions so no need to worry. We will still have some fun and relationships are of upmost importance. Due to our understanding of the demands of high-pressure environments we tailor workouts to enhance both physical strength and mental resilience. 
          <br></br>
          <br></br>
          We realise everyone has their own unique set of goals. With our personalised training regimens and expert guidance, clients develop the physical capacity to excel in their respective fields.
          </p>
        </div>
      </div>
    );
  };
  
  export default FitnessPage;


  

     {/* <h1 className='service-title'>FITNESS:</h1>
        <h2 className='service-tag'>Sculpting Success with Mind-Body Mastery</h2>
        <a href='/contact'><h2 className='service-cta'>Speak to us about expanding your fitness <FontAwesomeIcon className='cta-icon' icon={faSquareArrowUpRight} /></h2></a> */}
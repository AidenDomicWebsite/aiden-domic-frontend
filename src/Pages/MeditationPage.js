import React from 'react';
import MeditationImg from '../Assets/Meditation_img.png';
import MeditationBanner from '../Assets/Meditation_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const MeditationPage = () => {
  return (
    <div>
      <div class="service-banner-container">
        <img className='service-image-mobile' src={MeditationImg} alt="Meditation_img"/>
        <img className='service-image-desktop' src={MeditationBanner} alt="Meditation_img"/>
        <h1 className='service-title3'>MEDITATION</h1>
        <h2 className='service-tag3'>Enhancing Mental Clarity and Performance Precision</h2>
        <a className='service-cta3' href='/contact'><h2 >Speak to us about improving your breathwork<FontAwesomeIcon className='cta-icon' icon={faSquareArrowUpRight} /></h2></a>
      </div>
      <div>
        <p className='page-blurb'>
        In the fast-paced world of high performance, finding moments of calm amidst the chaos is essential. Our meditation program offers practical techniques and mindfulness practices to cultivate clarity. By integrating techniques such as self awareness, gratitude and meditation into daily routines, clients learn to navigate challenges with grace, resilience, and a centered mindset, ensuring they remain composed and focused even in the most demanding situations.
        </p>
      </div>
    </div>
  );
};
  
  export default MeditationPage;
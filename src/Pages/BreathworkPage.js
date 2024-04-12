import React from 'react';
import BreathworkImg from '../Assets/Breathwork_img.png';
import BreathworkBanner from '../Assets/Breathwork_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const BreathworkPage = () => {
  return (
    <div>
      <div class="service-banner-container">
        <img className='service-image-mobile' src={BreathworkImg} alt="Fitness_img"/>
        <img className='service-image-desktop' src={BreathworkBanner} alt="Fitness_img"/>
        <h1 className='service-title1'>BREATHWORK</h1>
        <h2 className='service-tag1'>Enhancing Mental Clarity and Performance Precision</h2>
        <a className='service-cta1' href='/contact'><h2 >Speak to us about improving your breathwork<FontAwesomeIcon className='cta-icon' icon={faSquareArrowUpRight} /></h2></a>
      </div>
      <div>
        <p className='page-blurb'>
        Breathwork is a cornerstone to our approach in optimising performance. If you already participate in breath work you will know of its benefits and if you don’t… YOU SHOULD.

        Through specialised techniques, we help clients harness the power of their breath to enhance mental clarity and precision in performance. By mastering breathing patterns, individuals gain greater control over stress, focus, and energy levels, resulting in heightened performance and presence in every endeavor. 
        <br></br>
        <br></br>
        We realise everyone has their own unique set of goals. With our personalised training regimens and expert guidance, clients develop the physical capacity to excel in their respective fields.
        </p>
      </div>
    </div>
  );
};
  
  export default BreathworkPage;
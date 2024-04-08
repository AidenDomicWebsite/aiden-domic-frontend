import React from 'react';
import NewAppBannerMobile from '../Assets/NewAppBannerMobile.png';
import Discover from '../Assets/Discover.png';
import Embrace from '../Assets/Embrace.png';
import Cultivate from '../Assets/Cultivate.png';
import Fear from '../Assets/Fear.png';

const HomePage = () => {
  return (
    <div>
      <div className="background-container">
        <h1 className='tagline'>FITNESS | BREATHWORK | NUTRITION | MEDITATION</h1>
      </div>
      <div className='test'></div>
      <img className='newappbanner' src={NewAppBannerMobile} alt="New App Banner" />
        <h1 className='heading1'>UNLOCK YOUR FULL POTENTIAL.</h1>
        <h1 className='heading2'>TRY OUR SPECIALISED TRAINING PROGRAMS.</h1>
        <p className='main-content-text'>
        Are you ready to become a high performer in your chosen field? Whether you're a corporate professional, athlete, busy parent, or everyday individual striving for excellence, our upcoming app launch is designed to help you elevate your performance and upgrade your life.
        </p>
      
      {/* Banner 1 */}
      <div className='main-content-imgs'>
        <img className='mainpageimgs' src={Discover} alt="Discover" />
        <h1 className='img-text'>Discover the Power of Mindset</h1>
      </div>
      <p className='main-content-text'>
        At the core of our programs lies the importance of mindset in achieving your desired outcomes. Our thoughts, habits, and beliefs shape our identities, and by eliminating self-imposed limitations, you can unlock your full potential.
      </p>
      {/* Banner 2 */}
      <div className='main-content-imgs'>
        <img className='mainpageimgs' src={Embrace} alt="Embrace" />
        <h1 className='img-text'>Embrace Growth & Transformation</h1>
      </div>
      <p className='main-content-text'>
        Regardless of your background or current status, you possess the capacity for growth and transformation. Our training programs are tailored to help you break free from stagnation and ascend to even greater heights.
      </p>
      {/* Banner 3 */} 
      <div className='main-content-imgs'>
        <img className='mainpageimgs' src={Cultivate} alt="Cultivate" />
        <h1 className='img-text'>Cultivate Positivity</h1>
      </div>
      <p className='main-content-text'>
        Your environment plays a crucial role in your journey towards success. Cultivating positivity in your surroundings can propel you towards your goals and create a conducive space for growth.
      </p>
      {/* Banner 4 */}
      <div className='main-content-imgs'>
        <img className='mainpageimgs' src={Fear} alt="Fear" />
        <h1 className='img-text'>Don't Let Fear Hold You Back</h1>
      </div>
      <p className='main-content-text'>
        The only obstacle standing in your way is yourself. Embrace your potential today and join us on a journey towards realising your aspirations. Stay tuned for updates on our app launch and get ready to embark on a transformative journey towards becoming a high performer.
        </p>
    </div>
    
  );
};
  
  export default HomePage;
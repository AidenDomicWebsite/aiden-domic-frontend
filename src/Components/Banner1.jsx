import React from 'react';
import Discover from '../Assets/Discover.png';

const Banner1 = () => {
    return (
      <div>
       <div className='imgs-container'>
        <img className='mainpageimgs' src={Discover} alt="Discover" />
        <h1 className='img-text'>Discover the Power of Mindset</h1>
      </div>
      <p className='main-content-text'>
        At the core of our programs lies the importance of mindset in achieving your desired outcomes. Our thoughts, habits, and beliefs shape our identities, and by eliminating self-imposed limitations, you can unlock your full potential.
      </p>
      </div>
    );
  };
  
  export default Banner1;
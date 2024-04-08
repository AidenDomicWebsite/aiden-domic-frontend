import React from 'react';
import Fear from '../Assets/Fear.png';

const Banner4 = () => {
    return (
      <div>
       <div className='imgs-container'>
        <img className='mainpageimgs' src={Fear} alt="Fear" />
        <h1 className='img-text'>Don't Let Fear Hold You Back</h1>
      </div>
      <p className='main-content-text'>
        The only obstacle standing in your way is yourself. Embrace your potential today and join us on a journey towards realising your aspirations. Stay tuned for updates on our app launch and get ready to embark on a transformative journey towards becoming a high performer.
        </p>
      </div>
    );
  };
  
  export default Banner4;
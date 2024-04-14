import React from 'react';
import promoVideo from '../Assets/Promo_video.mp4';

const PromoVideo = () => {
  return (
    <div>
        <div className='video-container'>
            <video controls>
                <source src={promoVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    
  );
};
  
  export default PromoVideo;
import React from 'react';
import promoVideo from '../Assets/Promo_video.mp4';

const PromoVideo = () => {
  return (
    <div>
        <div>
            <video src={promoVideo} autoPlay loop muted>
            </video>
        </div>
    </div>
    
  );
};
  
  export default PromoVideo;
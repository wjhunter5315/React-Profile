import React from "react";
import skyDay from "../../assets/skyDay.png";
import skyNight from "../../assets/skyNight.png";
import ReactCompareImage from 'react-compare-image';

// const sliderImages = {
//    skyNight,
//    skyNight
// }

function Slider() {

   return(
      <div style={{ maxWidth: '75%', marginLeft: '10%', marginTop: '2%', marginBottom: '5%' }}>
         <ReactCompareImage leftImage={skyDay} rightImage={skyNight} leftImageCss={{ height: '100%' }}
        rightImageCss={{ height: '100%' }}/>
      </div>
      
   )
}

export default Slider;
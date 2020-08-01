import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 import '../Slide.css';

 import slide_2 from '../images/slide_3.jpg';
import slide_3 from '../images/slide_2.jpg';
import slide_4 from '../images/slide_1.jpg';
import slide_5 from '../images/slide_4.jpg';


const slideImages =[
    slide_2,
  slide_3, 
  slide_4,
  slide_5

];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
         
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
         
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;
import Carousel from 'react-bootstrap/Carousel';
import './slideShow.css'
import {Imagefind } from "../images/images.jsx";
export function Slideshow() {

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Imagefind i ={1} />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Imagefind i ={2} />
        
      </Carousel.Item>
      <Carousel.Item>
      <Imagefind i ={3} />
      
      </Carousel.Item>
    </Carousel>
  );
}

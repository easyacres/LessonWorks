import React from 'react';
import {Carousel} from 'react-bootstrap'
import './Carousel.css'


function CarouselPDF() {
    return (
<Carousel>
  <Carousel.Item>
    <img
      height={500}
      style={{borderRadius: '8px', boxShadow: 'inherit'}}
      className="d-block"
      src="https://s3.studylib.net/store/data/007883124_2-e1384524eea4face6ed834a58ae0ccc6.png"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      height={500}
      style={{borderRadius: '8px', boxShadow: 'inherit'}}
      className="d-block"
      src="https://s3.studylib.net/store/data/007883124_2-e1384524eea4face6ed834a58ae0ccc6.png"
      alt="First slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      height={500}
      style={{borderRadius: '8px', boxShadow: 'inherit'}}
      className="d-block"
      src="https://s3.studylib.net/store/data/007883124_2-e1384524eea4face6ed834a58ae0ccc6.png"
      alt="First slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

);
}
export default CarouselPDF;
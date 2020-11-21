import React from 'react';
import { Container, } from 'react-bootstrap'
import "./Banner.css";
import CarouselPDF from '../../../components/Carousel/index'


function Banner() {
    return (
        <Container id="banner-container">
            <CarouselPDF />
        </Container>

    );
}

export default Banner;
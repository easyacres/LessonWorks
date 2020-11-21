import React from 'react';
import { Row, Col, Button, NavLink, Container, Image } from 'react-bootstrap'
import "./Module.css";

function Module() {
    
    return (
        <Container id="module-container">
            <Row>
            <Col xs={0} md={6} id="img-col">
                <div></div>
            </Col>
                <Col xs={12} md={6} id="text-col">
                    <h1 style={{fontWeight:'bold'}}>Access to Lesson Panning Right at Your Fingertips</h1>
                    <p>All the lessons you need,
                    convienient annotating made accessible,
                    automated orginization, and more.
                        </p>
                    <Button variant="outline-light" id="get-started-btn">
                        <NavLink to="/newaccount" id="link-control">
                            Get Started
                        </NavLink>
                    </Button>

                </Col>
            </Row>
        </Container>

    );
}

export default Module;
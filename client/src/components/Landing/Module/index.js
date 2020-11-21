import React from 'react';
import { Row, Col, Button, NavLink, Container } from 'react-bootstrap'
import "./Module.css";

function Module() {
    
    return (
        <Container id="module-container">
            <Row>
            <Col xs={0} md={6} id="img-col">
                <div></div>
            </Col>
                <Col xs={12} md={6} id="text-col">
                    <h1 style={{fontWeight:'bold'}}>Access to Lesson Planning Right at Your Fingertips</h1>
                    <p>Lesson Planning is under-rated. We have now over-rated it by allowing users to lesson plan right in their hand.
                        </p>
                    <Button variant="outline-light" id="get-started-btn">
                        <NavLink href="/newaccount" id="link-control">
                            Get Started
                        </NavLink>
                    </Button>

                </Col>
            </Row>
        </Container>

    );
}

export default Module;
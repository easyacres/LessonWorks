import React from 'react';
import { Row, Col, Button, NavLink, Container, } from 'react-bootstrap'
import "./Header.css";


function Header() {
    return (
        <Container id="landing-container">
            <Row>
                <Col id="heading-col" xs={{ span: 12, offset: 0}} md={{ span: 5, offset: 1}}>
                    <h1 id="header-title" style={{fontSize: '52px', fontWeight: 'bold', marginBottom: '20px', color: 'rgb(49, 49, 49)'}}>Lesson Planning Made Easy</h1>
                    <p style={{fontSize: '16px', marginBottom: '20px', color: 'rgb(49, 49, 49)'}}>All the lessons you need,
                    convienient annotating made accessible,
                    automated orginization, and more.
                        </p>
                    <Button variant="outline-light" id="btn-control" style={{fontWeight: 'bold', color: 'rgb(49, 49, 49)'}}>
                        <NavLink href="/login" id="link-control">
                            Member Login
                            </NavLink>
                    </Button>

                    <Button variant="outline-light" id="btn-control" style={{fontWeight: 'bold', color: 'rgb(49, 49, 49)'}}>
                        <NavLink href="/adminlogin" id="link-control">
                            Admin Login
                            </NavLink>
                    </Button>
                </Col>
                <Col xs={2} md={7}>
                </Col>
            </Row>
        </Container>

    );
}

export default Header;
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import "./LoginPage.css";
import Login from "../../components/Auth/Login";

function LoginPage() {
    return (
        <section id="login">
            <div id="layer">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/"><h3 id="navHeader">Lesson</h3><h3 id="naveHeader2">Works</h3></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/newaccount">Register</Nav.Link>
                        </Nav>
                        </Navbar>
                <Container id="login-container">
                    <Row>
                        <Col size="md-12">
                            <h2 id="loginHeader">Lesson</h2><h2 id="loginHeader2">Works</h2>
                            <Login />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

    );
}
export default LoginPage;
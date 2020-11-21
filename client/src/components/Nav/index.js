import React from 'react';
import { Navbar, Nav } from "react-bootstrap"
import "./Nav.css";


function Navigation() {
    return (
        <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"><h3 id="navHeader">Lesson</h3><h3 id="navHeader2">Works</h3></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
}
export default Navigation

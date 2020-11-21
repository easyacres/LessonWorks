import React from 'react';
import { Navbar } from 'react-bootstrap'
import Header from '../../components/Landing/Header'
import Widgets from '../../components/Landing/Widgets'
import Widgets2 from '../../components/Landing/Widgets2'
import Banner from '../../components/Landing/Banner'
import Module from '../../components/Landing/Module'
import "./LandingPage.css";


function LandingPage() {
    return (
        <div id="landing">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><h3 id="navHeader">Lesson</h3><h3 id="navHeader2">Works</h3></Navbar.Brand>
            </Navbar>
            <Header />
            <Widgets />
            <Module />
            <Widgets2 />
            
        </div>
    );
}

export default LandingPage;
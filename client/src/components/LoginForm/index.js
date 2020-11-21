import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap"
import "./LoginForm.css";

function LoginForm() {
    return (

        <div className="login-form">
            <Form class="login">
                <Form.Group id="loginForm-group" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" className="loginForm-control" id="username-input" placeholder="  UserName" />
                </Form.Group>

                <Form.Group id="loginForm-group" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" className="loginForm-control" id="password-input" placeholder="  Password" />
                </Form.Group>

                <Router>
                    <div>
                        <Button variant="outline-light" id="signup-btn">
                            <NavLink to="./newaccount" id="navlink">
                                Sign Up
                            </NavLink>
                        </Button>
                        <Button type="submit" class="btn" id="login-btn">Login</Button>
                    </div>
                </Router>
            </Form>
            <Form class="forgotpass">
                <p><button type="submit" class="forgotPass-btn">Forgot Password?</button></p>
            </Form>
        </div>

    );
}
export default LoginForm;
import React from 'react';
import "./NewAccountPage.css";
import { Nav, Navbar, Button, NavLink } from 'react-bootstrap'

function NewAccountPage() {
  return (
    <div>
      <section id="newAccount">
        <div id="layer2">
          <Navbar className="loginNav">
            <Nav className="justify-content-end">
              <Button variant="outline-light" id="adminlogin">
                <NavLink href="/login" id="navlink">
                  Login
            </NavLink>
              </Button>
            </Nav>
          </Navbar>
          <div id="signup-container" class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 style={{ color: 'white' }}>Create New Account</h2>
                <form class="signup">
                  <div class="form-group mt-10">
                    <label class="label-control" for="exampleInputFirstName1">First Name: </label>
                    <input type="text" class="form-control-signup" id="firstName-input" placeholder="Enter"></input>
                  </div>
                  <div class="form-group mt-10">
                    <label class="label-control" for="exampleInputLastName1">Last name: </label>
                    <input type="text" class="form-control-signup" id="lastName-input" placeholder="Enter"></input>
                  </div>
                  <div class="form-group mt-10">
                    <label class="label-control" for="exampleInputTitle1">Email: </label>
                    <input type="email" class="form-control-signup" id="email-input" placeholder="Email"></input>
                  </div>
                  <div class="form-group mt-10">
                    <label class="label-control" for="exampleInputPassword1">Password:</label>
                    <input type="password" class="form-control-signup" id="password-input" placeholder="Password"></input>
                  </div>
                  {/* <div id="alert" class="alert alert-danger" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span class="sr-only">Error:</span> <span class="msg"></span>
              </div> */}
                </form>
                <button id="new-account-btn" type="submit" class="btn btn-default">Sign Up</button>
                <br />

                <p>Already have an account? <a href="/login">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
export default NewAccountPage;
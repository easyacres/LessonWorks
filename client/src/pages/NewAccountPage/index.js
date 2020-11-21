import React from 'react';
import "./NewAccountPage.css";
import Navigation from "../../components/Nav/index"

function NewAccountPage() {
  return (
    <div>
    <Navigation />
    <section id="newAccount">
      <div id="signup-container" class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Create An Account</h2>
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
              <button id="signup-btn" type="submit" class="btn btn-default">Sign Up</button>
            </form>
            <br />
            <p>Already have an account? <a href="#login">Login</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>

  );
}
export default NewAccountPage;
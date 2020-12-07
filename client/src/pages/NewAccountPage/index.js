import React, { Component } from "react";
import "./NewAccountPage.css";
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

 componentDidMount() {
  // If logged in and user navigates to Register page, redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/dashboard");
  }
} 

componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
}

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();

const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
   
    this.props.registerUser(newUser, this.props.history);
};

render() {
    const { errors } = this.state;

return (
      <div>
        <section id="newAccount">
          <div id="layer2">
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/"><h3 id="navHeader">Lesson</h3><h3 id="navHeader2">Works</h3></Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Navbar>
        <div id="signup-container" className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ color: "white" }}>Create A New Account</h2>
            {/*<Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left"></i> Back to
              home
            </Link>*/}
            <div className="col s12" style={{ paddingLeft: "11.250px", color: "white" }}>
            <form className="signup" noValidate onSubmit={this.onSubmit}>
              <div style={{ paddingBottom: "10px", color: "white" }} className="form-group mt-8">
                <label classname="label-control" style={{ paddingRight: "10px" }} htmlFor="firstName">First Name</label>
                <input style={{ borderRadius: "100px", padding: "15px", border: "none", fontWeight: "bold", fontSize: "15px" }}
                  onChange={this.onChange}
                  value={this.state.firstName}
                  error={errors.firstName}
                  id="firstName"
                  type="text"
                  className={classnames("", {
                    invalid: errors.firstName
                  })}
                  />
                <span className="red-text">{errors.firstName}</span>
              </div>
              <div style={{ paddingBottom: "10px", paddingLeft: "8px", color: "white" }} className="form-group mt-8">
                <label style={{ paddingRight: "10px" }} htmlFor="lastName">Last Name</label>
                <input style={{ borderRadius: "100px", padding: "15px", border: "none", fontWeight: "bold", fontSize: "15px" }}
                  onChange={this.onChange}
                  value={this.state.lasttName}
                  error={errors.lastName}
                  id="lastName"
                  type="text"
                  className={classnames("", {
                      invalid: errors.lastName
                    })}
                />
                <span className="red-text">{errors.lastName}</span>
              </div>
              <div style={{ paddingBottom: "10px", paddingLeft: "55px", color: "white" }} className="form-group mt-8">
                <label style={{ paddingRight: "10px" }} htmlFor="email">Email</label>
                <input style={{ borderRadius: "100px", padding: "15px", border: "none", fontWeight: "bold", fontSize: "15px" }}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                  />
                <span className="red-text">{errors.email}</span>
              </div>
              <div style={{ paddingBottom: "10px", paddingLeft: "22px", color: "white" }} className="form-group mt-8">
                <label style={{ paddingRight: "10px" }} htmlFor="password">Password</label>
                <input style={{ borderRadius: "100px", padding: "15px", border: "none", fontWeight: "bold", fontSize: "15px" }}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <span className="red-text">{errors.password}</span>
              </div>
              <div style={{paddingBottom: "10px", paddingRight: "40px", color: "white" }} className="form-group mt-8">
                <label style={{ paddingRight: "10px" }} htmlFor="password2">Confirm Password</label>
                <input style={{ borderRadius: "100px", padding: "15px", border: "none", fontWeight: "bold", fontSize: "15px" }}
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                  />
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "140.250px" }}>
                <button
                  style={{
                    variant: "outline-light",
                    width: "150px",
                    borderRadius: "100px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    background: "#f9bc60",
                    fontWeight: "bold",
                    color: "#001e1d"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                  <Link style={{ color: "white" }} to="/login"> Sign up </Link>
                </button>
              </div>
            </form>
              </div>
          </div>
          </div>
        </div>
        </div>
        </section>
      </div>
    );
  }
}

// propTypes defines types in our constructor
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// mapStateToProps allows us to get our state from Redux and map it to props which we can use inside components
// allows us to call this.props.auth or this.props.errors
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

// connect() connects our React components to our Redux store provided by the Provider component
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));

/*import React from 'react';

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
              </div> 
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
export default NewAccountPage;*/
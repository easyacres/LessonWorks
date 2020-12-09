import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
//import { NavLink } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

componentDidMount() {
  // If logged in and user navigates to Login page, redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/dashboard");
  }
}  

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    console.log(e)
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(userData);

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "1rem" }} className="row">
          <div className="col s10 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px", color: "black" }}>
              <h4>
                <b>Login</b> below
              </h4>
              
            </div>
            <form style={{ marginTop: "15px" }} noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12" style={{ paddingLeft: "11.250px", paddingBottom: "10px", margin: "0px", color: "white" }}>
                <label></label>
                <input style={{ borderRadius: "100px", padding: "15px", border: "none", fontWeight: "bold", fontSize: "15px" }}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  placeholder="UserName"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12" style={{ paddingLeft: "11.250px", color: "white" }}>
                <label></label>
                <input style={{ borderRadius: "100px", padding: "15px", border: "none", fontWeight: "bold", fontSize: "15px" }}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  placeholder="Password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.passowrd || errors.passwordincorrect
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingBottom: "10px", paddingLeft: "11.250px" }}>
                <button 
                  style={{
                    variant: "outline-light",
                    fontWeight: "normal",
                    width: "150px",
                    borderRadius: "100px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginRight: ".5rem",
                    background: "#f9bc60",
                    color: "rgb(49, 49, 49)"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  <Link style={{ color: "white" }} to="/newaccount"> Sign up </Link>
                </button>
                <button 
                  style={{
                    variant: "outline-light",
                    fontWeight: "normal",
                    width: "150px",
                    borderRadius: "100px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    background: "#f9bc60",
                    color: "rgb(49, 49, 49)"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  <Link style={{ color: "white" }} to="/teacherprofile"> Login </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
import React, { Component } from "react";
import { connect } from "react-redux";
import { register, logIn } from "../../redux/operations/authOperations";

const initialState = {
  email: "",
  password: ""
};

class AuthForm extends Component {
  state = {
    ...initialState
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.location.pathname === "/register" && this.props.register(this.state);
    this.props.location.pathname === "/login" && this.props.logIn(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        {this.props.location.pathname === "/register" && <p style={{ textAlign: "center" }}></p>}
        {this.props.location.pathname === "/login" && (
          <p style={{ textAlign: "center" }}></p>
        )}
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">
            Пошта
            <input type="text" name="email" value={email} onChange={this.handleChange} className="input" />
          </label>
          <label className="label">
            Пароль
            <input type="text" name="password" value={password} onChange={this.handleChange} className="input" />
          </label>
          <button type="submit" className="button">
            {this.props.location.pathname === "/register" ? "Register" : "SignIn"}
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  register,
  logIn
};
export default connect(
  null,
  mapDispatchToProps
)(AuthForm);

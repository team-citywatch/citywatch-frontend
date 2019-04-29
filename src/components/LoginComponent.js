import React, { Component } from 'react';
import '../assets/styles/LoginComponent.css';

class LoginComponent extends Component {
  state = {};
  render() {
    return (
      <div className="login-container">
        <p>Please login to make a report</p>
        <button>Login with Email</button>
        <button>Login with Facebook</button>
      </div>
    );
  }
}

export default LoginComponent;

import React, { Component } from 'react';
import '../assets/styles/LoginComponent.css';

class LoginComponent extends Component {
  state = {};
  openReportForm = () => {
    window.location.href = '/report';
  };
  render() {
    return (
      <div className="login-container">
        <p>Please login to make a report</p>
        <button>Login with Email</button>
        <button onClick={this.openReportForm}>Login with Facebook</button>
      </div>
    );
  }
}

export default LoginComponent;

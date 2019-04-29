import React, { Component } from 'react';
import '../assets/styles/ReportButton.css';

class ReportButton extends Component {
  state = {};

  handleReporting = () => {
    window.location.href = '/login';
  };

  render() {
    return (
      <div>
        <button id="report-button" onClick={this.handleReporting}>Report</button>
      </div>
    );
  }
}

export default ReportButton;

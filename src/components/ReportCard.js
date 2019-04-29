import React, { Component } from 'react';
import '../assets/styles/ReportsPage.scss';

class ReportCard extends Component {
  state = {};
  render() {
    const imgUrl = this.props.image;
    return (
      <div className={this.props.class}>
        <h1>This is a simple report card</h1>
        <img src={imgUrl} alt="report" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ReportCard;

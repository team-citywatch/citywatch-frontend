import React, { Component } from 'react';
import googleImage from '../assets/images/googlemaps.jpg';
import '../assets/styles/HomePage.css';

import Header from './Header';


class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <img src={googleImage} alt="maps" />
      </div>
    );
  }
}

export default HomePage;

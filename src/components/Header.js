import React, { Component } from 'react';
import SearchInput from './SearchInput';
import ReportButton from './ReportButton';
import '../assets/styles/Header.css';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="main-header">
        <div id="search-container">
          <SearchInput />
        </div>
        <div id="report-button-container">
          <ReportButton />
        </div>
      </div>
    );
  }
}

export default Header;

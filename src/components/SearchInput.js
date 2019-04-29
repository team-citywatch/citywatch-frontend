import React, { Component } from 'react';
import '../assets/styles/SearchInput.css';

class SearchInput extends Component {
  state = {
    searchValue: '',
  };

  handleOnChange = event => {
    // this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
      </div>
    );
  }
}

export default SearchInput;

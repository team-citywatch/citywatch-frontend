import React, { Component } from "react";
import "../assets/styles/ReportForm.scss";

class ReportForm extends Component {
  state = { options: [{ id: 1, name: "Pothole" }] };
  handleSubmit = event => {
    event.preventDefault();
    window.location.href = "/reports-feed";
  };
  render() {
    const categoryOptions = this.state.options;
    return (
      <div id="report-form">
        <h1>Create a report</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
            <textarea onChange={this.handleChange} />
          </label>
          <input type="file" onChange={this.fileChangedHandler} />
          <button onClick={this.uploadHandler}>Upload!</button>
          <label>
            Location:
            <input type="text" onChange={this.handleChange} />
          </label>
          <label>
            Category
            <select>
              <option>Select a category</option>
              {categoryOptions.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ReportForm;

import React, { Component } from "react";
import Checkbox from "../Forms/Checkbox";
import Comments from "../Forms/Inputs/Comments";

const checkedItems = ["One", "Two", "Three", "Four","Five"];


class Ics extends Component {
  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
    }
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => checkedItems.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1> In Class Support</h1>

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <Comments />

              <button className="btn btn-default" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Ics;

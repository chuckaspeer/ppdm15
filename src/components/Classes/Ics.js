import React, { Component } from "react";
import Checkbox from "../Forms/Checkbox";
import Comments from "../Forms/Inputs/Comments";
import { connect } from "react-redux";
import { updateCheckedItems } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import axios from "axios";
import './Ics.css';

class Ics extends Component {
  state = {
    checkboxes: this.props.checkedItems.map(checkbox => ({
      label: checkbox,
      checked: false
    })),
    comment: "",
    studentName: ""
  };

  componentDidMount() {
    let arr = this.props.students.filter(element => {
      return element.id === this.props.match.params.id;
    });

    console.log(arr);
    if (arr[0])
      this.setState({
        studentName: `${arr[0].first_name} ${arr[0].last_name}`
      });
  }

  // onClickListener = comment => {
  //   axios.post({ comment });
  // };

  toggleCheckbox = (label, checked) => {
    const checkboxesCopy = [...this.state.checkboxes];
    const index = checkboxesCopy.findIndex(
      checkbox => checkbox.label === label
    );
    checkboxesCopy[index].checked = !checkboxesCopy[index].checked;

    this.setState({ checkboxes: checkboxesCopy });
    console.log(checked, "Hit.");
    //using label, find the corresponding index in state, and then set that index's checked property to true/false
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let arr = this.state.checkboxes.slice();

    let newArr = arr.filter((element, index) => {
      return element.checked === true;
    });

    let docs = {
      checkboxes: newArr,
      comment: this.state.comment
    };

    console.log(docs);

    axios
      .post(`/api/students/${this.props.match.params.id}/doc_comments`, {
        docs
      })
      .then(response => {});
  };

  createCheckbox = label => (
    <Checkbox 
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => this.props.checkedItems.map(this.createCheckbox);

  onChangeHandler = comment => {
    this.setState({ comment });
  };

  render() {
    console.log(this.props.students);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1> In Class Support</h1>
            <h4>{this.state.studentName}</h4>
            <form onSubmit={this.handleFormSubmit} className ="checkboxes">
              {this.createCheckboxes()}
              <Comments typed={this.onChangeHandler} />
              <button className="btn btn-default" type="submit">
                Submit
              </button>
              <Link to="/Classes" className="HSlinks">
                <button className="back btn" type="back">
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { checkedItems, students } = state;

  return {
    checkedItems,
    students
  };
}

export default connect(
  mapStateToProps,
  { updateCheckedItems }
)(Ics);

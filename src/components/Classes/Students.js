import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Students.css";
import { connect } from "react-redux";
import { updateStudents } from "../../ducks/reducer";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  componentDidMount() {
    const { updateStudents } = this.props;
    updateStudents(this.props.match.params.id);

    let arr = this.props.classes.filter(element => {
      return element.id === this.props.match.params.id;
    });

    if (arr[0]) this.setState({ className: arr[0].class_name });
    // axios
    //   .get(`/api/classes/${this.props.match.params.id}/students`)
    //   .then(response => {
    //     console.log("response.data:", response.data);
    //     this.setState({ students: response.data });
    //   });
  }
  render() {
    let studentDisplay = this.props.students.map(students => {
      return (
        <Link key={students.id} to={`/Ics/${students.id}`} className="links">
          <button className="student_list">
            <li>{`${students.first_name} ${students.last_name}`}</li>
          </button>
        </Link>
      );
    });

    return (
      <div className="Students_div">
        <h1>Students</h1>
        <h5>{this.state.className} </h5>
        {studentDisplay}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { students, classes } = state;

  return {
    students,
    classes
  };
}

export default connect(
  mapStateToProps,
  { updateStudents }
)(Students);

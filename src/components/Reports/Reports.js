import React, { Component } from "react";
import { connect } from "react-redux";
import { updateReportItems, updateStudents } from "../../ducks/reducer";

import {Link} from "react-router-dom";
//import students from "./components/Classes/Students";

class Reports extends Component {
  state = {
    reports: []
  };

  componentDidMount() {
    const { updateStudents } = this.props;
    updateStudents(this.props.match.params.id);
  }


  render() {
    let studentDisplay = this.props.students.map(students => {
      return (

        // on click, run click listener that does axios call
        <Link key={students.id} to={`/StudentReports/${students.id}`} className="links">
        <button onClick={this.onClickListener} className="student_list">
          <li>{`${students.first_name} ${students.last_name}`}</li>
        </button>
        </Link>
      );
    });

    return (
      <div>
        <h1>Reports</h1>
        {studentDisplay}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { Reports, students } = state;

  return {
    Reports,
    students
  };
}

export default connect(
  mapStateToProps,
  { updateReportItems, updateStudents }
)(Reports);

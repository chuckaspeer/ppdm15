import React, { Component } from "react";
import { connect } from "react-redux";
import { updateReportItems, getStudentsByStaffId } from "../../ducks/reducer";
import Header from'../Header/Header';

import {Link} from "react-router-dom";
//import students from "./components/Classes/Students";

class Reports extends Component {
  state = {
    reports: []
  };

  componentDidMount() {
    const { getStudentsByStaffId } = this.props;
    getStudentsByStaffId();
  }


  render() {
    let studentDisplay = this.props.students.map(students => {
      return (

        // on click, run click listener that does axios call
        <Link key={students.id} to={`/StudentReports/${students.id}`} className="links">
        <button onClick={this.onClickListener} className="button">
          <p>{`${students.first_name} ${students.last_name}`}</p>
        </button>
        </Link>
      );
    });

    return (
      <div>
        <Header />
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
  { updateReportItems, getStudentsByStaffId }
)(Reports);

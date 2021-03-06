import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudentReports, updateStudentReport } from "../../ducks/reducer";
import "./StudentReports.css";
import StudentReport from "./StudentReport/StudentReport";
import Header from'../Header/Header';
//import axios from "axios";

class StudentReports extends Component {
  componentDidMount() {
    this.updateReports();
  }

  updateReports = () => {
    this.props.updateStudentReports(this.props.match.params.id).then(() => {
      console.log(this.props.studentReports);
      // console.log(this.props.student);
    });
  };

  // edithandler = edithandler => {
  //   edithandler.preventDefault();
  //   this.props.updateStudentReport(this.props.student.id);
  // };

  render() {
    console.log(this.props);

    let reportsDisplay = this.props.studentReports[0] ? (
      this.props.studentReports.map(report => (
        <StudentReport
          key={report.report_id}
          update={this.updateReports}
          report={report}
        />
       
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <Header />
        <h1>Student Report</h1>

        {reportsDisplay}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { studentReports, studentReport } = state;

  return {
    studentReports,
    studentReport
  };
}

export default connect(
  mapStateToProps,
  { updateStudentReports, updateStudentReport }
)(StudentReports);

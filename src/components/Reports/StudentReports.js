import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudentReports, updateStudentReport } from "../../ducks/reducer";
import "./StudentReports.css";
import StudentReport from "./StudentReport/StudentReport";
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
        // <div key={0} className="Mainreportdiv">
        //   <span>Student:</span>
        //   <div className="StudentNameReport">
        //     {report.first_name + "  " + report.last_name + " "}
        //   </div>
        //   <br />
        //   <span>In Class Support:</span>

        //   <div className="StudentCheckReport">{report.checks}</div>
        //   <br />
        //   <span>Comment:</span>

        //   <div className="StudentCommentReport">{report.comments}</div>
        //   <br />
        //   <span>Reporting Staff:</span>
        //   <div className="StaffReporter">
        //     {report.staff_first_name + " " + report.staff_last_name}
        //   </div>

        //   <div className="edit_delete">
        //     <button onClick={this.edithandler} className="edit">
        //       edit
        //     </button>
        //     <button className="delete">delete</button>
        //   </div>
        // </div>
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
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

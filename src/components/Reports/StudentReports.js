import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudentReports } from "../../ducks/reducer";

class StudentReports extends Component {
  componentDidMount() {
    this.props.updateStudentReports(this.props.match.params.id).then(() => {
      console.log(this.props.studentReports);
    });
  }

  render() {
    let reportsDisplay = this.props.studentReports[0] ? (
      this.props.studentReports.map(report => (
        <div>{report.first_name + " " + report.comments}</div>
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
  const { studentReports } = state;

  return {
    studentReports
  };
}

export default connect(
  mapStateToProps,
  { updateStudentReports }
)(StudentReports);

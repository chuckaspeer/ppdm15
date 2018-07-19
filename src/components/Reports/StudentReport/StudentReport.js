import React, { Component } from "react";
import "./StudentReport.css";
import axios from "axios";
class StudentReport extends Component {
  state = {
    edit: false,
    comment: this.props.report.comments
  };

  editHandler = () => {
    console.log(this.props.report.comment_id);

    //this.props.updateStudentReport(this.props.student.id);
    if (this.state.edit) {
      const { comment } = this.state;
      axios
        .put(`/api/students/${this.props.report.comment_id}/doc_comments`, {
          comment
        })
        .then(response => {
          this.setState({ comment: response.data[0].comments });
          // this.setState({ loading: true });
        });
    }

    this.setState({
      edit: !this.state.edit
    });
  };
  deleteHandler = () => {
    console.log(this.props.report.id);
    console.log("hit");

    //this.props.updateStudentReport(this.props.student.id);

    // if (this.state.delete) {
    const { id } = this.state;
    axios
      .delete(`/api/students/${this.props.report.report_id}/reports`)
      .then(async response => {
        console.log(response);
        // this.setState({ reports: response.data[0].report, loading: true });
        await this.props.update();
      });
    // }

    // this.setState({
    //   edit: !this.state.edit

    // });
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    const { edit, comment } = this.state;
    const {
      first_name,
      last_name,
      checks,
      staff_first_name,
      staff_last_name
    } = this.props.report;

    return (
      <div key={0} className="Mainreportdiv">
        <span>Student:</span>
        <div className="StudentNameReport">
          {first_name + "  " + last_name + " "}
        </div>
        <br />
        <span>In Class Support:</span>

        <div className="StudentCheckReport">{checks}</div>
        <br />
        <span>Comment:</span>

        <div className="StudentCommentReport">
          {edit ? (
            <textarea
              className="Textfield"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          ) : (
            comment
          )}
        </div>
        <br />
        <span>Reporting Staff:</span>
        <div className="StaffReporter">
          {staff_first_name + " " + staff_last_name}
        </div>

        <div className="edit_delete">
          <button onClick={this.editHandler} className="edit">
            {edit ? "save comment" : "edit comment"}
          </button>
          <div>
            <button onClick={this.deleteHandler} className="delete">
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentReport;

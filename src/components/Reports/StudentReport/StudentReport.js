import React, { Component } from "react";


export default class StudentReport extends Component {
  state = {
    edit: false
  }; 

  edithandler = (event) => {
    event.preventDefault();
    //this.props.updateStudentReport(this.props.student.id);
    
    this.setState({
        edit: !this.state.edit
    })
    console.log();
  };

  render() {
      const {edit} = this.state
    const {
      first_name,
      last_name,
      checks,
      comments,
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

        <div className="StudentCommentReport">{comments}</div>
        <br />
        <span>Reporting Staff:</span>
        <div className="StaffReporter">
          {staff_first_name + " " + staff_last_name}
        </div>

        <div className="edit_delete">
          <button onClick={this.edithandler} className="edit">
            {edit === true ? "save":"edit"}
          </button>
          <button className="delete">delete</button>
        </div>
      </div>
    );
  }
}

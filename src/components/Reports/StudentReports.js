import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudentReports } from "../../ducks/reducer";
import "./StudentReports.css";
import axios from "axios";
class StudentReports extends Component {
  componentDidMount() {
    
    this.props.updateStudentReports(this.props.match.params.id).then(() => {
      console.log(this.props.studentReports);
      console.log(this.props.student)
    });
  }
//   axios
//   .put(`/api/students:id/${this.props.match.params.id}/doc_comments`, {
//     docs
//   })
//   .then(response => []);
// };
  render() {

    
    let reportsDisplay = this.props.studentReports[0] ? (
      this.props.studentReports.map(report => (
        <div className='Mainreportdiv'>
        <span>Student:</span>
          <div className='StudentNameReport'>
        
          {report.first_name +
            "  " +
            report.last_name +
            " " }
            </div>
            <br/>
            <span>In Class Support:</span>
            
            <div className='StudentCheckReport'>{
            report.checks}</div>
            <br/>
           <span>Comment:</span>
          
            <div className= 'StudentCommentReport'>{
            report.comments}
            </div> 
            <br/>
            <span>Reporting Staff:</span>
            <div className='StaffReporter'>
           
            {report.staff_first_name + " " + report.staff_last_name}
            </div>
          
            <div className = 'edit_delete'>
            <button className="edit">edit</button>
            <button className="delete">delete</button>
            </div>
        </div>
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

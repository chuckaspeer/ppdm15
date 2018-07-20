import axios from "axios";
import checkboxes from "../utils/checkboxes";

const initialState = {
  classes: [],
  students: [],
  checkedItems: checkboxes,
  isChecked: "false",
  ReportItems: [{}],
  studentReports: [],
  studentReport: []
};

const CLASSES = "CLASSES";
const STUDENTS = "STUDENTS";
const ISCHECKED = "ISCHECKED";
const CHECKEDITEMS = "CHECKEDITEMS";
const REPORTITEMS = "REPORTITEMS";
const ADDDOCSTODB = "ADDDOCSTODB";
const STUDENTREPORTS = "STUDENTREPORTS";
const STUDENTREPORT = "STUDENTREPORT";
const STUDENTSBYSTAFF = "STUDENTSBYSTAFF";

function reducer(state = initialState, action) {
  //console.log("REDUCER HIT: Action ->", action);

  switch (action.type) {
    case `${CLASSES}_FULFILLED`:
      return Object.assign({}, state, { classes: action.payload.data });

    case `${STUDENTS}_FULFILLED`:
      return Object.assign({}, state, { students: action.payload.data });

    case `${STUDENTSBYSTAFF}_FULFILLED`:
      return Object.assign({}, state, { students: action.payload.data });

    case ISCHECKED:
      return Object.assign({}, state, { isChecked: action.payload });

    case CHECKEDITEMS:
      return Object.assign({}, state, { checkedItems: action.payload.data });

    case REPORTITEMS:
      return Object.assign({}, state, { isChecked: action.payload });

    case `${STUDENTREPORTS}_FULFILLED`:
      return Object.assign({}, state, { studentReports: action.payload.data });

    case `${STUDENTREPORT}`:
      return Object.assign({}, state, { studentReport: action.payload.data });
    default:
      return state;
  }
}

export function updateClasses(classes) {
  console.log("Hit");
  return {
    type: CLASSES,
    payload: axios.get("/api/classes")
  };
}
export function updateStudents(id) {
  return {
    type: STUDENTS,
    payload: axios.get(`/api/classes/${id}/students`)
  };
}

export function getStudentsByStaffId() {
  return {
    type: STUDENTSBYSTAFF,
    payload: axios.get(`/api/staff/students`)
  };
}

export function updateIsChecked(isChecked) {
  return {
    type: ISCHECKED,
    payload: ""
  };
}
export function updateCheckedItems(checkedItems) {
  return {
    type: CHECKEDITEMS,
    payload: []
  };
}
export function updateReportItems(reportItems) {
  return {
    type: REPORTITEMS,
    payload: [{}]
  };
}

export function addDocsToDb(docs) {
  return {
    type: ADDDOCSTODB,
    payload: axios.post("/api/doc_comments", docs)
  };
}
export function updateStudentReports(id) {
  return {
    type: STUDENTREPORTS,
    payload: axios.get(`/api/reports/${id}`)
  };
}
export function updateStudentReport(id) {
  return {
    type: STUDENTREPORT,
    payload: axios.put(`/api/doc_comments/${id}`)
  };
}

export default reducer;

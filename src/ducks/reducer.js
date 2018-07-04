import axios from "axios";
const initialState = {
  classes: [],
  students: [],
  comments: "",
  checkedItems: "false",

};

const CLASSES = "CLASSES";
const STUDENTS = "STUDENTS";
const COMMENTS = "COMMENTS";
const ISCHECKED = "ISCHECKED";

function reducer(state = initialState, action) {
  //console.log("REDUCER HIT: Action ->", action);

  switch (action.type) {
    case `${CLASSES}_FULFILLED`:
      return Object.assign({}, state, { classes: action.payload.data });

    case `${STUDENTS}_FULFILLED`:
      return Object.assign({}, state, { students: action.payload.data });

    case COMMENTS:
      return Object.assign({}, state, { comments: action.payload.data });

    case ISCHECKED:
      return Object.assign({}, state, { isChecked: action.payload });
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
export function updateComments(comments) {
  return {
    type: COMMENTS,
    payload: ""
  };
}
export function updateIschecked(isChecked) {
  return {
    type: ISCHECKED,
    payload: ""
  };
}

export default reducer;

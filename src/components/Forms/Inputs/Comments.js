import React, { Component } from "react";
import "./Comments.css";
import { connect } from "react-redux";
import { updateComments } from "../../../ducks/reducer";
class Comments extends Component {
  // const {updateComment} = this.props;
  // updateComment();

  handleChange(value) {
    this.setProps({ comment: value });
  }

  render() {
    return (
      <div className="input">
        Comment:
        <input
          className="comment"
          onChange={e => this.handleChange(e.target.value)}
          type="text"
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { comments } = state;

  return {
    comments
  };
}

export default connect(
  mapStateToProps,
  { updateComments }
)(Comments);

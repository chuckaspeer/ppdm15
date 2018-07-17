import React, { Component } from "react";
import "./Comments.css";
class Comments extends Component {
  state = {
    comment: ""
  };

  onChangeHandler = e => {
    this.props.typed(e.target.value);
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div className="input">
        Comment:
        <textarea
          className="comment"
          onChange={this.onChangeHandler}
          type="text"
        />
      </div>
    );
  }
}
export default Comments;

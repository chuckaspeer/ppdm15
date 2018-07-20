import React, { Component } from "react";
import { Link } from "react-router-dom";
import DD_logo from "../images/DD_logo.png";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <a href={process.env.REACT_APP_LOGIN_REDIRECT}>
          <button className="Login-btn">Login</button>{" "}
        </a>
        <div className="HomeDiv">
          <img src={DD_logo} className="HomeLogo" alt="HomeLogo"  />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Footer.css";
import logo_DD_3 from "../images/logo_DD_3.png";
import { Link } from "react-router-dom";
import HomeScreen from "../HomeScreen/HomeScreen";

export default class Footer extends Component {
  render() {
    return (
      <div className="logo_CR">
      <Link key={HomeScreen}to="/HomeScreen" className="HSlinks">
            <img className="DDlogo" src={logo_DD_3} width="150" alt="logo" /> </Link>
          <br/>
        <span className="CR">Document Daily LLC &copy; 2018</span>
      </div>
    );
  }
}


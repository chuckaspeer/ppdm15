import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import DD_logo from "../images/DD_logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="Mainheader">
        <nav>
          <div className="doc">
          <Link to="/">
            <img src={DD_logo} width="150" height="60" alt="logo" />
            </Link>
          </div>
          <div className="header_wrap">
            <Link to="/HomeScreen" className="H_links">
              Home Screen
            </Link>
            <Link to="/Classes" className="Hlinks">
              Classes
            </Link>
            <Link to="/Services" className="Hlinks">
              Services
            </Link>
            <Link to="/Consults" className="Hlinks">
              Consults
            </Link>
            <Link to="/Reports" className="Hlinks">
              Reports
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

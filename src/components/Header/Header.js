import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="Mainheader">
        <nav>
          
          <div className='doc'>Doc Daily</div>
          <div className="header_wrap">
            <Link to="/" className="links">
              Home Screen
            </Link>
            <Link to="/Classes" className="links">
              Classes
            </Link>
            <Link to="/Services" className="links">
              Services
            </Link>
            <Link to="/Consults" className="links">
              Consults
            </Link>
            <Link to="/Reports" className="links">
              Reports
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

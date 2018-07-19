import React, { Component } from "react";
import "./Footer.css";
import logo_DD_3 from "../images/logo_DD_3.png";


export default class Footer extends Component {
  render() {
    return (
      <div className="logo_CR">
      
            <img className="DDlogo" src={logo_DD_3} width="150" />
          <br/>
        <span className="CR">Document Daily &copy; 2018</span>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
export default class HomeScreen extends Component {
  render() {
    return (
      <div className="Mainhomescreen">
        <h1>HomeScreen</h1>
        <div className="Home_Screen_links">
          {/* <Link to="/" className="HSlinks">
            <button className="button">Home Screen</button>
          </Link> */}

          <Link to="/Classes" className="HSlinks">
            <button className="button">Classes</button>
          </Link>

          
            <Link to="/Services" className="HSlinks"><button className="button">
              Services</button>
            </Link>
          
          
            <Link to="/Consults" className="HSlinks"><button className="button">
              Consults          </button>
            </Link>

          
            <Link to="/Reports" className="HSlinks"><button className="button">
              Reports</button>
            </Link>
          
        </div>
     </div>
    );
  }
}

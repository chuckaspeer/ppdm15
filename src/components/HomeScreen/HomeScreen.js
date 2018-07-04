import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './HomeScreen.css'
export default class HomeScreen extends Component {
    render() {

        return (
            <div>
                <h1>HomeScreen</h1>
                <div className="Home_Screen_links">
                <button>
            <Link to="/" className="HSlinks">
              Home Screen
            </Link>
            </button>
            <button>
            <Link to="/Classes" className="HSlinks">
              Classes
            </Link>
            </button>
            <button>
            <Link to="/Services" className="HSlinks">
              Services
            </Link>
            </button>
            <button>
            <Link to="/Consults" className="HSlinks">
              Consults
            </Link>
            </button>
            <button>
            <Link to="/Reports" className="HSlinks">
              Reports
            </Link>
            </button>
          </div>
          </div> 
            
        )
    }
}

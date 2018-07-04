import React, { Component } from "react";

import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {updateClasses} from '../../ducks/reducer';

class Classes extends Component {
  

  componentDidMount() {
    const {updateClasses} = this.props;
    updateClasses();
    //   JSON.stringify(this.state.checkboxes);
    //   JSON.parse(dbResults);
  //   axios.get("/api/classes").then(response => {
  //     console.log("response.data:", response.data);
  //     this.setState({ classes: response.data });
  //   });
  }
  render() {
    console.log(this.props);
    let classesDisplay = this.props.classes.map(classes => {
      return (
        <Link key={classes.id} to={`/Students/${classes.id}`} className="links">
          <button>
            <p>{`${classes.class_name} ${classes.class_desc}`}</p>
          </button>
        </Link>
      );
    });

    return (
      <div>
        <h1>Classes</h1>
        {classesDisplay}
      </div>
    );
  }
}
function mapStateToProps( state ) {
  const { classes } = state;

  return {
    classes
  };
}

export default connect( mapStateToProps, { updateClasses } )( Classes );
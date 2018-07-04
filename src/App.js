import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import { HashRouter } from "react-router-dom";
import routes from './router';
import Header from './components/Header/Header';
import store from './store';
import {Provider} from 'react-redux'



class App extends Component {

  // componentDidMount(){

  //   //axios.get(`/api/class/${classid}/students`).then(response => console.log(response));
  //   //.catch(err => console.log(err));
  //   //axios.get('/api/classes').then(response => console.log(response));
  // }
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
      <div>
      <Header/>
     <div>
      {routes}
      </div>

      </div>
      </HashRouter>
       </Provider>
    );
  }
}

export default App;

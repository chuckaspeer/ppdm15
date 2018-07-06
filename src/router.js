import React from "react";
import Reports from "./components/Reports/Reports";
import Consults from "./components/Consults/Consults";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Classes from "./components/Classes/Classes";
import Services from "./components/Services/Services";
import Students from "./components/Classes/Students";
import ics from "./components/Classes/Ics";
import StudentReports from './components/Reports/StudentReports';

//import Start from './components/Inputs/Start';
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route component={HomeScreen} exact path="/" />
    <Route component={Classes} path="/Classes" />
    <Route path="/Services" component={Services} />
    <Route path="/Consults" component={Consults} />
    <Route path="/Students/:id" component={Students} />
    <Route path="/Ics/:id" component={ics} />
    <Route path="/Reports" component={Reports} />
    <Route path='/StudentReports/:id' component={StudentReports}/>
    
  </Switch>
);

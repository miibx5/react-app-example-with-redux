import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";
import Tasks from "../tasks/tasks";
import About from "../tasks/about";

export default props => (
    <Router history={hashHistory}>
        <Route path="/allTasks" component={Tasks} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/allTasks" />
    </Router>
)
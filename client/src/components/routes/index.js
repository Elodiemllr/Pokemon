import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import NavBar from "../NavBar.js";
import About from "../Pages/About.js";
import Home from "../Pages/Home.js";

const index = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" exact component={About} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;

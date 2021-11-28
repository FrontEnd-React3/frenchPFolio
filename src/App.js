import React, { Component } from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {Project1, Project2, Project3, Project4 } from "./pages/Project1";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Switch className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/project-1" component={Project1} />
      <Route exact path="/project-2" component={Project2} />
      <Route exact path="/project-3" component={Project3} />
      <Route exact path="/project-4" component={Project4} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/"/>
    </Switch>
  );
};

export default App;

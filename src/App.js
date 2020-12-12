import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Inbox from "./components/pages/Inbox"
import "./App.css";

function App() {
  return (
    <Fragment>
     
      <Switch>
         <Route exact path="/" component={Home}/>
        <Route path="/inbox" component={Inbox} />
      </Switch>
      
    </Fragment>
  );
}

export default App;

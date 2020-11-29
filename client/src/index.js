import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";

ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

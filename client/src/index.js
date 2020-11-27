import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainPage from "./pages/MainPage";
import SignUpNew from "./pages/SignUpNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SettingsPage from './pages/SettingsPage';


ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/signup" component={SignUpNew} />
        <Route path="/main" component={MainPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

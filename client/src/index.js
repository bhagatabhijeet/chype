import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInNew from "./pages/SignInNew";
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage'
import 'fontsource-roboto';

ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInNew} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={MainPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

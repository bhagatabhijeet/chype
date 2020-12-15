import React, { StrictMode,useState,useEffect } from "react";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInNew from "./pages/SignInNew";
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage'

function App({match}) {
  
  return (
    <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInNew} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main/:user" component={MainPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </Router>
  </StrictMode>
  );
}

export default App;

import React, { StrictMode} from "react";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInNew from "./pages/SignInNew";
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import {useSelector} from 'react-redux';
import ProtectedRoute from "./pages/ProtectedRoutes";

function App() {
  const user = useSelector(state=>state.user)
  user.loggedIn = true; // TODO switch over to setting user, including token, on Redux store, and removing
  // use of local storage

  return (
    <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInNew} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute path="/main" component={MainPage} loggedIn={user.loggedIn} redirectTo="/signin"/>
        <Route path="/settings" component={SettingsPage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </Router>
  </StrictMode>
  );
}

export default App;

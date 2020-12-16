import React, { StrictMode} from "react";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInNew from "./pages/SignInNew";
import HomePage from './pages/HomePage';
import {useSelector} from "react-redux";
import axios from "axios";

function App() {
  const userReduxState = useSelector(state=>state.user);
  const {token} = userReduxState;
  axios.defaults.headers.common["authorization"] = token;

  return (
      <StrictMode>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SignInNew} />
            <Route path="/signup" component={SignUp} />
            <Route path="/main" component={MainPage}/>
            <Route path="*" component={HomePage} />
          </Switch>
        </Router>
      </StrictMode>
  );
}

export default App;
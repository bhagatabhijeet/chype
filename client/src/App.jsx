import React, { StrictMode} from "react";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInNew from "./pages/SignInNew";
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
 
// import ProtectedRoute from "./pages/ProtectedRoutes";

function App() {

  return (
    <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInNew} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={MainPage}/>
        <Route path="/settings" component={SettingsPage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </Router>
  </StrictMode>
  );
}

export default App;

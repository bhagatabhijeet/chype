import React from "react";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpNew from "./pages/SignUpNew";
import MainPage from "./pages/MainPage";
import SettingsPage from "./pages/SettingsPage";
import SignOut from "./components/SignOut";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/signin" component={SignInPage}/>
                <Route path="/signin" component={SignInPage}/>
                <Route path="/signup" component={SignUpNew}/>
                <Route path="/signout" component={SignOut}/>
                <Route path="/main" component={MainPage}/>
                <Route path="/settings" component={SettingsPage}/>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    );
}
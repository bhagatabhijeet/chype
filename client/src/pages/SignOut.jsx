import React, {useEffect} from "react";
import {signOut} from "../Utils/AuthenticationHelpers";
import {Redirect} from "react-router-dom";

export default function SignOut() {
    useEffect(() => {
        signOut();
    }, []);

    return <Redirect to="/"/>;
}

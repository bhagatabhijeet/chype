import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";

export default function SignOut() {
    useEffect(() => {
        // TODO perform sign out via Redux
    }, []);

    return <Redirect to="/"/>;
}
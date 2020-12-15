import React, {useEffect} from "react";
import {signOut} from "../Utils/AuthenticationHelpers";
import {Link} from "react-router-dom";

export default function SignOut() {
    useEffect(() => {
        signOut();
    }, []);

    return (
        <>
            <div>You have been signed out...</div>
            <div>
                <Link to="/">Click here</Link> to return home
            </div>
        </>
    );
}
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SignUpSpinner() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress/>
        </div>
    );
}

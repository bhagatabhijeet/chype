import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import 'fontsource-roboto';
import axios from "axios";

const accessString = localStorage.getItem('token');
axios.defaults.headers.common['authorization'] = `${accessString}`;

ReactDOM.render(
    <StrictMode>
        <Routes/>
    </StrictMode>,
    document.getElementById("root")
);
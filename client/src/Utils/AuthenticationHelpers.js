import axios from "axios";
import {setUser} from "../redux/UserReducer";

export function setUpUser(data) {
    const token = data.token;
    axios.defaults.headers.common['authorization'] = token;
    localStorage.setItem('token', token);
}

export function isLoggedIn() {
    return !!localStorage.getItem('token');
}

export function signOut() {
    localStorage.removeItem('token');
}
export function setToken(token) {
    // TODO need to set axios header here also?
    // import axios from "axios";
    //
    // const accessString = localStorage.getItem('token');
    // axios.defaults.headers.common['authorization'] = `${accessString}`;
    localStorage.setItem('token', token);
}

export function isLoggedIn() {
    return !!localStorage.getItem('token');
}

export function signOut() {
    localStorage.removeItem('token');
}

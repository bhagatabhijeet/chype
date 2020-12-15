export function isLoggedIn() {
    return !!localStorage.getItem('token');
}

export function signOut() {
    localStorage.removeItem('token');
}
import { SET_USER, USER_LOGOUT } from '../constants/action-types';

export function setUser(user) {
    return { type: SET_USER, user}
}

export function handleLogout() {
    localStorage.removeItem('jwt');
    return { type: USER_LOGOUT}
}
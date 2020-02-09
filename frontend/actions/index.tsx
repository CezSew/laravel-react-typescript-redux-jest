import { ADD_NUMBER, SET_USER } from '../constants/action-types';

export function addNumber(number) {
    return { type: ADD_NUMBER, number}
}

export function setUser(user) {
    return { type: SET_USER, user}
}
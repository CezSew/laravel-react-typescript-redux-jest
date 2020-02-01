import { ADD_NUMBER } from '../constants/action-types';

export function addNumber(number) {
    return { type: ADD_NUMBER, number}
}
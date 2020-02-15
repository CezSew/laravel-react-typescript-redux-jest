import {
  SET_USER, USER_LOGOUT
} from '../constants/action-types';

const initialState = {
  user: {},
  isUserLoggedIn: null
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      if (typeof action.payload.user === 'undefined') {
        return Object.assign({}, state, {
          user: action.payload.user,
          isUserLoggedIn: false
        })
      } else {
        return Object.assign({}, state, {
          user: action.payload.user,
          isUserLoggedIn: true
        })
      }
    case USER_LOGOUT:
      return Object.assign({}, state, {
        user: undefined,
        isUserLoggedIn: false
      })
    default:
      return state;
  }
}

export default rootReducer;
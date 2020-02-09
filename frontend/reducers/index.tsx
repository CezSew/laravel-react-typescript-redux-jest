import {
  ADD_NUMBER,
  SET_USER
} from '../constants/action-types';

const initialState = {
  testArr: [],
  username: 'Marian',
  testNumber: 1
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NUMBER: 
      return Object.assign({}, state, {
        testNumber: state.testNumber + action.payload.number
      })
    case SET_USER:
      return Object.assign({}, state, {
        user: action.payload.user
      })
    default:
      return state;
  }
}

export default rootReducer;
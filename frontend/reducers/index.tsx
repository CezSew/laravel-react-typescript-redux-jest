import {
  ADD_NUMBER
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
    default:
      return state;
  }
}

export default rootReducer;
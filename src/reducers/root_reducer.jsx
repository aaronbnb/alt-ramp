import merge from 'lodash/merge';
import { ADD_COUNT } from '../actions/click_actions';

const initialState = ({
  count: '0'
});

const rootReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  console.log("Old State:");
  console.log(oldState);
  switch (action.type) {
    case ADD_COUNT:
      newState['count'] += 1;
      console.log(newState);
      return newState;
    default:
      return oldState;
  }
};

export default rootReducer;

import merge from 'lodash/merge';
import { ADD_COUNT } from '../actions/counter_actions';

const initialState = ({
  count: 0
});

const countReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  console.log("Old State: ");
  console.log(`${oldState}`);
  console.log("Action");
  console.log(`${action}`);
  switch (action.type) {
    case ADD_COUNT:
      newState['count'] += 1;
      console.log(newState);
      return newState;
    default:
      return oldState;
  }
};

export default countReducer;

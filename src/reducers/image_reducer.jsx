import merge from 'lodash/merge';
import { RECEIVE_IMAGE } from '../actions/image_actions';

const initialState = ({
  images: ["tom"]
});

const imageReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  console.log("Old State: ");
  console.log(`${oldState}`);
  console.log("Action");
  console.log(`${action}`);
  switch (action.type) {
    case RECEIVE_IMAGE:
      newState.images.push(action.image);
      console.log(newState);
      return newState;
    default:
      return oldState;
  }
};

export default imageReducer;

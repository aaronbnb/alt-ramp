import { combineReducers } from 'redux';

import imageReducer from './image_reducer';
import countReducer from './count_reducer';

const rootReducer = combineReducers({
  count: countReducer,
  image: imageReducer
});

export default rootReducer;

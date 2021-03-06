import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  console.log(rootReducer);
  return (createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  ));
};

export default configureStore;

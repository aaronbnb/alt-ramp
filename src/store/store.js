import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(rootReducer, {});

wrapStore(store, {
  portName: 'example'
});

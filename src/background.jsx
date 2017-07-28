import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import configureStore from './store/store';
import App from './components/app';

const proxyStore = configureStore();
window.proxyStore = proxyStore;

const anchor = document.createElement('div');
anchor.id = 'image-detector-header';

document.body.insertBefore(anchor, document.body.childNodes[0]);
const root = document.getElementById('image-detector-header');

ReactDOM.render(
  <Provider store={proxyStore}>
    <App document={root}/>
  </Provider>, document.getElementById('image-detector-header'));

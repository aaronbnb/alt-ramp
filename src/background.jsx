import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import configureStore from './store/store';
import Root from './components/root';
import { receiveCount } from './actions/counter_actions';

const proxyStore = configureStore();
window.configureStore = configureStore;
window.proxyStore = proxyStore;
window.receiveCount = receiveCount;

const anchor = document.createElement('div');
anchor.id = 'image-detector-header';

document.body.insertBefore(anchor, document.body.childNodes[0]);

let images = document.getElementsByTagName('img');
images = Array.prototype.slice.call(images);

images.forEach( image => {

});



const header = document.getElementById('image-detector-header');

ReactDOM.render(
  <Root store={proxyStore}/>, header);

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
console.log('hello');
document.addEventListener(('DOMContentLoaded'), () => {
  console.log('hello');
  let store = configureStore();
  window.store = store;
  const root = document.getElementsByTagName('html');
  ReactDOM.render(root);
});

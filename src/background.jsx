import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import configureStore from './store/store';
import Root from './components/root';
import { receiveCount } from './actions/counter_actions';

const Vision = require('@google-cloud/vision');


const proxyStore = configureStore();
window.configureStore = configureStore;
window.proxyStore = proxyStore;
window.receiveCount = receiveCount;

const anchor = document.createElement('div');
anchor.id = 'image-detector-header';

document.body.insertBefore(anchor, document.body.childNodes[0]);

let images = document.getElementsByTagName('img');
images = Array.slice.prototype.call(images);

images.forEach( image => {



// Imports the Google Cloud client library


// Instantiates a client
const vision = Vision();

// The name of the image file to annotate
const fileName = image.src;

// Prepare the request object
const request = {
  source: {
    filename: fileName
  }
};

// Performs label detection on the image file
vision.labelDetection(request)
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach((label) => console.log(label.description));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

});



const header = document.getElementById('image-detector-header');

ReactDOM.render(
  <Root store={proxyStore}/>, header);

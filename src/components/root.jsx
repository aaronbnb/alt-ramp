import React from 'react';
import { Provider } from 'react-redux';

import ImageDetectorContainer from './image_detector_container';

const Root = ({ store }) => {

  store.getState();

  return (
    <Provider store={store}>
      <ImageDetectorContainer document={document} images={document.getElementsByTagName('img')}/>
    </Provider>
  );
};

export default Root;

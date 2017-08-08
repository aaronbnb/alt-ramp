import * as ImageAPIUtil from './../util/image_api_util';

export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export const createImage = image => dispatch => {
  return (ImageAPIUtil.createImage(image)).then(
    newImage => dispatch(receiveImage(newImage))
  );
};

const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

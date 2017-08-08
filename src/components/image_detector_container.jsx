import { connect } from 'react-redux';
import ImageDetector from './image_detector';
import { receiveCount }from '../actions/counter_actions';
import { createImage }from '../actions/image_actions';

const mapStateToProps = (state, ownProps) => ({
  count: 0,
  images: document.getElementsByTagName('img').length
});

const mapDispatchToProps = (dispatch, {location}) => {
  console.log(location);
  return ({
  receiveCount: () => dispatch(receiveCount()),
  createImage: (image) => dispatch(createImage(image))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetector);

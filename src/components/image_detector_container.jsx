import { connect } from 'react-redux';
import ImageDetector from './image_detector';
import { receiveCount }from '../actions/click_actions';

const mapStateToProps = (state, ownProps) => ({
  count: 0
});

const mapDispatchToProps = (dispatch, {location}) => ({
  receiveCount: () => dispatch(receiveCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetector);

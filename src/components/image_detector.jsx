import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageDetector extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.boost = this.boost.bind(this);
  }

  componentWillMount() {
    let pageImages = document.getElementsByTagName('img');
    this.setState({images: pageImages.length});

    [].slice.call(pageImages).forEach( image => {
      this.props.createImage("image");
    });

    document.body.addEventListener('click', () => {
      console.log("here");
      this.boost();
      this.props.receiveCount();
    });
  }

  boost() {
    this.setState({count: (this.state.count + 1)});
  }

  render() {
    return (
      <div>
        {this.state.images}
      </div>
    );
  }
}

export default ImageDetector;

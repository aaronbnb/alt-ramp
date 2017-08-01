import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageDetector extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.boost = this.boost.bind(this);
  }

  componentDidMount() {
    let pageImages = document.getElementsByTagName('img');
    this.setState({images: pageImages.length});
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
    console.log(this.props);
    return (
      <div>
        <p id='counter'>Count: {this.state.count}</p>
        <p>Images: {this.state.images}</p>
      </div>
    );
  }
}

export default ImageDetector;

import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, images: 0 };
    this.boost = this.boost.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', () => {
      this.boost();
    });
  }

  boost() {
    this.setState({count: (this.state.count + 1)});
  }

  render() {

    return (
      <div>
        <p id='counter'>Count: {this.state.count}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    images: state.images
  };
};

export default connect(mapStateToProps)(App);

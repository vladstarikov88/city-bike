import React, {Component} from 'react';

import './preloader.scss';

class Preloader extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    )
  }
}

export default Preloader;

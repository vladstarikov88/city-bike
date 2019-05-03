import React, {Component} from 'react';
import './app.scss';

import Navbar from 'common/components/Navbar/containers/NavbarContainer'
export default class App extends Component {

  componentDidMount() {
    const {stations} = this.props;
    
    if (!stations.length) {
      this.props.requestBikes();
    }
  }

  render() {
    const {isPreloading} = this.props;

    return (
      <div>
        <Navbar />
        <p>
          {isPreloading ? 'yes' : 'no'}
        </p>
      </div>
    )
  }
}

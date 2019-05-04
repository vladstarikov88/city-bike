import React, {Component} from 'react';
import './app.scss';

import Navbar from 'common/components/Navbar/containers/NavbarContainer';
import Content from 'common/components/Content/containers/ContentContainer';
import Preloader from 'common/components/Preloader/Preloader';

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
        {isPreloading ? 
          <Preloader /> : 
          <div>
            <Navbar />
            <Content />
          </div>
        }
      </div>
    )
  }
}

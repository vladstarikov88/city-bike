import React, {Component} from 'react';
import Navbar from 'common/components/Navbar/containers/NavbarContainer';
import Content from 'common/components/Content/containers/ContentContainer';
import Preloader from 'common/components/Preloader/Preloader';

import styles from './App.module.scss';

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
          <div className={styles.wrapper}>
            <div className={styles.wrapper__navbar}>
              <Navbar />
            </div>
            <div className={styles.wrapper__content}>
              <Content />
            </div>
          </div>
        }
      </div>
    )
  }
}

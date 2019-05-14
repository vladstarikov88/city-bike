import React, {Component} from 'react';

import NavbarNetworks from './components/NavbarNetworks/containers/NavbarNetworksContainer';
import NavbarStations from './components/NavbarStations/containers/NavbarStationsContainer';
import Content from './components/Content/containers/ContentContainer';
import Preloader from 'common/components/Preloader/Preloader';

import styles from './App.module.scss';

export default class App extends Component {

  componentDidMount() {
    const {networks} = this.props;
    
    if (!networks.length) {
      this.props.requestNetworks();
    }
  }

  render() {
    // const {
    //   isNetworksPreloading,
    //   isStationsPreloading,
    // } = this.props;

    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.navbar}>
            <NavbarNetworks />
          </div>
          <div className={styles.navbar}>
            <NavbarStations />
          </div>
          <div className={styles.content}>
            <Content />
          </div>
        </div>
      </div>
    )
  }
}

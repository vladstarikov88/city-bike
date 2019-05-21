import React, {Component} from 'react';

import NavbarNetworks from './components/NavbarNetworks/NavbarNetworksContainer';
import NavbarStations from './components/NavbarStations/NavbarStationsContainer';
import Content from './components/Content/ContentContainer';
import Preloader from 'common/components/Preloader/Preloader';

import styles from './App.module.scss';

export default class App extends Component {

  componentDidMount() {
    const {
      networks,
    } = this.props;
    
    if (!networks.length) {
      this.props.requestNetworks();
    }
  }

  render() {
    const {
      isNetworksPreloading,
      hasStations,
      hasStationId
    } = this.props;

    return (
      <div>
        <div className={styles.wrapper}>
        {
          !isNetworksPreloading
            ? <div className={styles.navbar}>
                { <NavbarNetworks />}
              </div>
            : <Preloader />
        }
          {
            hasStations && 
            <div className={styles.navbar}>
              <NavbarStations />
            </div>
          }    
          {
            hasStationId &&
            <div className={styles.content}>
              <Content />
            </div>
          }
        </div>
      </div>
    )
  }
}

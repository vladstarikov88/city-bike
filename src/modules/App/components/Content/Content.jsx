import React, {Component} from 'react';

import SimpleGoogleMap from '../SimpleGoogleMap/SimpleGoogleMap';
import StationInfo from '../StationInfo/StationInfo';

import style from './Content.module.scss';
class Content extends Component {
  render() {
    const {selectedStation} = this.props;

    return (
      <div className={style.content}>
        <div className={style.content__container}>
          <h1>Content</h1>

          {
            selectedStation &&
              <div>
                <p>{selectedStation.name}</p>
                <p>{selectedStation.id}</p>
                <StationInfo 
                  selectedStation={selectedStation}
                /> 

                <SimpleGoogleMap 
                  lat={selectedStation.latitude}
                  lng={selectedStation.longitude}
                />
              </div>
          }
        </div>
      </div>
    )
  }
}

export default Content;

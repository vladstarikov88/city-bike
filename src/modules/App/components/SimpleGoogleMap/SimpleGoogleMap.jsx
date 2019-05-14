import React from 'react';

import { compose, withProps } from "recompose"
import { 
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker 
} from "react-google-maps";

const API_KEY = 'AIzaSyAaePC0vSFRl9-AqwV2uKmM6A5xVv5zNkI';

const SimpleGoogleMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => {
    const {lat, lng} = props;

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat, lng }}
      >
        {props.isMarkerShown && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    )
  }
)

export default SimpleGoogleMap;

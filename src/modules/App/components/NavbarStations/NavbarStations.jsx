import React, {Component} from 'react';

import Navbar from '../Navbar/Navbar'
class NavbarStations extends Component {
  setNetworkId(val) {
    this.props.setNetworkId(val)
  }

  render() {
    const {stations} = this.props;
    return (
      <Navbar 
        title="Stations"
        items={stations}
        action={id => this.setNetworkId(id)}
      />
    )    
  }
}
export default NavbarStations;

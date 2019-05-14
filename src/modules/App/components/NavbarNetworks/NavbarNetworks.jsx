import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
class NavbarNetworks extends Component {

  requestStations(val) {
    this.props.requestStations(val)
  }

  render() {
    const {networks} = this.props;
    return (
      <Navbar 
        title="Networks"
        items={networks}
        action={val => this.requestStations(val)}
      />
    )    
  }
}
export default NavbarNetworks;

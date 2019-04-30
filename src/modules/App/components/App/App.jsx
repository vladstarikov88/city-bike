import React, {Component} from 'react';
import './app.scss';


export default class App extends Component {
  render() {
    console.log(this.props);
    const {isPreloading} = this.props;

    return (
      <div>{isPreloading ? 'yes' : 'no'}</div>
    )
  }
}

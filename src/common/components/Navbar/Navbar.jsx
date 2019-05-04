import React, {Component} from 'react';

import style from './Navbar.module.scss';

class Navbar extends Component {
  render() {
    const {stations} = this.props;
    return (
      <div className={style.navbar}>
        <ul className={style.navbar__group}>
          { stations.map(station => (
              <li 
                key={station.id}
                className={style.navbar__item}
              >
                <a href="/">{station.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    )    
  }
}
export default Navbar;

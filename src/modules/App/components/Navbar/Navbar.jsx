import React, {Component} from 'react';

import style from './Navbar.module.scss';

class Navbar extends Component {
  render() {
    const {title, items, action} = this.props;
    return (
      <div className={style.navbar}>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.group}>
          { items.map(item => (
              <li 
                key={item.id}
                className={style.item}
              >
                <a href="#"
                  onClick={ () => action(item.id)}
                >{item.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    )    
  }
}

export default Navbar;

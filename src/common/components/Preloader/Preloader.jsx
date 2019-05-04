import React, {Component} from 'react';

import style from './Preloader.module.scss';

class Preloader extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.spinner}>
          <div className={style.double__bounce_1}></div>
          <div className={style.double__bounce_2}></div>
        </div>
      </div>
    )
  }
}

export default Preloader;

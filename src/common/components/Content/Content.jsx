import React, {Component} from 'react';
import style from './Content.module.scss';

class Content extends Component {
  render() {
    return (
      <div className={style.content}>
        <div className={style.content__container}>
          <h1>Content</h1>
        </div>
      </div>
    )
  }
}

export default Content;

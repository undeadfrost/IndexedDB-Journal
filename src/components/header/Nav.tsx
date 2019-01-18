import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.css';

export default () => (
  <ul className={styles.nav}>
    <li><Link to={`/${new Date().getFullYear()}`}>目录</Link></li>
    <li><Link to={'/writing'}>写日记</Link></li>
    <li><Link to={'/setting'}>设置</Link></li>
  </ul>
)

import React from 'react';
import Nav from './Nav';
import styles from './index.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrap}>
      <h1>头部</h1>
      <Nav/>
    </div>
  </header>
)

export default Header;

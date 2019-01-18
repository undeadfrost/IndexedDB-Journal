import React from 'react';
import styles from './index.module.css';

interface Props {
  left: string
  right: number
}

export default (props: Props) => (
  <div className={styles.card}>
    <span>{props.left}</span>
    <span>{props.right}</span>
  </div>
)

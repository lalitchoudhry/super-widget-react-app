import React from 'react';
import styles from './LeftBanner.module.css';

export default function LeftBanner() {
  return (
    <div className={styles.container}>
        <div className={styles.login}>Already have an account ? <button>LOGIN</button></div>
        <div className={styles.banner_text}>Discover new things on Superapp</div>
    </div>
  );
}

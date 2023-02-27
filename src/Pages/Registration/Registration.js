import React from 'react';
import LeftBanner from '../../Component/LeftBanner/LeftBanner';
import RegisterForm from '../../Component/RegisterForm/RegisterForm';
import styles from './Registration.module.css'

function Registration() {
  return (
    <div className={styles.container}>
        <LeftBanner />
        <RegisterForm />
    </div>
  )
}

export default Registration
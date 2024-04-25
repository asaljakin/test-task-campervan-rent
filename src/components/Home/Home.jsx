import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className={styles.fullscreenImage}></div>
      <div className={styles.container}>
        <div className={styles.columnTitle}>
          <h1 className={styles.title}>Embrace the Journey, Enjoy the Ride!</h1>
          <span className={styles.subtitle}>Camper van rent</span>
        </div>
        <div className={styles.columnBtn}>
          <Link to="/catalog" className={styles.button}>
            <span>Let's Go</span>
          </Link>
        </div>
      </div>
    </>
  );
};

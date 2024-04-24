import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className={styles.fullscreenImage}></div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1 className={styles.title}>
              Embrace the Journey, Enjoy the Ride!
              <br />
              <span className={styles.subtitle}>Camper van rent</span>
            </h1>
          </div>
        </div>
        <div className={styles.wrapper}>
          <Link to="/catalog" className={styles.button}>
            <span>Let's Go</span>
          </Link>
        </div>
      </div>
    </>
  );
};

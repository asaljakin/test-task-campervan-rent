import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import '../../styles/globalStyles.css';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;

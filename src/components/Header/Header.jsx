import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBox}>
        <Link to="/">CamperVanRent</Link>
        <nav className={styles.navList}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={styles.navLink}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={styles.navLink}>
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

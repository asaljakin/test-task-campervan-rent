import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  const favCampers = useSelector(selectFavorite);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBox}>
        <Link to="/" className={styles.logo}>
          CamperVanRent
        </Link>
        <nav className={styles.navList}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={styles.navLink}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={styles.navLink}>
            Favorites {favCampers?.length ? '(' + favCampers?.length + ')' : ''}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

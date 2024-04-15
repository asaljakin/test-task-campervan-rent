import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBox}>
        <NavLink to="/">CampersRental</NavLink>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">favorites</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

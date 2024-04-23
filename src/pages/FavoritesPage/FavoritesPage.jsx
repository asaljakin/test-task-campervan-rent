import { CampersList } from 'components/Catalog/CampersList/CampersList';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favoriteCampers = useSelector(selectFavorite);

  return (
    <div className={styles.wrapper}>
      <CampersList campers={favoriteCampers} isNotFavirite={false} />
    </div>
  );
};

export default FavoritesPage;

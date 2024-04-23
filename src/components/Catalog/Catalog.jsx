import { useSelector } from 'react-redux';
import { CampersList } from './CampersList/CampersList';
import { Filters } from './Filters/Filters';
import { selectCampers } from '../../redux/selectors';
import styles from './Catalog.module.css';

export const Catalog = () => {
  const curCampers = useSelector(selectCampers);
  return (
    <div className={styles.catalogContainer}>
      <Filters />
      <CampersList campers={curCampers} />
    </div>
  );
};

import { CampersList } from './CampersList/CampersList';
import { Filters } from './Filters/Filters';
import { useSelector } from 'react-redux';
import styles from './Catalog.module.css';
import { selectCampers } from '../../redux/selectors';

export const Catalog = () => {
  const catalog = useSelector(selectCampers);
  return (
    <div className={styles.catalogContainer}>
      <Filters />
      <CampersList catalog={catalog} />
    </div>
  );
};

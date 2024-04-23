import { CampersList } from './CampersList/CampersList';
import { Filters } from './Filters/Filters';
import styles from './Catalog.module.css';

export const Catalog = () => {
  return (
    <div className={styles.catalogContainer}>
      <Filters />
      <CampersList />
    </div>
  );
};

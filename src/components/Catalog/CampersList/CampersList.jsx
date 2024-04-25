import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectPage } from '../../../redux/selectors';
import { CampersCard } from '../CampersCard/CampersCard';
import { Loader } from '../../Loader/Loader';
import styles from './CampersList.module.css';
import { useEffect } from 'react';
import { getCampersThunk, setPage } from '../../../redux/thunks';

export const CampersList = ({ campers, isNotFavirite = true }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const curPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(getCampersThunk(curPage));
  }, [dispatch, curPage]);

  const handleLoadMore = () => {
    dispatch(setPage(1));
  };

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <ul>
        {campers.map(item => (
          <CampersCard key={item._id} card={item} />
        ))}
      </ul>
      {isNotFavirite && (
        <button className={styles.btnLoadMore} onClick={handleLoadMore}>
          <p className={styles.btnText}>Load More</p>
        </button>
      )}
    </div>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsLoading,
  selectPage,
  selectTotal,
} from '../../../redux/selectors';
import { CampersCard } from '../CampersCard/CampersCard';
import { Loader } from '../../Loader/Loader';
import styles from './CampersList.module.css';
import { useEffect } from 'react';
import { getCampersThunk, setPage } from '../../../redux/thunks';

export const CampersList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const totalCampers = useSelector(selectTotal);
  const curCampers = useSelector(selectCampers);
  const curPage = useSelector(selectPage);
  // const items = useSelector(selectPage);
  // const lastElement = currentPage < Math.ceil(totalCampers / 4);
  // const onLastElementFetching = curCampers.length >= totalCampers;

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
        {curCampers.map(item => (
          <CampersCard key={item._id} card={item} />
        ))}
      </ul>
      <button className={styles.btnLoadMore} onClick={handleLoadMore}>
        <p className={styles.btnText}>Load More</p>
      </button>
    </div>
  );
};

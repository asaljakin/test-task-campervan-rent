import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsLoading,
  selectPage,
  selectTotal,
} from '../../../redux/selectors';
import { CampersCard } from '../CampersCard/CampersCard';
import { Loader } from '../../Loader/Loader';
import { setPage } from '../../../redux/catalogSlice';
import styles from './CampersList.module.css';
import { useEffect } from 'react';
import { getCampers } from '../../../api/mockApi';

export const CampersList = ({ catalog }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const totalCampers = useSelector(selectTotal);
  const curCampers = useSelector(selectCampers);
  const currentPage = useSelector(selectPage);
  // const lastElement = currentPage < Math.ceil(totalCampers / 4);
  // const onLastElementFetching = curCampers.length >= totalCampers;
  useEffect(() => {
    dispatch(getCampers({ currentPage }));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(setPage(1));
  };

  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {{ catalog }.map(item => (
          <CampersCard key={item._id} value={item} />
        ))}
      </ul>
      {/* {lastElement && !isLoading && ( */}
      <button className={styles.btnLoadMore} onClick={handleLoadMore}>
        <p className={styles.btnText}>Load More</p>
      </button>
      {/* )} */}
    </div>
  );
};

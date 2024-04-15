import { useDispatch } from 'react-redux';
import { getAllCampers } from '../../../api/mockApi';
import sprite from '../../../assets/sprite.svg';

import { useEffect, useState } from 'react';

export const Filters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <div>
      <form>
        <label>Location</label>
        <input type="text" id="location" name="location" placeholder="City" />
        <svg width="18px" height="20px">
          <use xlinkHref={sprite + '#grey-map-pin'} />
        </svg>
      </form>

      <p>Filters</p>
    </div>
  );
};

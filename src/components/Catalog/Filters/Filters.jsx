import { useDispatch } from 'react-redux';
import { getAllCampers } from '../../../redux/operations';
import { PiWind } from 'react-icons/pi';
import sprite from '../../../assets/sprite.svg';
import {
  CheckboxCntnr,
  CheckboxInput,
  CheckboxLabel,
  CheckboxText,
  EquipmentFilterBox,
  FilterItem,
  FilterTitle,
  Filterlist,
  FiltersText,
  HorizontalLine,
  LocationForm,
  LocationInput,
  LocationLabel,
  LocationSvg,
  RadioCntnr,
  RadioInput,
  RadioLabel,
  RadioText,
  SearchBtn,
  TypeFilterBox,
} from './Filters.styled';
import { useEffect, useState } from 'react';
import styles from './Filters.module.css';

export const Filters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = e => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <form className={styles.locationForm}>
        <label className={styles.locationLabel}>Location</label>
        <input
          className={styles.locationInput}
          type="text"
          id="location"
          name="location"
          placeholder="City"
        />
        <svg className={styles.locationSvg} width="18px" height="20px">
          <use xlinkHref={sprite + '#grey-map-pin'} />
        </svg>
      </form>

      <h4 className={styles.filtersText}>Filters</h4>
      <div className={styles.equipmentFilterBox}>
        <h3 className={styles.filterTitle}>Vehicle equipment</h3>
        <hr className={styles.horizontalLine} />
        <ul className={styles.filterList}>
          <li className={styles.filterItem}>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                onChange={handleChange}
              />
              <div className={styles.checkboxCont} checked={isChecked}>
                <PiWind size="32" />
                <p className={styles.checkboxText}>AC</p>
              </div>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                onChange={handleChange}
              />
              <div className={styles.checkboxCont} checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + '#automatic'} />
                </svg>
                <p className={styles.checkboxText}>Automatic</p>
              </div>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                onChange={handleChange}
              />
              <div className={styles.checkboxCont} checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + '#kitchen'} />
                </svg>
                <p className={styles.checkboxText}>Kitchen</p>
              </div>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                onChange={handleChange}
              />
              <div className={styles.checkboxCont} checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + '#tv'} />
                </svg>
                <p className={styles.checkboxText}>TV</p>
              </div>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                onChange={handleChange}
              />
              <div className={styles.checkboxCont} checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + '#shower'} />
                </svg>
                <p className={styles.checkboxText}>Shower/WC</p>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.typeFilterBox}>
        <h3 className={styles.filterTitle}>Vehicle type</h3>
        <hr className={styles.horizontalLine} />
        <ul className={styles.filterList}>
          <li className={styles.filterItem}>
            <label className={styles.radioLabel}>
              <input className={styles.radioInput} type="radio" name="radio" />
              <div className={styles.radioCont}>
                <svg width="40px" height="28px">
                  <use xlinkHref={sprite + '#radio-van'} />
                </svg>
                <span className={styles.radioText}>Van</span>
              </div>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label className={styles.radioLabel}>
              <input className={styles.radioInput} type="radio" name="radio" />
              <div className={styles.radioCont}>
                <svg width="40px" height="28px">
                  <use xlinkHref={sprite + '#radio-integrated'} />
                </svg>
                <span className={styles.radioText}>Fully Integrated</span>
              </div>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label className={styles.radioLabel}>
              <input className={styles.radioInput} type="radio" name="radio" />
              <div className={styles.radioCont}>
                <svg width="40px" height="28px">
                  <use xlinkHref={sprite + '#radio-alcove'} />
                </svg>
                <span className={styles.radioText}>Alcove</span>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

import sprite from '../../../assets/sprite.svg';
import { PiWind } from 'react-icons/pi';
import styles from './Features.module.css';

export const Features = ({ value }) => {
  const {
    adults,
    details,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = value;
  console.log(value);
  return (
    <div className={styles.featuresContainer}>
      <ul className={styles.optionsList}>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#adults'} />
          </svg>
          <p className={styles.optionsText}>{adults} adults</p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#automatic'} />
          </svg>
          <p className={styles.optionsText}>{transmission}</p>
        </li>
        <li className={styles.optionsItem}>
          <PiWind size="20" />
          <p className={styles.optionsText}>AC</p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#patrol'} />
          </svg>
          <p className={styles.optionsText}>{engine}</p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#kitchen'} />
          </svg>
          <p className={styles.optionsText}>Kitchen</p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#debs'} />
          </svg>
          <p className={styles.optionsText}>{details.beds} beds</p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#conditioner'} />
          </svg>
          <p className={styles.optionsText}>
            {details.airConditioner} air conditioner
          </p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#cd'} />
          </svg>
          <p className={styles.optionsText}>CD</p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#radio'} />
          </svg>
          <p className={styles.optionsText}>Radio</p>
        </li>
        <li className={styles.optionsItem}>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#hob'} />
          </svg>
          <p className={styles.optionsText}>{details.hob} hob</p>
        </li>
      </ul>

      <div>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>
        <hr className={styles.horizontalLine} />
        <ul>
          <li className={styles.detailsItem}>
            <p className={styles.detailsName}>Form</p>
            <span className={styles.detailsValue}>{form}</span>
          </li>
          <li className={styles.detailsItem}>
            <p className={styles.detailsName}>Length</p>
            <span className={styles.detailsValue}>{length}</span>
          </li>
          <li className={styles.detailsItem}>
            <p className={styles.detailsName}>Width</p>
            <span className={styles.detailsValue}>{width}</span>
          </li>
          <li className={styles.detailsItem}>
            <p className={styles.detailsName}>Height</p>
            <span className={styles.detailsValue}>{height}</span>
          </li>
          <li className={styles.detailsItem}>
            <p className={styles.detailsName}>Tank</p>
            <span className={styles.detailsValue}>{tank}</span>
          </li>
          <li className={styles.detailsItem}>
            <p className={styles.detailsName}>Consumption</p>
            <span className={styles.detailsValue}>{consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

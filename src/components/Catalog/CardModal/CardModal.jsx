/* eslint-disable react/prop-types */
import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';
import { OrderForm } from '../OrderForm/OrderForm';
import styles from './CardModal.module.css';

const CardModal = ({ closeModal, value }) => {
  const { name, rating, reviews, location, price, gallery, description } =
    value;

  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showRedLine, setShowRedLine] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleFeaturesClick = () => {
    setShowOrderForm(true);
    setShowRedLine(true);
    setShowFeatures(true);
    setShowReviews(false);
    setClickedButton('Features');
  };

  const handleReviewsClick = () => {
    setShowOrderForm(true);
    setShowRedLine(true);
    setShowReviews(true);
    setShowFeatures(false);
    setClickedButton('Reviews');
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.cardTitle}>{name}</h2>

        <div className={styles.reviewsInfoBox}>
          <div className={styles.reviewsBox}>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#star'} />
            </svg>
            <a className={styles.reviewsLink} href="/reviews">
              <p>
                <span>{rating}</span>({reviews.length} Reviews)
              </p>
            </a>
          </div>
          <div className={styles.locationBox}>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#map-pin'} />
            </svg>
            <div className={styles.locationText}>{location}</div>
          </div>
        </div>
        <p className={styles.cardPrice}>€{price}.00</p>
      </div>

      <div>
        <ul className={styles.imgList}>
          <li>
            <img className={styles.carImg} src={gallery[0]} alt="car1" />
          </li>
          <li>
            <img className={styles.carImg} src={gallery[1]} alt="car2" />
          </li>
          <li>
            <img className={styles.carImg} src={gallery[2]} alt="car3" />
          </li>
        </ul>
        <p className={styles.descriptionText}>{description}</p>

        <div>
          <ul className={styles.informList}>
            <li className={styles.informItem}>
              <button
                className={styles.infoMenuBtn}
                onClick={handleFeaturesClick}
              >
                Features
              </button>
              {clickedButton === 'Features' && showRedLine && (
                <hr className={styles.redLine} />
              )}
            </li>
            <li className={styles.informItem}>
              <button
                className={styles.infoMenuBtn}
                onClick={handleReviewsClick}
              >
                Reviews
              </button>
              {clickedButton === 'Reviews' && showRedLine && (
                <hr className={styles.redLine} />
              )}
            </li>
          </ul>
          <hr className={styles.horizontalLine} />
          <div className={styles.informBox}>
            {showFeatures && <Features value={value} />}
            {showReviews && <Reviews value={value} />}
            {showOrderForm && <OrderForm />}
          </div>
        </div>
      </div>
      <button className={styles.closeBtn} onClick={closeModal}>
        <svg width="32px" height="32px">
          <use xlinkHref={sprite + '#cross'} />
        </svg>
      </button>
    </div>
  );
};

export default CardModal;

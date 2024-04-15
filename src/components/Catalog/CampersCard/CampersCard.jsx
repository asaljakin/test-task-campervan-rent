/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-modal';
import { PiWind } from 'react-icons/pi';
import sprite from '../../../assets/sprite.svg';
import CardModal from '../CardModal/CardModal';
import styles from './CampersCard.module.css';

export const CampersCard = ({ value }) => {
  const {
    name,
    gallery,
    price,
    location,
    reviews,
    rating,
    description,
    adults,
    details,
    engine,
    transmission,
  } = value;

  // modal
  Modal.setAppElement('#root');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.cardContainer}>
      <img className={styles.carImg} src={gallery[0]} alt="car" />
      <div className={styles.cardInfoBox}>
        <div className={styles.titleInfoBox}>
          <div clasname={styles.titleInfoLine}>
            <h2 className={styles.cardTitle}>{name}</h2>
            <div className={styles.priceBox}>
              <p className={styles.cardPrice}>€{price}.00</p>
              <button className={styles.heartBtn}>
                <svg className={styles.heartSvg} width="24px" height="24px">
                  <use xlinkHref={sprite + '#heart'} />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.reviewsInfoBox}>
            <div className={styles.reviewsBox}>
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#star'} />
              </svg>
              <a className={styles.reviewsLink} href="#">
                <p>
                  <span>{rating}</span>({reviews.length} Reviews)
                </p>
              </a>
            </div>
            <div clasname={styles.locationBox}>
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#map-pin'} />
              </svg>
              <div clasname={styles.locationText}>{location}</div>
            </div>
          </div>
        </div>

        <p clasname={styles.descriptionText}>{description}</p>

        <ul clasname={styles.optionsList}>
          <li clasname={styles.optionsItem}>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + '#adults'} />
            </svg>
            <p clasname={styles.optionsText}>{adults} adults</p>
          </li>
          <li clasname={styles.optionsItem}>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + '#automatic'} />
            </svg>
            <p clasname={styles.optionsText}>{transmission}</p>
          </li>
          <li clasname={styles.optionsItem}>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + '#patrol'} />
            </svg>
            <p clasname={styles.optionsText}>{engine}</p>
          </li>
          <li clasname={styles.optionsItem}>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + '#kitchen'} />
            </svg>
            <p clasname={styles.optionsText}>Kitchen</p>
          </li>
          <li clasname={styles.optionsItem}>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + '#debs'} />
            </svg>
            <p clasname={styles.optionsText}>{details.beds} beds</p>
          </li>
          <li clasname={styles.optionsItem}>
            <PiWind size="20" />
            <p clasname={styles.optionsText}>AC</p>
          </li>
        </ul>
        <button clasname={styles.showMoreBtn} onClick={openModal}>
          Show more
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 18, 19, 0.4)',
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '20px',
            outline: 'none',
            padding: '40px',
            width: '982px',
            height: '720px',
            maxWidth: '80%',
            maxHeight: '80%',
          },
        }}
      >
        <CardModal closeModal={closeModal} value={value} />
      </Modal>
    </div>
  );
};

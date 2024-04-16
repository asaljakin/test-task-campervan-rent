import sprite from '../../../assets/sprite.svg';
import styles from './Reviews.module.css';

export const Reviews = ({ value: { reviews } }) => {
  const yellowStar = (
    <svg width="16px" height="16px">
      <use xlinkHref={sprite + '#yellow-star'} />
    </svg>
  );

  const greyStar = (
    <svg width="16px" height="16px">
      <use xlinkHref={sprite + '#grey-star'} />
    </svg>
  );

  const raiting = data => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < data) {
        stars.push(<span key={i}>{yellowStar}</span>);
      } else {
        stars.push(<span key={i}>{greyStar}</span>);
      }
    }

    return <div className={styles.iconsWrapper}>{stars}</div>;
  };

  return (
    <>
      <ul>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
          <li className={styles.reviewerItem} key={reviewer_name}>
            <div className={styles.reviewerNameBox}>
              <div className={styles.circleBox}>
                <p className={styles.firstLetterText}>
                  {reviewer_name.charAt(0)}
                </p>
              </div>
              <div>
                <h4 className={styles.nameText}>{reviewer_name}</h4>
                {raiting(reviewer_rating)}
              </div>
            </div>
            <p className={styles.reviewerText}>{comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

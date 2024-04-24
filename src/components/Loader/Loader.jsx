import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.fullScreenLoader}>
      <ThreeCircles
        visible={true}
        height="70"
        width="70"
        innerCircleColor="#ffc531"
        middleCircleColor="#e44848"
        outerCircleColor="#101828"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className={styles.spiner}
      />
    </div>
  );
};

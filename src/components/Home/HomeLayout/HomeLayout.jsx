import styles from './WellcomeLayout.module.css';

export const ProductsLayout = ({ children }) => {
  return (
    <>
      <div className={styles.BgImgHolder}>{children}</div>
    </>
  );
};

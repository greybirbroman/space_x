import styles from './CustomButton.module.css';

const CustomButton = ({ title, areaLabel, type}) => {
  return (
    <button
      className={styles.customButton}
      area-aria-label={areaLabel}
      type={type || 'button'}
    >
      {title}
      <span className={`${styles.buttonLine} ${styles.top}`}></span>
      <span className={`${styles.buttonLine} ${styles.right}`}></span>
      <span className={`${styles.buttonLine} ${styles.bottom}`}></span>
      <span className={`${styles.buttonLine} ${styles.left}`}></span>
    </button>
  );
};

export default CustomButton;

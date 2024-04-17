import styles from "./ButtonLoadMore.module.css";

const ButtonLoadMore = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default ButtonLoadMore;

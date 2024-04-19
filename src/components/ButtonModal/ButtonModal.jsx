import styles from "./ButtonModal.module.css";

const ButtonModal = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default ButtonModal;

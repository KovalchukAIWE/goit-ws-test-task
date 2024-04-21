import styles from "./ButtonModal.module.css";

const ButtonModal = ({ onClick, text, active }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${active ? styles.buttonActive : ""}`}
    >
      {text}
    </button>
  );
};

export default ButtonModal;

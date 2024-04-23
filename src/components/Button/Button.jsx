import styles from './Button.module.css';

const Button = ({ text, type = 'button', onClick, disabled = false }) => {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;

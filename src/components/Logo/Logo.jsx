import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="/logo.png" alt="" />
    </div>
  );
};

export default Logo;

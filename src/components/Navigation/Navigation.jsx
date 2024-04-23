import { useId } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import LIST from './Navigation.data';

const Navigation = () => {
  return (
    <>
      <ul className={styles.menu}>
        {LIST.map((item) => (
          <Link to={item.to} className={styles.item} key={useId()}>
            {item.title}
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Navigation;

import { useEffect, useState } from 'react';
import styles from './List.module.css';
import axios from 'axios';

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
      setList(data);
    });
  }, []);

  return (
    <ul className={styles.list}>
      {list.map(({ title, id }) => (
        <Item title={title} key={`list-item ${id}`}></Item>
      ))}
    </ul>
  );
};

const Item = ({ title, description }) => {
  return (
    <li className={styles.item}>
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
};

export default List;

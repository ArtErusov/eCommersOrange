import { useEffect, useState } from 'react';
import BannersBlock from './components/BannersBlock/BannersBlock';
import SelectionBlock from './components/SelectionBlock/SelectionBlock';

import styles from './styles.module.css';

function MainPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/Orange')
      .then((res) => res.json())
      .then((json) => {
        console.log('dsfsdfsd', json);
        setItems(json);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <BannersBlock />
      <SelectionBlock />
      {items.map((item, index) => (
        <p key={index}>{item.src[0]}</p>
      ))}
    </div>
  );
}
export default MainPage;

import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/product.ts';

import BannersBlock from './components/BannersBlock/BannersBlock.tsx';
import styles from './styles.module.css';
import ProductBlok from './components/ProductBlok/ProductBlok.tsx';

const MainPage: FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(false);
    fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/Orange`)
      .then((res) => res.json())
      .then((json: Product[]) => {
        setItems(json);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <BannersBlock item={items[1]} />
      ) : (
        <div className={styles.temporary_skeleton}>тут будет прогрузка </div>
      )}

      <ProductBlok />

      <div style={{ width: '100%', height: '120px', backgroundColor: 'lightgray' }}></div>
    </div>
  );
};
export default MainPage;

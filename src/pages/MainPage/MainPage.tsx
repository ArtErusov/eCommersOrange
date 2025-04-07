import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/product.ts';

import BannersBlock from './components/BannersBlock/BannersBlock.tsx';
import SelectionBlock from './components/SelectionBlock/SelectionBlock.tsx';
import ProductCard from '../../components/ui/ProductCard/ProductCard.tsx';

import styles from './styles.module.css';

const MainPage: FC = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/Orange')
      .then((res) => res.json())
      .then((json: Product[]) => {
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
      <div className={styles.productList}>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div style={{ width: '100%', height: '120px', backgroundColor: 'lightgray' }}></div>
    </div>
  );
};
export default MainPage;

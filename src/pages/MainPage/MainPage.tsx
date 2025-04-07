import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/product.ts';

import BannersBlock from './components/BannersBlock/BannersBlock.tsx';
import SelectionBlock from './components/SelectionBlock/SelectionBlock.tsx';
import ProductCard from '../../components/ui/ProductCard/ProductCard.tsx';

import styles from './styles.module.css';
import Sceleton from '../../components/ui/Sceleton/Sceleton.tsx';

const MainPage: FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(false);
    fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/Orange')
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
      <BannersBlock />
      <SelectionBlock />

      <div className={styles.productList}>
        {isLoading
          ? items.map((item) => <ProductCard key={item.id} item={item} />)
          : [...Array(12)].map((_, index) => <Sceleton key={index} />)}
      </div>

      <div style={{ width: '100%', height: '120px', backgroundColor: 'lightgray' }}></div>
    </div>
  );
};
export default MainPage;

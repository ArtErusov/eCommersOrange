import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/product.ts';

import BannersBlock from './components/BannersBlock/BannersBlock.tsx';
import SelectionBlock from './components/SelectionBlock/SelectionBlock.tsx';
import ProductCard from '../../components/ui/ProductCard/ProductCard.tsx';

import styles from './styles.module.css';
import Sceleton from '../../components/ui/Sceleton/Sceleton.tsx';

interface Category {
  id: string;
  name: string;
}

const MainPage: FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ----------SelectCategory---------logics------------
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const category: Category[] = [
    { id: 'all', name: 'Все' },
    { id: 'ps5', name: 'ps 5' },
    { id: 'Switch', name: 'Swith' },
    { id: 'Xbox', name: 'Xbox' },
    { id: 'PC', name: 'PC' },
  ];

  // https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?platforms=PC

  useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange${
        selectedCategory !== 'all' ? `?platforms=${selectedCategory}` : ''
      }`,
    )
      .then((res) => res.json())
      .then((json: Product[]) => {
        setItems(json);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, [selectedCategory]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <BannersBlock item={items[1]} />
      ) : (
        <div className={styles.temporary_skeleton}>тут будет прогрузка </div>
      )}

      <SelectionBlock
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

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

import { FC, useEffect, useState } from 'react';
import { Product } from '@/shared/types/product.ts';

import BannersBlock from './BannersBlock/BannersBlock.tsx';
import ProductBlok from './ProductBlok/ProductBlok.tsx';
import axios from 'axios';

const MainPage: FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<Product[]>(
          'https://65523e2c5c69a7790329c0eb.mockapi.io/Orange',
        );
        setItems(data);
        setIsLoading(false);
        console.log('Загрузка прошла', items);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setIsLoading(false);
        return;
      }
    };
    fetchData();
  }, []);
  console.log(items);
  return (
    <>
      <BannersBlock isLoading={isLoading} item={items[5]} />
      <ProductBlok />
    </>
  );
};
export default MainPage;

import { FC, useEffect, useState } from 'react';
import { Product } from '@/shared/types/product.ts';

import BannersBlock from './components/BannersBlock/BannersBlock.tsx';
import ProductBlok from './components/ProductBlok/ProductBlok.tsx';
import BannerSkeleton from '@/components/ui/BannerSkeleton.tsx';
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
      {isLoading ? <BannerSkeleton /> : <BannersBlock item={items[5]} />}
      <ProductBlok />
    </>
  );
};
export default MainPage;

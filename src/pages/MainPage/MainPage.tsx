import { FC, useEffect, useState } from 'react';
import { Product } from '@/shared/types/product.ts';

import BannersBlock from './components/BannersBlock/BannersBlock.tsx';
import ProductBlok from './components/ProductBlok/ProductBlok.tsx';
import Header from '@/components/layout/Header/Header.tsx';
import BannerSkeleton from '@/components/ui/BannerSkeleton.tsx';

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
    <>
      <Header />
      <div className="container">
        {isLoading ? <BannersBlock item={items[5]} /> : <BannerSkeleton />}
        <ProductBlok />
      </div>
      <div className="mt-[400px] w-[full] h-[120px] bg-[var(--gray)]"></div>
    </>
  );
};
export default MainPage;

import { FC, useEffect, useState } from 'react';
import styles from './CatalogPage.module.css';
import { Product } from '@/shared/types/product';
import axios from 'axios';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import { Link, useSearchParams } from 'react-router-dom';
import Skeleton from '@/components/ui/Skeleton/Skeleton';

const CatalogPage: FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const hendleSerch = (e: string) => {
    setSearchParams({ q: e });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<Product[]>(
          'https://65523e2c5c69a7790329c0eb.mockapi.io/Orange',
        );
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setIsLoading(false);
        return;
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.breadcrumbs}>
        <Link to={'/'}>Главная </Link> <p>--</p> <p>Каталог</p>
      </div>
      <div className={styles.topPlug}>
        <p>верхнее меню сортировки</p>
        <button onClick={() => hendleSerch('price')} className={styles.button}>
          Сортировка по цене
        </button>
        <button onClick={() => hendleSerch('pc')} className={styles.button}>
          Сортировка по платформе
        </button>
      </div>
      <div className={styles.contetn}>
        <div className={styles.leftPlug}>
          <p>{searchQuery}</p>
        </div>
        <div className={styles.productList}>
          {isLoading
            ? [...Array(16)].map((_, index) => <Skeleton type={'card'} key={index} />)
            : items.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
};
export default CatalogPage;

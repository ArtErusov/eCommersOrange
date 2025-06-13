import { FC, useEffect, useState } from 'react';
import styles from './CatalogPage.module.css';
import { Product } from '@/shared/types/product';
import axios from 'axios';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Sceleton from '@/components/ui/Sceleton';
import { Link } from 'react-router-dom';

const CatalogPage: FC = () => {
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
      <div className={styles.topPlug}>верхнее меню сортировки</div>
      <div className={styles.contetn}>
        <div className={styles.leftPlug}></div>
        <div className={styles.productList}>
          {isLoading
            ? [...Array(16)].map((_, index) => <Sceleton key={index} />)
            : items.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
        {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      </div>
    </>
  );
};
export default CatalogPage;

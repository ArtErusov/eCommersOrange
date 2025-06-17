import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Skeleton from '@/components/ui/Skeleton/Skeleton';
import SelectionBlock from './SelectionBlock/SelectionBlock';

import styles from './styles.module.css';

import { FC, useEffect, useState } from 'react';
import { Product } from '@/shared/types/product';
import Pagination from './Pagination/Pagination';

interface Category {
  id: string;
  name: string;
}

const ProductBlok: FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [elementsOnPage, setElementsOnPage] = useState<number>(1);

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
  // https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?platforms=Ps5&page=2&limit=6
  // https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?page=1&limit=2

  // Сделать фильтрацию в Кверти параметрах

  useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?${
        selectedCategory !== 'all' ? `platforms=${selectedCategory}&` : ''
      }page=${page}&limit=6`,
    )
      .then((res) => res.json())
      .then((json: Product[]) => {
        setItems(json);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, [selectedCategory, page]);

  useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange${
        selectedCategory !== 'all' ? `?platforms=${selectedCategory}` : ''
      }`,
    )
      .then((res) => res.json())
      .then((json: Product[]) => {
        setElementsOnPage(Math.ceil(json.length / 6));
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
    console.log(elementsOnPage);
  }, [selectedCategory]);

  return (
    <>
      <SelectionBlock
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className={styles.productList}>
        {isLoading
          ? items.map((item) => <ProductCard key={item.id} item={item} />)
          : [...Array(6)].map((_, index) => <Skeleton type="card" key={index} />)}
      </div>

      <Pagination elementsOnPage={elementsOnPage} page={page} setPage={setPage} />
    </>
  );
};
export default ProductBlok;

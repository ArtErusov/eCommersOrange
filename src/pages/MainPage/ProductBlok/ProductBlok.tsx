import { useSearchParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Skeleton from '@/components/ui/Skeleton/Skeleton';
import SelectionBlock from './SelectionBlock/SelectionBlock';
import Pagination from './Pagination/Pagination';

import styles from './styles.module.css';
import { Product } from '@/shared/types/product';
import { Category } from './ProductBlok.types';

const ProductBlok: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const page = Number(searchParams.get('page') || 1);

  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [elementsOnPage, setElementsOnPage] = useState<number>(1);

  const category: Category[] = [
    { id: 'all', name: 'Все' },
    { id: 'ps5', name: 'ps 5' },
    { id: 'Switch', name: 'Switch' },
    { id: 'Xbox', name: 'Xbox' },
    { id: 'PC', name: 'PC' },
  ];

  const handleCategoryChange = (newCategory: string) => {
    setSearchParams({ category: newCategory, page: '1' });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ category: selectedCategory, page: String(newPage) });
  };

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
  }, [selectedCategory]);

  return (
    <>
      <SelectionBlock
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />

      <div className={styles.productList}>
        {isLoading
          ? items.map((item) => <ProductCard key={item.id} item={item} />)
          : [...Array(6)].map((_, index) => <Skeleton type="card" key={index} />)}
      </div>

      <Pagination elementsOnPage={elementsOnPage} page={page} setPage={handlePageChange} />
    </>
  );
};

export default ProductBlok;

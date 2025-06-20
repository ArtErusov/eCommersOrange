import { useSearchParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Skeleton from '@/components/ui/Skeleton/Skeleton';
import SelectionBlock from './SelectionBlock/SelectionBlock';
import Pagination from './Pagination/Pagination';

import styles from './styles.module.css';
import { Product } from '@/shared/types/product';
import { Category, SortBy } from './ProductBlok.types';
import axios from 'axios';

const ProductBlok: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Читаем параметры из URL
  const selectedCategory = searchParams.get('category') || 'all';
  const nPage = Number(searchParams.get('page') || 1);
  const sortingId = Number(searchParams.get('sort') || 1);

  // Состояния
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedSortBy, setSelectedSortBy] = useState<number>(1);

  // Категории
  const category: Category[] = [
    { id: 'all', name: 'Все' },
    { id: 'ps5', name: 'ps 5' },
    { id: 'Switch', name: 'Switch' },
    { id: 'Xbox', name: 'Xbox' },
    { id: 'PC', name: 'PC' },
  ];

  // Варианты сортировки
  const sortBy: SortBy[] = [
    { id: 1, name: 'Сначала дешевле', sortByURL: 'price', order: 'asc' },
    { id: 2, name: 'Сначала дороже', sortByURL: 'price', order: 'desc' },
    { id: 3, name: 'Высокий рейтинг', sortByURL: 'rating', order: 'desc' },
    { id: 4, name: 'Низкий рейтинг', sortByURL: 'rating', order: 'asc' },
    { id: 5, name: 'Количеству отзывов', sortByURL: 'review', order: 'desc' },
  ];

  // Синхронизация selectedSortBy с URL параметром сортировки
  useEffect(() => {
    const foundSort = sortBy.find((s) => s.id === sortingId);
    setSelectedSortBy(foundSort ? foundSort.id : 1);
  }, [sortingId]);

  // Обработка смены категории
  const handleCategoryChange = (newCategory: string) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      params.set('category', newCategory);
      params.set('page', '1');
      params.set('sort', String(selectedSortBy));
      return params;
    });
  };

  // Обработка смены страницы
  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      params.set('page', String(newPage));
      params.set('category', selectedCategory);
      params.set('sort', String(selectedSortBy));
      return params;
    });
  };

  // Обработка смены сортировки
  const handleSorting = (newSortId: number) => {
    setSelectedSortBy(newSortId);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      params.set('sort', String(newSortId));
      params.set('page', '1');
      params.set('category', selectedCategory);
      return params;
    });
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const sortOption = sortBy.find((s) => s.id === sortingId) || sortBy[0];
        const response = await axios.get<Product[]>(
          `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange`,
          {
            params: {
              ...(selectedCategory !== 'all' && { platforms: selectedCategory }),
              page: nPage,
              limit: 6,
              sortBy: sortOption.sortByURL,
              order: sortOption.order,
            },
          },
        );
        setItems(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, nPage, sortingId]);

  // Загрузка общего количества страниц для пагинации
  useEffect(() => {
    const fetchTotalItems = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Product[]>(
          'https://65523e2c5c69a7790329c0eb.mockapi.io/Orange',
          {
            params: selectedCategory !== 'all' ? { platforms: selectedCategory } : {},
          },
        );
        const totalPagesCalc = Math.ceil(response.data.length / 6);
        setTotalPages(totalPagesCalc);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotalItems();
  }, [selectedCategory]);

  return (
    <>
      <SelectionBlock
        setSelectedSortBy={handleSorting}
        sortBy={sortBy}
        selectedSortBy={selectedSortBy}
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />

      <div className={styles.productList}>
        {isLoading
          ? [...Array(6)].map((_, index) => <Skeleton type="card" key={index} />)
          : items.map((item) => <ProductCard key={item.id} item={item} />)}
      </div>

      <Pagination elementsOnPage={totalPages} page={nPage} setPage={handlePageChange} />
    </>
  );
};

export default ProductBlok;

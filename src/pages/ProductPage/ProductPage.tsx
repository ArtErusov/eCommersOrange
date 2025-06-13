import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import styles from './Product.module.css';
import { Product } from '@/shared/types/product';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';

const ProductPage: FC = () => {
  const data = useLoaderData() as Product[];
  return (
    <>
      <div className={styles.test}>
        <div className={styles.breadcrumbs}>
          <Link to={'/'}>Главная </Link> <p>--</p> <Link to={'/catalog'}>Каталог</Link> <p>--</p>{' '}
          <p>{data[0].text}</p>
        </div>
        <h2>Продукт {data[0].text}</h2>
        <div className={styles.testBlock}>тут будет карточка товара</div>
        <h2>Советуем посмотреть</h2>
        <div className={styles.testBlock}>Рекомендации</div>
      </div>
      <ReviewsBlock />
    </>
  );
};

export default ProductPage;

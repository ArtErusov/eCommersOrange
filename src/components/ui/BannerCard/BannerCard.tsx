import { Product } from '../../../types/product.ts';
// import Button from '../Button/Button.tsx';
// import styles from './styles.module.css';

import { FC } from 'react';

interface ProductCardProps {
  item: Product;
}

const BannerCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <>
      <p>{item.text}</p>
    </>
  );
};
export default BannerCard;

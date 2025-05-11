import { Product } from '../../../shared/types/product.ts';
import styles from './styles.module.css';

import { FC } from 'react';

interface ProductCardProps {
  item: Product;
}

const SearchCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <li className={styles.card}>
      <div className={styles.card_container}>
        <img className={styles.img} src={item.src[0]} alt="" />
        <div>
          <p className={styles.text}>{item.manufacturer}</p>
          <p className={styles.text}>{item.text}</p>
        </div>
      </div>
      <p className={styles.price}>{`${item.price} P`}</p>
    </li>
  );
};
export default SearchCard;

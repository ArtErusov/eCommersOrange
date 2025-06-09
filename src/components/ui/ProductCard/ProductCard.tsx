import Button from '../Button/Button.tsx';
import styles from './ProductCard.module.css';

import { FC, useState } from 'react';
import { ProductCardProps } from './ProductCard.types.ts';

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const [itemInCart, setItemInCart] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (itemInCart) {
      console.log(`Удален из корзины: ${item.text}, ID: ${item.id}`);
    } else {
      console.log(`Добавлен в корзину: ${item.text}, ID: ${item.id}`);
    }
    setItemInCart(!itemInCart);
  };

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__container']}>
        <div className={styles['product-card__content']}>
          <img className={styles['product-card__image']} src={item.src[0]} alt={item.text} />
          <p className={styles['product-card__price']}>{item.price} ₽</p>
          <h3 className={styles['product-card__text']}>
            {item.manufacturer ? (
              <>
                <span>{item.manufacturer}</span>
                <span>{item.text}</span>
              </>
            ) : (
              item.text
            )}
          </h3>
        </div>
        <div className={styles['product-card__footer']}>
          <Button onClick={handleAddToCart}>{itemInCart ? 'в корзине' : 'в корзину'}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

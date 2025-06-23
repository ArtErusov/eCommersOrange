import styles from './ProductCounter.module.css';
import { FC } from 'react';
import { ProductCounterProps } from './ProductCounter.types';

const ProductCounter: FC<ProductCounterProps> = ({ count, onClickAdd, onClickRemove }) => {
  return (
    <div className={styles['product-counter']}>
      <button className={styles['product-counter__button-minus']} onClick={onClickRemove}>
        -
      </button>
      <p className={styles['product-counter__count']} onClick={(e) => e.preventDefault()}>
        {count}
      </p>
      <button className={styles['product-counter__button-plus']} onClick={onClickAdd}>
        +
      </button>
    </div>
  );
};

export default ProductCounter;

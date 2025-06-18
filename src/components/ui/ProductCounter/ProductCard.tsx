import styles from './ProductCounter.module.css';
import { FC, useEffect, useState } from 'react';
import { ProductCounterProps } from './ProductCounter.types';

const ProductCounter: FC<ProductCounterProps> = ({ count, onClickAdd, onClickRemove }) => {
  const [showLimitWarning, setShowLimitWarning] = useState(false);

  useEffect(() => {
    if (showLimitWarning) {
      const timer = setTimeout(() => setShowLimitWarning(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showLimitWarning]);

  return (
    <div className={styles['product-counter']}>
      <button className={styles['product-counter__button']} onClick={onClickAdd}>
        +
      </button>
      <p className={styles['product-counter__count']}>{count}</p>
      <button className={styles['product-counter__button']} onClick={onClickRemove}>
        -
      </button>
      {showLimitWarning && <p className={styles['product-counter__warning']}>Ограничение</p>}
    </div>
  );
};

export default ProductCounter;

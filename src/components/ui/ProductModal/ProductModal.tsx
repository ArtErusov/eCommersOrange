import Button from '../Button/Button.tsx';
import styles from './ProductModal.module.css';
import { FC } from 'react';

import { Product } from '@/shared/types/product';

export interface ProductModalProps {
  item: Product;
  onClose: () => void;
}

const ProductModal: FC<ProductModalProps> = ({ item, onClose }) => {
  return (
    <div className={styles['modal-content']}>
      <h2 className={styles['modal-title']}>
        {item.manufacturer ? `${item.manufacturer} ${item.text}` : item.text}
      </h2>

      <div className={styles['modal-body']}>
        <div className={styles['modal-image-container']}>
          <img className={styles['modal-image']} src={item.src[0]} alt={item.text} />
        </div>

        <div className={styles['modal-info']}>
          <p className={styles['modal-price']}>{item.price} ₽</p>

          {item.manufacturer && (
            <div className={styles['modal-field']}>
              <span className={styles['modal-label']}>Производитель:</span>
              <span className={styles['modal-value']}>{item.manufacturer}</span>
            </div>
          )}

          <div className={styles['modal-field']}>
            <span className={styles['modal-label']}>Описание:</span>
            <span className={styles['modal-value']}>{item.text}</span>
          </div>
        </div>
      </div>

      <div className={styles['modal-footer']}>
        <Button className={styles['modal-close-btn']} onClick={onClose}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default ProductModal;

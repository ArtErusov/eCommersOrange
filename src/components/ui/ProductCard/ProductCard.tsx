import Button from '../Button/Button.tsx';
import Modal from '../Modal/Modal.tsx';
import styles from './ProductCard.module.css';
import { FC, MouseEvent, useEffect, useState } from 'react';
import { ProductCardProps } from './ProductCard.types.ts';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/shared/store/cart.slice.ts';

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Проверяем URL параметры при монтировании и изменении searchParams
  useEffect(() => {
    const modalParam = searchParams.get('modal');
    const productId = searchParams.get('productId');

    if (modalParam === 'product-details' && productId === item.id.toString()) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams, item.id]);

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(item.id));
  };

  const handleDetailsClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Добавляем параметры в URL
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('modal', 'product-details');
    newSearchParams.set('productId', item.id.toString());
    setSearchParams(newSearchParams);
  };

  const handleModalClose = () => {
    // Удаляем параметры из URL
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('modal');
    newSearchParams.delete('productId');
    setSearchParams(newSearchParams);
  };

  return (
    <>
      <Link to={`/catalog/product/${item.id}`} className={styles['product-card']}>
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

          {/* Полупрозрачная кнопка "подробнее" */}
          <div className={styles['product-card__overlay']}>
            <div className={styles['product-card__details-button']} onClick={handleDetailsClick}>
              подробнее
            </div>
          </div>

          <div className={styles['product-card__footer']}>
            <Button onClick={add}>в корзину</Button>
          </div>
        </div>
      </Link>

      {/* Модальное окно с деталями товара */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
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
            <Button onClick={add}>Добавить в корзину</Button>
            <button className={styles['modal-close-btn']} onClick={handleModalClose}>
              Закрыть
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;

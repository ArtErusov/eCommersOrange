import Button from '../Button/Button.tsx';
import Modal from '../Modal/Modal.tsx';
import styles from './ProductCard.module.css';
import { FC, MouseEvent } from 'react';
import { ProductCardProps } from './ProductCard.types.ts';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/shared/store/cart.slice.ts';
import ProductModal from '../ProductModal/ProductModal.tsx';
import { useProductModalParams } from '@/shared/helpers/hooks/useProductModalParams.ts'; // путь зависит от структуры проекта

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useProductModalParams(item.id);

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(item.id));
  };

  const handleDetailsClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openModal();
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProductModal onClose={closeModal} item={item} />
      </Modal>
    </>
  );
};

export default ProductCard;

import Button from '../Button/Button.tsx';
import Modal from '../Modal/Modal.tsx';
import styles from './ProductCard.module.css';
import { FC, MouseEvent } from 'react';
import { ProductCardProps } from './ProductCard.types.ts';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/shared/store/cart.slice.ts';
import ProductModal from '../ProductModal/ProductModal.tsx';
import { useProductModalParams } from '@/shared/helpers/hooks/useProductModalParams.ts';
import { RootState } from '@/shared/store/store.ts';
import ProductCounter from '../ProductCounter/ProductCounter.tsx';
import { CalculationOfDiscounts } from '@/shared/helpers/CalculationOfDiscounts.ts';

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useProductModalParams(item.id);

  const add = (e: MouseEvent) => {
    e.preventDefault();
    if (cartItem && cartItem.count >= 50) {
      return;
    }
    dispatch(cartActions.add(item.id));
  };

  const remove = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.remove(item.id));
  };

  const handleDetailsClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openModal();
  };

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((i) => i.id === item.id),
  );

  return (
    <>
      <Link to={`/catalog/product/${item.id}`} className={styles['product-card']}>
        <div className={styles['product-card__container']}>
          <div className={styles['product-card__content']}>
            <img className={styles['product-card__image']} src={item.src[0]} alt={item.text} />

            <div className={styles['product-card__price']}>
              {item.label ? (
                <>
                  <p>{CalculationOfDiscounts(item.price, item.label)} ₽</p>
                  <div>{item.price} ₽</div>
                </>
              ) : (
                <p>{item.price} ₽</p>
              )}
            </div>
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
          {item.label && (
            <div className={styles['product-card__discounts']}>{`${item.label} %`}</div>
          )}

          <div className={styles['product-card__details-button']} onClick={handleDetailsClick}>
            быстрый просмотр
          </div>

          <div className={styles['product-card__footer']}>
            {cartItem ? (
              <ProductCounter
                count={cartItem.count}
                onClickAdd={add as unknown as () => void}
                onClickRemove={remove as unknown as () => void}
              />
            ) : (
              <Button width={120} onClick={add}>
                в корзину
              </Button>
            )}
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

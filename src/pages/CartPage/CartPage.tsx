import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { RootState } from '@/shared/store/store';
import { Product } from '@/shared/types/product';
import { cartActions } from '@/shared/store/cart.slice';

const CartPage: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Product[]>(
          'https://65523e2c5c69a7790329c0eb.mockapi.io/Orange',
        );
        setProducts(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  const cartWithDetails = cartItems.map((cartItem) => {
    const product = products.find((p) => p.id === Number(cartItem.id));
    return {
      ...cartItem,
      title: product?.text || 'Неизвестный товар',
      price: product?.price || 0,
      image: product?.src,
    };
  });

  const totalPrice = cartWithDetails.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1>Корзина</h1>

      {cartItems.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <>
          <ul>
            {cartWithDetails.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                {item.image && (
                  <img
                    src={item.image[0]}
                    alt={item.title}
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <strong>{item.title}</strong>
                  <p>Цена: {item.price} ₽</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button onClick={() => dispatch(cartActions.remove(item.id))}>-</button>
                    <span>{item.count}</span>
                    <button onClick={() => dispatch(cartActions.add(item.id))}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <hr style={{ margin: '1rem 0' }} />
          <h2>Итого: {totalPrice} ₽</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;

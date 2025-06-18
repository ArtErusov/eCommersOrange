import { RootState } from '@/shared/store/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const CartPage: FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1>Корзина</h1>

      {items.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              Товар ID: {item.id}, количество: {item.count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

import { getRandomNumber } from '../../../helpers/getRandomNumber.ts';
import { Product } from '../../../types/product.ts';
import Button from '../Button/Button.tsx';
import styles from './styles.module.css';

import { FC } from 'react';

interface ProductCardProps {
  item: Product;
}

const BannerCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_left}>
        <h2 className={styles.card_title}>Товар дня</h2>
        <img className={styles.card_img} src={item.src[0]} alt="" />
      </div>
      <div className={styles.card_right}>
        <div className={styles.card_time}>
          <div className={styles.card_time_counter}>11</div>
          <div className={styles.card_time_separator}>:</div>
          <div className={styles.card_time_counter}>54</div>
          <div className={styles.card_time_separator}>:</div>
          <div className={styles.card_time_counter}>32</div>
        </div>

        <div className={styles.card_label}>
          <div className={styles.card_label_gray}>
            <p>Скидка:</p>
          </div>
          <div className={styles.card_label_red}>
            <p>{item.label ? item.label : getRandomNumber(50)} %</p>
          </div>
        </div>

        <p className={styles.card_price}>{item.price} p</p>

        <p>{item.text}</p>
        <Button>Купить</Button>
      </div>
    </div>
  );
};
export default BannerCard;

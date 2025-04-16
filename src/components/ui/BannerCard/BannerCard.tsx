import { CalculationOfDiscounts } from '../../../helpers/CalculationOfDiscounts.ts';
import { getRandomNumber } from '../../../helpers/getRandomNumber.ts';
import { getTimeLeft } from '../../../helpers/getTimeLeft.ts';
import { Product } from '../../../types/product.ts';
import Button from '../Button/Button.tsx';
import styles from './styles.module.css';

import { FC, useState, useEffect } from 'react';

interface ProductCardProps {
  item: Product;
}

const BannerCard: FC<ProductCardProps> = ({ item }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  const temporaryDiscount: number = item.label ? item.label : getRandomNumber(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.card_container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Товар дня :</h2>
        <img className={styles.img} src={item.src[0]} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.time}>
          <div className={styles.time_counter}>{timeLeft.hours}</div>
          <div className={styles.time_separator}>:</div>
          <div className={styles.time_counter}>{timeLeft.minutes}</div>
          <div className={styles.time_separator}>:</div>
          <div className={styles.time_counter}>{timeLeft.seconds}</div>
        </div>

        <div className={styles.card_label}>
          <div className={styles.card_label_gray}>
            <p>Скидка:</p>
          </div>
          <div className={styles.card_label_red}>
            <p>{temporaryDiscount} %</p>
          </div>
        </div>

        {item.label === undefined ? (
          <p className={styles.price}>{item.price} p</p>
        ) : (
          <div className={styles.price_block}>
            <p className={styles.price}>
              {CalculationOfDiscounts(item.price, temporaryDiscount)} ₽
            </p>
            <p className={styles.discount}>{item.price} ₽</p>
          </div>
        )}
        {item.manufacturer === undefined ? (
          <p className={styles.text}>{item.text}</p>
        ) : (
          <>
            <p className={styles.text_manufacturer}>{item.manufacturer}</p>
            <p className={styles.text_description}>{item.text}</p>
          </>
        )}

        <div className={styles.btn_pos}>
          <Button>Купить</Button>
        </div>
      </div>
    </div>
  );
};
export default BannerCard;

import { CalculationOfDiscounts } from '@/shared/helpers/CalculationOfDiscounts';
import { getRandomNumber } from '@/shared/helpers/getRandomNumber';
import { getTimeLeft } from '@/shared/helpers/getTimeLeft';
import { BannerCardProps, TimeLeft } from './BannerCard.types';
import Button from '@/components/ui/Button/Button';

import { FC, useState, useEffect, useMemo } from 'react';
import styles from './BannerCard.module.css';

const BannerCard: FC<BannerCardProps> = ({ item }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  const temporaryDiscount: number = useMemo(
    () => (item.label ? item.label : getRandomNumber(50)),
    [item.label],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles['banner-card']}>
      <div className={styles['banner-card__content']}>
        <h2 className={styles['banner-card__title']}>Товар дня :</h2>
        <img className={styles['banner-card__image']} src={item.src[0]} alt={item.text} />
      </div>

      <div className={styles['banner-card__info']}>
        <div className={styles['banner-card__timer']}>
          <div className={styles['banner-card__time-block']}>{timeLeft.hours}</div>
          <div className={styles['banner-card__time-separator']}>:</div>
          <div className={styles['banner-card__time-block']}>{timeLeft.minutes}</div>
          <div className={styles['banner-card__time-separator']}>:</div>
          <div className={styles['banner-card__time-block']}>{timeLeft.seconds}</div>
        </div>

        <div className={styles['banner-card__discount']}>
          <div className={styles['banner-card__discount-label']}>
            <p className={styles['banner-card__discount-text']}>Скидка:</p>
          </div>
          <div className={styles['banner-card__discount-value']}>
            <p className={styles['banner-card__discount-percent']}>{temporaryDiscount} %</p>
          </div>
        </div>

        {item.label === undefined ? (
          <p className={styles['banner-card__price']}>{item.price} p</p>
        ) : (
          <div className={styles['banner-card__price-container']}>
            <p className={styles['banner-card__price']}>
              {CalculationOfDiscounts(item.price, temporaryDiscount)} ₽
            </p>
            <p className={styles['banner-card__old-price']}>{item.price} ₽</p>
          </div>
        )}

        {item.manufacturer === undefined ? (
          <p className={styles['banner-card__description']}>{item.text}</p>
        ) : (
          <>
            <p className={styles['banner-card__manufacturer']}>{item.manufacturer}</p>
            <p className={styles['banner-card__text']}>{item.text}</p>
          </>
        )}

        <div className={styles['banner-card__button']}>
          <Button>Купить</Button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

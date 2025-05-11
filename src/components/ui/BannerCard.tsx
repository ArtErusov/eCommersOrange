import { CalculationOfDiscounts } from '@/shared/helpers/CalculationOfDiscounts';
import { getRandomNumber } from '@/shared/helpers/getRandomNumber';
import { getTimeLeft } from '@/shared/helpers/getTimeLeft';
import { Product } from '@/shared/types/product';
import Button from '@/components/ui/Button/Button';

import { FC, useState, useEffect, useMemo } from 'react';

interface ProductCardProps {
  item: Product;
}

const BannerCard: FC<ProductCardProps> = ({ item }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

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
    <div className="w-[446px] h-[289px] rounded-[14px] gap-[28px] flex border border-[var(--gray)]">
      <div>
        <h2 className="mt-[24px] ml-[15px] text-[24px] font-semibold">Товар дня :</h2>
        <img
          className="mt-[10px] ml-[15px] w-[200px] h-[200px]"
          src={item.src[0]}
          alt={item.text}
        />
      </div>

      <div>
        <div className="flex mt-[15px] gap-[10px]">
          <div className="text-[24px] font-semibold w-[46px] h-[46px] bg-[var(--gray)] rounded-[6px] text-center pt-[8px]">
            {timeLeft.hours}
          </div>
          <div className="text-[24px] font-semibold mt-[6px]">:</div>
          <div className="text-[24px] font-semibold w-[46px] h-[46px] bg-[var(--gray)] rounded-[6px] text-center pt-[8px]">
            {timeLeft.minutes}
          </div>
          <div className="text-[24px] font-semibold mt-[6px]">:</div>
          <div className="text-[24px] font-semibold w-[46px] h-[46px] bg-[var(--gray)] rounded-[6px] text-center pt-[8px]">
            {timeLeft.seconds}
          </div>
        </div>

        <div className="mt-[20px] flex relative">
          <div className="w-[134px] h-[20px] bg-[var(--dark-gray)] rounded-[15px_3px_15px_3px]">
            <p className="text-[14px] font-bold text-[var(--white)] ml-[10px]">Скидка:</p>
          </div>
          <div className="rounded-[15px_3px_15px_3px] h-[20px] w-[52px] bg-[var(--red)] absolute z-[1] right-[52px]">
            <p className="text-[14px] font-bold text-[var(--white)] text-center mt-px">
              {temporaryDiscount} %
            </p>
          </div>
        </div>

        {item.label === undefined ? (
          <p className="text-[24px] font-semibold">{item.price} p</p>
        ) : (
          <div className="mt-[24px] flex">
            <p className="text-[24px] font-semibold">
              {CalculationOfDiscounts(item.price, temporaryDiscount)} ₽
            </p>
            <p className="discount ml-[10px] mt-[5px]">{item.price} ₽</p>
          </div>
        )}
        {item.manufacturer === undefined ? (
          <p className="h-[70px] w-[177px] mt-[12px]">{item.text}</p>
        ) : (
          <>
            <p className="h-[22px] w-[177px]">{item.manufacturer}</p>
            <p className="h-[44px] w-[177px]">{item.text}</p>
          </>
        )}

        <div className="ml-[20px]">
          <Button>Купить</Button>
        </div>
      </div>
    </div>
  );
};
export default BannerCard;

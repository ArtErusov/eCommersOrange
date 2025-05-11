import AdvertisingBanner from './AdvertisingBanner.tsx';
import BannerCard from '@/components/ui/BannerCard.tsx';
import { FC } from 'react';
import { Product } from '@/types/product.ts';

interface ProductCardProps {
  item: Product;
}

const BannersBlock: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="flex justify-between mt-[30px]">
      <AdvertisingBanner />
      <BannerCard item={item} />
    </div>
  );
};
export default BannersBlock;

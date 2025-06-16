import Banner from './Banner/Banner.tsx';
import BannerCard from '@/components/ui/BannerCard/BannerCard.tsx';
import { FC } from 'react';
import { Product } from '@/shared/types/product.ts';

interface ProductCardProps {
  item: Product;
}

const BannersBlock: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="flex justify-between mt-[30px]">
      <Banner />
      <BannerCard item={item} />
    </div>
  );
};
export default BannersBlock;

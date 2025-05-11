import styles from './styles.module.css';

import AdvertisingBanner from './AdvertisingBanner.tsx';
import BannerCard from '../../../../components/ui/BannerCard/BannerCard.tsx';
import { FC } from 'react';
import { Product } from '../../../../types/product.ts';
import SliderBanner from './SliderBanner.tsx';

interface ProductCardProps {
  item: Product;
}

const BannersBlock: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className={styles.banner_block}>
      {/* <AdvertisingBanner /> */}
      <SliderBanner />
      <BannerCard item={item} />
    </div>
  );
};
export default BannersBlock;

import Banner from './Banner/Banner.tsx';
import BannerCard from '@/components/ui/BannerCard/BannerCard.tsx';
import Skeleton from '@/components/ui/Skeleton/Skeleton.tsx';

import { FC } from 'react';
import { ProductCardProps } from './BannersBlock.types.ts';
import styles from './BannersBlock.module.css';

const BannersBlock: FC<ProductCardProps> = ({ item, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className={styles['banner-block__skeleton']}>
          <div className={styles['banner-block__skeleton-banner']} />
          <Skeleton type="banner-card" />
        </div>
      ) : (
        <div className={styles['banners-block']}>
          <Banner />
          <BannerCard item={item} />
        </div>
      )}
    </>
  );
};

export default BannersBlock;

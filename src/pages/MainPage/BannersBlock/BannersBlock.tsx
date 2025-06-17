import Banner from './Banner/Banner.tsx';
import BannerCard from '@/components/ui/BannerCard/BannerCard.tsx';
import { FC } from 'react';
import styles from './BannersBlock.module.css';
import BannerSkeleton from '@/components/ui/BannerSkeleton/BannerSkeleton.tsx';
import { ProductCardProps } from './BannersBlock.types.ts';

const BannersBlock: FC<ProductCardProps> = ({ item, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className={styles['banner-block__skeleton']}>
          <div className={styles['banner-block__skeleton-banner']} />
          <BannerSkeleton />
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
``;

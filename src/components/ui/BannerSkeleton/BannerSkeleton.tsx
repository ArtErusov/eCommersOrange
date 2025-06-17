import { FC } from 'react';
import styles from './BannerSkeleton.module.css';

const BannerSkeleton: FC = () => {
  return (
    <div className={styles['banner-skeleton__side']}>
      <div className={styles['banner-skeleton__side-left']}>
        <div className={styles['banner-skeleton__title']} />
        <div className={styles['banner-skeleton__image']} />
      </div>

      <div className={styles['banner-skeleton__side-right']}>
        <div className={styles['banner-skeleton__thumbnails']}>
          <div className={styles['banner-skeleton__thumb']} />
          <div className={styles['banner-skeleton__thumb']} />
          <div className={styles['banner-skeleton__thumb']} />
        </div>

        <div className={styles['banner-skeleton__label']} />
        <div className={styles['banner-skeleton__subline']} />
        <div className={styles['banner-skeleton__subline-short']} />

        <div className={styles['banner-skeleton__button']} />
      </div>
    </div>
  );
};

export default BannerSkeleton;

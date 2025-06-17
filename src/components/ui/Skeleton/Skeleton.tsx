import { FC } from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  type: 'card' | 'banner-card';
}

const Skeleton: FC<SkeletonProps> = ({ type }) => {
  if (type === 'banner-card') {
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
  }

  return (
    <div className={styles['skeleton']}>
      <div className={styles['skeleton__image']} />
      <div className={styles['skeleton__line-small']} />
      <div className={styles['skeleton__line-medium']} />
      <div className={styles['skeleton__line-large']} />
      <div className={styles['skeleton__line-between']} />
    </div>
  );
};

export default Skeleton;

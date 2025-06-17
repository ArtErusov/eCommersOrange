import banner1 from '@/assets/images/BannerImgOne.png';
import banner2 from '@/assets/images/BannerImgTwo.png';
import banner3 from '@/assets/images/BannerImgThree.png';
import banner4 from '@/assets/images/BannerImgFour.png';
import banner5 from '@/assets/images/BannerImgFive.png';

import { useState, useEffect, FC } from 'react';
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';
import styles from './Banner.module.css';

const Banner: FC = () => {
  const banners: string[] = [banner1, banner2, banner3, banner4, banner5];
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, banners.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  return (
    <div
      className={styles['banner']}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <ArrowButton onClick={prevSlide} direction="left" />
      <img
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className={styles['banner__image']}
      />
      <ArrowButton onClick={nextSlide} direction="right" />

      <div className={styles['banner__indicators']}>
        {banners.map((_, index) => (
          <div
            key={index}
            className={
              currentIndex === index
                ? styles['banner__indicator--active']
                : styles['banner__indicator']
            }
            aria-label={`Go to banner ${index + 1}`}
            aria-current={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

import styles from './styles.module.css';
import banner1 from '../../../../assets/images/BannerImgOne.png';
import banner2 from '../../../../assets/images/BannerImgTwo.png';
import banner3 from '../../../../assets/images/BannerImgThree.png';
import banner4 from '../../../../assets/images/BannerImgFour.png';
import banner5 from '../../../../assets/images/BannerImgFive.png';
import arrow from '../../../../assets/images/svg/arrowBannerIcon.svg';

import { useState, useEffect, FC } from 'react';

const AdvertisingBanner: FC = () => {
  const banners: string[] = [banner1, banner2, banner3, banner4, banner5];
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  return (
    <div
      className={styles['slider']}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        className={styles['slider__arrow-prev']}
        onClick={prevSlide}
        aria-label="Previous banner"
      >
        <img src={arrow} alt="Previous" />
      </button>
      <img src={banners[currentIndex]} alt="Banner" />
      <button className={styles['slider__arrow-next']} onClick={nextSlide} aria-label="Next banner">
        <img className={styles['slider__arrow-icon']} src={arrow} alt="Next" />
      </button>
      <div className={styles['slider__dots']}>
        {banners.map((_, index) => (
          <div
            key={index}
            className={
              currentIndex === index ? styles['slider__dot-active'] : styles['slider__dot']
            }
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default AdvertisingBanner;

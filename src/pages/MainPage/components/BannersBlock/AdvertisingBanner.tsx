import styles from './styles.module.css';
import banner1 from '../../../../assets/images/BannerImgOne.png';
import banner2 from '../../../../assets/images/BannerImgTwo.png';
import banner3 from '../../../../assets/images/BannerImgThree.png';
import banner4 from '../../../../assets/images/BannerImgFour.png';
import banner5 from '../../../../assets/images/BannerImgFive.png';

import { useState, useEffect, FC } from 'react';

const AdvertisingBanner: FC = () => {
  const banners = [banner1, banner2, banner3, banner4, banner5];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.banner}>
      <button className={styles.banner_prev} onClick={prevSlide}></button>
      <img src={banners[currentIndex]} alt="Banner" />
      <button className={styles.banner_next} onClick={nextSlide}></button>
      <div className={styles.banner_dots}>
        {banners.map((_, index) => (
          <div
            key={index}
            className={currentIndex === index ? styles.banner_dot_active : styles.banner_dot}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default AdvertisingBanner;

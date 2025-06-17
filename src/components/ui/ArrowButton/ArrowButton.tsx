import { FC } from 'react';
import arrow from '@/assets/images/svg/arrowBannerIcon.svg';
import styles from './ArrowButton.module.css';
import { ArrowButtonProps } from './ArrowButton.types';

const ArrowButton: FC<ArrowButtonProps> = ({ onClick, direction }) => {
  const isRight = direction === 'right';

  const iconClassName = `${styles['arrow-button__icon']} ${
    isRight ? styles['arrow-button__icon--rotated'] : ''
  }`;

  return (
    <button
      className={styles[`arrow-button--${isRight ? 'right' : 'left'}`]}
      onClick={onClick}
      aria-label={isRight ? 'Next banner' : 'Previous banner'}
    >
      <img className={iconClassName} src={arrow} alt={isRight ? 'Next' : 'Previous'} />
    </button>
  );
};

export default ArrowButton;

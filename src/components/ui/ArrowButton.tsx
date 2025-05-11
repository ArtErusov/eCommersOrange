import clsx from 'clsx';
import arrow from '@/assets/images/svg/arrowBannerIcon.svg';
import { FC } from 'react';

interface ArrowButtonProps {
  onClick: () => void;
  direction: 'left' | 'right';
}
const ArrowButton: FC<ArrowButtonProps> = ({ onClick, direction }) => {
  const isRight = direction === 'right';

  return (
    <button
      className={clsx(
        'h-[36px] w-[36px] bg-[var(--white)] absolute top-[132px] rounded-[55px] cursor-pointer hover:shadow-[0_0_11px_rgba(34,60,80,0.158)]',
        isRight ? '-right-[18px]' : '-left-[18px]',
      )}
      onClick={onClick}
      aria-label={isRight ? 'Next banner' : 'Previous banner'}
    >
      <img
        className={clsx('ml-[12px]', isRight && 'rotate-180')}
        src={arrow}
        alt={isRight ? 'Next' : 'Previous'}
      />
    </button>
  );
};

export default ArrowButton;

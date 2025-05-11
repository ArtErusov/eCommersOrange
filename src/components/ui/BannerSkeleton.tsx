import { FC } from 'react';

const BannerSkeleton: FC = () => {
  return (
    <div className="flex justify-between mt-[30px]">
      <div className="bg-[var(--gray)] relative w-[914px] h-[289px] rounded-[14px]"></div>
      <div className="w-[446px] h-[289px] rounded-[14px] gap-[28px] flex border border-[var(--gray)]">
        <div>
          <div className="mt-[24px] ml-[15px] h-[30px] w-[150px] bg-[var(--gray)] rounded" />
          <div className="mt-[10px] ml-[15px] w-[200px] h-[200px] bg-[var(--gray)] rounded" />
        </div>

        <div>
          <div className="flex mt-[15px] gap-[16px]">
            <div className="w-[46px] h-[46px] bg-[var(--gray)] rounded-[6px]" />
            <div className="w-[46px] h-[46px] bg-[var(--gray)] rounded-[6px]" />
            <div className="w-[46px] h-[46px] bg-[var(--gray)] rounded-[6px]" />
          </div>

          <div className="mt-[24px] h-[28px] w-[90px] bg-[var(--gray)] rounded" />
          <div className="mt-[24px] h-[22px] w-[160px] bg-[var(--gray)] rounded" />
          <div className="mt-[6px] h-[22px] w-[177px] bg-[var(--gray)] rounded" />

          <div className="ml-[20px] mt-[24px] h-[40px] w-[130px] bg-[var(--gray)] rounded-[8px]" />
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;

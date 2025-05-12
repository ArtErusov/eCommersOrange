import { FC } from 'react';

import Header from '@/components/layout/Header/Header.tsx';

const PromoPage: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p>Промо страница</p>
        <div className="mt-[400px] w-[full] h-[120px] bg-[var(--gray)]"></div>
      </div>
    </>
  );
};
export default PromoPage;

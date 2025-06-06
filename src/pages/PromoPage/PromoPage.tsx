import { FC } from 'react';

import Header from '@/components/Header/Header.tsx';
import Footer from '@/components/Footer/Footer';

const PromoPage: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p>Промо страница</p>
        <Footer />
      </div>
    </>
  );
};
export default PromoPage;

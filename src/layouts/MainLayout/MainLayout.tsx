import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header.tsx';
import Footer from '@/components/Footer/Footer.tsx';

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;

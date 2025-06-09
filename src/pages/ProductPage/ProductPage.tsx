import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage: FC = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      Продукт {id}
      <Footer />
    </>
  );
};
export default ProductPage;

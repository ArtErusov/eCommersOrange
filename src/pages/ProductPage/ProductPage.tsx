import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Product } from '@/shared/types/product';
import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductPage: FC = () => {
  const data = useLoaderData() as Product[];
  console.log(data);

  return (
    <>
      <Header />
      Продукт {data[0].text}
      <Footer />
    </>
  );
};
export default ProductPage;

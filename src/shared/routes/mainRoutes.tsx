import { createBrowserRouter, LoaderFunctionArgs } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import Registration from '@/pages/Registration/Registration';
import PromoPage from '@/pages/PromoPage/PromoPage';
import ProductPage from '@/pages/ProductPage/ProductPage';
import axios from 'axios';

const router = createBrowserRouter([
  { path: '/', element: <MainPage />, errorElement: <>Ошибка</> },
  { path: '/reg', element: <Registration />, errorElement: <>Ошибка</> },
  { path: '/promo', element: <PromoPage />, errorElement: <>Ошибка</> },
  {
    path: '/product/:id',
    element: <ProductPage />,
    loader: async ({ params }: LoaderFunctionArgs) => {
      try {
        const { data } = await axios.get(
          `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?customId=${params.id}`,
        );
        return data; // Возвращаем полученные данные (будут доступны через useLoaderData)
      } catch (err) {
        throw new Response('Product not found', { status: 404 }); // Ошибка - будет показан errorElement
      }
    },
  },
]);

export default router;

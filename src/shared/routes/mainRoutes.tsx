import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import Registration from '@/pages/Registration/Registration';
import PromoPage from '@/pages/PromoPage/PromoPage';
import ProductPage from '@/pages/ProductPage/ProductPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/reg', element: <Registration /> },
  { path: '/promo', element: <PromoPage /> },
  { path: '/product/:id', element: <ProductPage /> },
]);

export default router;

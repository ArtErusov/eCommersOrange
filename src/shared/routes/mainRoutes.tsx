import { createBrowserRouter, LoaderFunctionArgs, Navigate } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import Registration from '@/pages/Auth/Registration/Registration';
import PromoPage from '@/pages/PromoPage/PromoPage';
import ProductPage from '@/pages/ProductPage/ProductPage';
import axios from 'axios';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Auth from '@/pages/Auth/Auth';
import Login from '@/pages/Auth/Login/Login';
import CartPage from '@/pages/CartPage/CartPage';
import { RequireAuth } from '../helpers/RequireAuth';
import Profile from '@/pages/Profile/Profile';

const router = createBrowserRouter([
  { path: '/', element: <MainPage />, errorElement: <ErrorPage /> },
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      { path: 'login', element: <Login />, errorElement: <ErrorPage /> },
      { path: 'reg', element: <Registration />, errorElement: <ErrorPage /> },
    ],
  },
  { path: '/promo', element: <PromoPage />, errorElement: <ErrorPage /> },
  { path: '/profile', element: <Profile />, errorElement: <ErrorPage /> },
  {
    path: '/cart',
    element: (
      <RequireAuth>
        <CartPage />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
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

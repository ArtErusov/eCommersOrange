import { createBrowserRouter, LoaderFunctionArgs, Navigate } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import Registration from '@/pages/Auth/Registration/Registration';
import ProductPage from '@/pages/ProductPage/ProductPage';
import axios from 'axios';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Auth from '@/pages/Auth/Auth';
import Login from '@/pages/Auth/Login/Login';
import CartPage from '@/pages/CartPage/CartPage';
import { RequireAuth } from '../helpers/hoc/RequireAuth';
import Profile from '@/pages/Auth/Profile/Profile';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';
import OfferAgreementPage from '@/pages/OfferAgreementPage/OfferAgreementPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'catalog',
        children: [
          { index: true, element: <CatalogPage /> },
          {
            path: 'product/:id',
            element: <ProductPage />,
            loader: async ({ params }: LoaderFunctionArgs) => {
              try {
                const { data } = await axios.get(
                  `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?customId=${params.id}`,
                );
                return data;
              } catch (err) {
                throw new Response('Product not found', { status: 404 });
              }
            },
          },
        ],
      },

      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'cart',
        element: (
          <RequireAuth>
            <CartPage />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/offer',
    element: <OfferAgreementPage />,
    errorElement: <ErrorPage />,
  },
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
      { path: 'profile', element: <Profile />, errorElement: <ErrorPage /> },
    ],
  },
]);

export default router;

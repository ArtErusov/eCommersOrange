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
import MainLayout from '@/layouts/MainLayout/MainLayout';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'promo', element: <PromoPage /> },
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
    path: '/auth',
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      { path: 'login', element: <Login /> },
      { path: 'reg', element: <Registration /> },
    ],
  },
]);

export default router;

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <MainPage /> },
//       { path: 'promo', element: <PromoPage /> },
//       { path: 'catalog', element: <CatalogPage /> },
//       {
//         path: 'product/:id',
//         element: <ProductPage />,
//         loader: async ({ params }: LoaderFunctionArgs) => {
//           try {
//             const { data } = await axios.get(
//               `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?customId=${params.id}`,
//             );
//             return data;
//           } catch (err) {
//             throw new Response('Product not found', { status: 404 });
//           }
//         },
//       },
//       {
//         path: 'profile',
//         element: <Profile />,
//       },
//       {
//         path: 'cart',
//         element: (
//           <RequireAuth>
//             <CartPage />
//           </RequireAuth>
//         ),
//       },
//     ],
//   },
//   {
//     path: '/auth',
//     element: <Auth />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Navigate to="login" replace />,
//       },
//       { path: 'login', element: <Login /> },
//       { path: 'reg', element: <Registration /> },
//     ],
//   },
// ]);

// export default router;

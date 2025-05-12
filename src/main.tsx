import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
import './assets/css/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import Registration from './pages/Registration/Registration.tsx';
import PromoPage from './pages/PromoPage/PromoPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/reg',
    element: <Registration />,
  },
  {
    path: '/promo',
    element: <PromoPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
import './assets/css/main.css';
import '@/shared/styles/main.css';
import { RouterProvider } from 'react-router-dom';
import router from './shared/routes/mainRoutes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

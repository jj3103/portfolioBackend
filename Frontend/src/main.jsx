import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';



import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';
import Input from './pages/Input';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Portfolio />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/input',
        element: <Input />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

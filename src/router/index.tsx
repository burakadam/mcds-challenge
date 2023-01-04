import { Home } from '@/containers/Home';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '*', element: <Navigate to='/' replace /> },
]);

export default router;

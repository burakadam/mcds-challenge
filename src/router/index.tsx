import { ErrorElement } from '@/components/ErrorElement';
import { Detail } from '@/containers/Detail';
import { Home } from '@/containers/Home';

import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
    errorElement: <ErrorElement />,
  },
  { path: '*', element: <Navigate to='/' replace /> },
]);

export default router;

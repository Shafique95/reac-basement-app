import type { RouteObject } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from '../../layout/AuthLayout';


export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: '/register',
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    ),
  },
];

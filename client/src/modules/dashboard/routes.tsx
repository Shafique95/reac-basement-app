import { RouteObject } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainLayout from '../../layout/MainLayout';
import ProtectedRoute from '../../routes/ProtectedRoute';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '', element: <Dashboard /> },
    ],
  },
];

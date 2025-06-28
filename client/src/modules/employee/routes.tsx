import { RouteObject } from 'react-router-dom';
import EmployeeList from '../employee/pages/EmployeeList';
import EmployeeDetails from '../employee/pages/EmployeeDetails';
import MainLayout from '../../layout/MainLayout';
import ProtectedRoute from '../../routes/ProtectedRoute';

export const employeeRoutes: RouteObject[] = [
  {
    path: '/employees',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '', element: <EmployeeList /> },
      { path: ':id', element: <EmployeeDetails /> },
    ],
  },
];

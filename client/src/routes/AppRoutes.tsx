import { useRoutes } from 'react-router-dom';
import { dashboardRoutes } from '../modules/dashboard/routes';
import { employeeRoutes } from '../modules/employee/routes';
import NotFound from '../pages/NotFound';
import { Navigate} from 'react-router-dom'
import { authRoutes } from '../modules/auth/routes'; // <-- add this import


const AppRoutes = () => {
  const routes = [
  {path:"/",element:<Navigate to="/login" replace/>},
  ...authRoutes,
  ...dashboardRoutes,
  ...employeeRoutes,
  { path: '*', element: <NotFound /> },
  ];
  return useRoutes(routes);
};

export default AppRoutes;

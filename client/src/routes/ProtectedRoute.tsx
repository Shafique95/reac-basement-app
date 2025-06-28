import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  console.log('ProtectedRoute rendered');
  const token = localStorage.getItem('token'); // simulate auth
  console.log('token:',token);
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'demo-token');
    navigate('/dashboard', { replace: true });
  };
    const goToRegister = () => {
    navigate('/register', { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
    
      <button onClick={handleLogin}>Login</button>
      {/* <p>If you are not rigistered Kindl register Here <Link to="/register">Register!</Link></p> */}
        <p>
        Don't have an account?{' '}
        <button type="button" onClick={goToRegister} style={{ color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          Register!
        </button>
      </p>
    </div>
  );
};

export default Login;

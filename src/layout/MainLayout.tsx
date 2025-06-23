import { Outlet } from 'react-router-dom';
import Header from '../modules/dashboard/components/Header';
import Sidebar from '../modules/dashboard/components/Sidebar';
import Footer from '../modules/dashboard/components/Footer';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

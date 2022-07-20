import { Outlet } from 'react-router';
import Directory from '../../components/directory/directory.component.jsx'


const Home = () => {




  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
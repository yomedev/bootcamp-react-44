import { ToastContainer } from 'react-toastify';
import { Header, Layout } from './components/Layout';
import { Users } from './components/Users/Users';
// import { Timer } from './components/Timer';
// import { Rerender } from './components/Rerender';


export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Users />
      {/* <Timer /> */}
      {/* <Rerender /> */}
      <ToastContainer />
    </Layout>
  );
};

// new Users()
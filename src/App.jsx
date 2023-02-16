import { ToastContainer } from 'react-toastify';
import { Header, Layout } from './components/Layout';
import { Users } from './components/Users/Users';
// import { LoginForm } from './components/LoginForm';


export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      {/* <LoginForm /> */}
      <Users />
      <ToastContainer />
    </Layout>
  );
};
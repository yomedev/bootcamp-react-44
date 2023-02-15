// import { Banner } from './components/Banner';
// import { Counter } from './components/Counter';
import { Header, Layout } from './components/Layout';
import { UsersList } from './components/Users';
import usersJson from './data/users.json'

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      {/* <Counter  /> */}
      {/* <Banner /> */}
      <UsersList users={usersJson} />
    </Layout>
  );
};
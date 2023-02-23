import { ToastContainer } from "react-toastify";
// import { Counter } from "./components/Counter/Counter";
import { Header, Layout } from "./components/Layout";
// import { Memo } from "./components/Memo/Memo";
import { Posts } from "./components/Posts/Posts";
import { AuthProvider } from "./context/AuthContext";
// import { Users } from "./components/Users/Users";
import { Rerender } from "./components/Rerender/Rerender";
// import { LoginForm } from "./components/LoginForm/LoginForm";
// import { Timer } from "./components/Timer/Timer";

export const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Header title="Hello world!" />
        <Rerender />
        {/* <Users /> */}
        {/* <Memo /> */}
        <Posts />
        <ToastContainer />
      </Layout>
    </AuthProvider>
  );
};

// new Users()

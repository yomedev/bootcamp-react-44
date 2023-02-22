import { ToastContainer } from "react-toastify";
// import { Counter } from "./components/Counter/Counter";
import { Header, Layout } from "./components/Layout";
import { LoginForm } from "./components/LoginForm/LoginForm";
// import { Timer } from "./components/Timer/Timer";

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <Counter defaultLikes={15} /> */}
      {/* <Timer /> */}
      <LoginForm />
      <ToastContainer />
    </Layout>
  );
};



// new Users()

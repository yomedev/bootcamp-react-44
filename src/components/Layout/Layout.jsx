import { PropTypes } from "prop-types";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../../context/AuthContext";

import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = () => {
  return (
    <AuthProvider>
      <div className="d-flex h-100">
        <Sidebar />

        <main
          className="tab-content p-5 h-100 col-10"
          style={{ minHeight: "100vh" }}
        >
          <div className="tab-pane fade show active"><Outlet /></div>
        </main>
        <ToastContainer />
      </div>
    </AuthProvider>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};

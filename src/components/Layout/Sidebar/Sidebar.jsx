import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Nav } from "./Nav";

export const Sidebar = () => {
  const { isAuth } = useAuth();
  // console.log(isAuth);
  return (
    <aside
      className="nav nav-pills p-5 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "88vh" }}
      >
        {isAuth ? (
          <Nav />
        ) : (
          <>
            <NavLink className="btn btn-light mb-3" to="/login">
              Log in
            </NavLink>
            <NavLink className="btn btn-light" to="/register">
              Register
            </NavLink>
          </>
        )}
      </div>
    </aside>
  );
};

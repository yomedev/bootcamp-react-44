import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";

import { Button } from "../../../Button";

// const CustomLink = styled(NavLink)`
//   & .active {

//   }
// `

export const Nav = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className={"d-flex flex-column justify-content-between"}>
        <h2 className="h3 mb-4">Welcome back!</h2>
        <NavLink
          to="/"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Home page
        </NavLink>
        <NavLink
          to="/posts"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/new-post"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Create new post
        </NavLink>
        <NavLink
          to="/exercises"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Exercises
        </NavLink>
      </div>

      <Button onClick={logout} className="btn-danger mt-auto">
        Log Out
      </Button>
    </div>
  );
};

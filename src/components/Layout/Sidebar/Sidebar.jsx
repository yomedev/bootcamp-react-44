import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchStatus } from "../../../constants/fetchStatus";
import { useAuth } from "../../../context/AuthContext";
import { NotAuth } from "./NotAuth";
import { UserNav } from "./UserNav";

export const Sidebar = () => {
  const status = useSelector((state) => state.auth.status);
  return (
    <aside
      className="nav nav-pills p-5 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "88vh" }}
      >
        {status === fetchStatus.Success ? <UserNav /> : <NotAuth />}
      </div>
    </aside>
  );
};

import { useContext, useState } from "react";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../../../../context/AuthContext";

import { Button } from "../../../Button";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [isPassword, setIsPassword] = useState(true);
  const toggle = () => setIsPassword((prev) => !prev);

  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    login(form.username, form.password)
  }

  return (
    <>
      <h2>Hello</h2>

      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          name="username"
          value={form.username}
          type="text"
          className="form-control"
          placeholder="Username"
        />
      </div>

      <div className="input-group mb-3">
        <input
          value={form.password}
          onChange={handleChange}
          name="password"
          type={isPassword ? "password" : "text"}
          className="form-control"
          placeholder="Password ..."
        />
        <Button className="btn-outline-secondary" onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>

      <Button type="submit" onClick={handleSubmit}>Log In</Button>
    </>
  );
};

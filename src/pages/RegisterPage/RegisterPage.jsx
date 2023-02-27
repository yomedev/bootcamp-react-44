import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const year = new Date().getFullYear();

const formInitialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterPage = () => {
  const [form, setForm] = useState(formInitialState);
  const { login } = useAuth();

  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(form);
  //   login(form.email, form.password)
  //     .then(() => navigate("/posts", { replace: true }))
  //     .catch(() => toast.error("Incorect password"));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    if (form.confirmPassword !== form.password) {
      toast.error("Password doesn't match confirm password ");
      return;
    }
    login(form.email, form.password)
      .then(() => navigate("/posts", { replace: true, state: { isRegister: true } }))
      .catch(() => toast.error("Incorect password"));
  };

  return (
    <form
      className="form-signin d-flex align-items-center justify-content-center mt-5"
      onSubmit={handleSubmit}
    >
      <div className="d-block" style={{ width: 300, height: "max-content" }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            value={form.username}
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Jhon"
            onChange={handleChange}
            ref={inputRef}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mt-4">
          <input
            value={form.email}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating mt-4">
          <input
            value={form.password}
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="form-floating mt-4">
          <input
            value={form.confirmPassword}
            name="confirmPassword"
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
          Sign up
        </button>

        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </div>
    </form>
  );
};

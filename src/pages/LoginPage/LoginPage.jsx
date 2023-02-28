import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const schema = yup
  .object({
    email: yup.string().required().min(5),
    password: yup.string().required().min(8),
  })
  .required();

const year = new Date().getFullYear();

const formInitialState = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: formInitialState,
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then(() => navigate("/posts", { replace: true }))
      .catch(() => toast.error("Incorect password"));
  };

  return (
    <form
      className="form-signin d-flex align-items-center justify-content-center mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="d-block" style={{ width: 300, height: "max-content" }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            // {...register("email", {
            //   required: { value: true, message: "Email is required" },
            //   minLength: {
            //     value: 5,
            //     message: "Email needs to be at least 5 characters",
            //   },
            // })}
            {...register("email")}
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            // ref={inputRef}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            {...register("password")}
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
          <label htmlFor="pass">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
          Sign in
        </button>

        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </div>
    </form>
  );
};

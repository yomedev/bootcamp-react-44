import { useEffect, useRef, useState } from "react";

const year = new Date().getFullYear();

const formInitialState = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [form, setForm] = useState(formInitialState);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form);
  }

  return (
    <form
      className="form-signin d-flex align-items-center justify-content-center mt-5"
      onSubmit={handleSubmit}
    >
      <div className="d-block" style={{ width: 300, height: "max-content" }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            value={form.email}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={handleChange}
            ref={inputRef}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            value={form.password}
            name="password"
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
            onChange={handleChange}
          />
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

// export class LoginForm extends Component {
//   state = {
//     email: "test@gmail.com",
//     password: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     toast(`${email} ${password}`);
//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;
//     console.log("email: ", email);
//     console.log("password: ", password);
//     return (
//       <form
//         className="form-signin d-flex align-items-center justify-content-center mt-5"
//         onSubmit={this.handleSubmit}
//       >
//         <div className="d-block" style={{ width: 300, height: "max-content" }}>
//           <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//           <div className="form-floating">
//             <input
//               value={email}
//               type="email"
//               name="email"
//               className="form-control"
//               id="email"
//               placeholder="name@example.com"
//               onChange={this.handleChange}
//             />
//             <label htmlFor="email">Email address</label>
//           </div>
//           <div className="form-floating mt-4">
//             <input
//               value={password}
//               name="password"
//               type="password"
//               className="form-control"
//               id="pass"
//               placeholder="Password"
//               onChange={this.handleChange}
//             />
//             <label htmlFor="pass">Password</label>
//           </div>

//           <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
//             Sign in
//           </button>

//           <p className="mt-5 mb-3 text-muted">© {year}</p>
//         </div>
//       </form>
//     );
//   }
// }

// export const LoginForm = () => {
//   return (
//     <form className="form-signin d-flex align-items-center justify-content-center mt-5">
//       <div className="d-block" style={{ width: 300, height: "max-content" }}>
//         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//         <div className="form-floating">
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="name@example.com"
//           />
//           <label htmlFor="email">Email address</label>
//         </div>
//         <div className="form-floating mt-4">
//           <input
//             type="password"
//             className="form-control"
//             id="pass"
//             placeholder="Password"
//           />
//           <label htmlFor="pass">Password</label>
//         </div>

//         <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
//           Sign in
//         </button>

//         <p className="mt-5 mb-3 text-muted">© {year}</p>
//       </div>
//     </form>
//   );
// };

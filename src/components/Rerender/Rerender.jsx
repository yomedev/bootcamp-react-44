import { memo, useCallback, useState } from "react";

const Button = memo(({ label, onClick }) => {
  console.log("Button");
  return (
    <button className="btn btn-outline-light" type="button" onClick={onClick}>
      {label}
    </button>
  );
});

// class Button extends PureComponent {

//   render() {
//     const { label, onClick } = this.props;
//     console.log("Button");

//     return (
//       <button className="btn btn-outline-light" type="button" onClick={onClick}>
//         {label}
//       </button>
//     );
//   }
// }

export const Rerender = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  // const handleCount = () => {
  //   setCounter((prevState) => prevState + 1);
  // };

  console.log("Rerender");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2>{counter}</h2>

      <Button
        label="Click me!"
        // person={{ name: "Bob", email: "bob@gmail.com" }}
        onClick={handleCount}
      />
    </div>
  );
};

// export class Rerender extends Component {
//   state = {
//     counter: 0,
//   };

//   handleCount = () => {
//     this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//   };

//   render() {
//     const { counter } = this.state;
//     console.log("Rerender");

//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
//         <h2>{counter}</h2>

//         <Button
//           label="Click me!"
//           // person={{ name: "Bob", email: "bob@gmail.com" }}
//           onClick={this.handleCount}
//         />
//       </div>
//     );
//   }
// }

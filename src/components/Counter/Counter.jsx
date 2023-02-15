import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Component } from "react";

export class Counter extends Component {
  state = {
    counter: this.props.defaultValue ?? 0,
    like: 0,
    dislike: 0,
  };

  handleChangeLike = () => {
    // this.setState((prevState) => ({ counter: prevState.counter + 1}), () => console.log(this.state.counter))
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  handleChangeDislike = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  handleUpdate = (event) => {
    const { name } = event.currentTarget;
    switch (name) {
      case "like":
        this.setState((prevState) => ({
          counter: prevState.counter + 1,
          like: prevState.like + 1,
        }));
        break;

      case "dislike":
        this.setState((prevState) => ({
          counter: prevState.counter - 1,
          dislike: prevState.dislike + 1,
        }));
        break;
      default:
        throw new Error("Name doesn't exist");
    }
  };

  render() {
    const { counter, like, dislike } = this.state;
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-4" style={{ fontSize: 60 }}>
          {counter}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            className="position-relative btn p-4 btn-outline-light mx-5"
            type="button"
            name="like"
            onClick={this.handleUpdate}
          >
            <span className="position-absolute top-0 start-0 translate-middle px-3 py-2 fs-6 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
              {like}
            </span>
            <FiThumbsUp className="fs-2" />
          </button>

          <button
            className="btn p-4 btn-outline-light mx-5 position-relative"
            type="button"
            name="dislike"
            onClick={this.handleUpdate}
          >
            <span className="position-absolute top-0 start-100 translate-middle px-3 py-2 fs-6 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
              {dislike}
            </span>
            <FiThumbsDown className="fs-2" />
          </button>
        </div>
      </div>
    );
  }
}

// export const Counter = () => {
//   return (
//     <div className="mb-5 p-5 text-white bg-dark rounded-3">
//       <h2 className="text-center">Counter</h2>
//       <p className="text-center my-4" style={{ fontSize: 60 }}>
//         0
//       </p>

//       <div className="d-flex align-items-center justify-content-center w-100">
//         <button
//           className="position-relative btn p-4 btn-outline-light mx-5"
//           type="button"
//         >
//           {/* <span className='position-absolute top-0 start-0 translate-middle px-3 py-2 fs-6 fw-bold border border-light border-2 rounded-circle bg-dark text-light'>0</span> */}
//           <FiThumbsUp className="fs-2" />
//         </button>

//         <button
//           className="btn p-4 btn-outline-light mx-5 position-relative"
//           type="button"
//         >
//           {/* <span className='position-absolute top-0 start-100 translate-middle px-3 py-2 fs-6 fw-bold border border-light border-2 rounded-circle bg-dark text-light'>0</span> */}
//           <FiThumbsDown className="fs-2" />
//         </button>
//       </div>
//     </div>
//   );
// };

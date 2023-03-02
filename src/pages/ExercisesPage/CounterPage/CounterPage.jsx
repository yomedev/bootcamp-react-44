import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAction, likeAction } from "../../../redux/counter/counterActions";
import { DISLIKE, LIKE } from "../../../redux/counter/counterTypes";

export const CounterPage = () => {
  const {likes, dislikes} = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    const { name } = event.currentTarget;
    switch (name) {
      case "like":
        dispatch(likeAction());
        break;
      case "dislike":
        dispatch(dislikeAction(15));
        break;
      default:
        throw new Error("Name doesn't exist");
    }
  };

  const total = likes - dislikes;
  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Total</h2>
      <p className="text-center my-4" style={{ fontSize: 60 }}>
        {total}
      </p>
      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          className="position-relative btn p-4 btn-outline-light mx-5"
          type="button"
          name="like"
          onClick={handleUpdate}
        >
          <span className="position-absolute top-0 start-0 translate-middle px-3 py-2 fs-5 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
            {likes}
          </span>
          <FiThumbsUp className="fs-2" />
        </button>

        <button
          className="btn p-4 btn-outline-light mx-5 position-relative"
          type="button"
          name="dislike"
          onClick={handleUpdate}
        >
          <span className="position-absolute top-0 start-100 translate-middle px-3 py-2 fs-5 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
            {dislikes}
          </span>
          <FiThumbsDown className="fs-2" />
        </button>
      </div>
    </div>
  );
};

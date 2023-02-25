import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { useEffect, useState } from "react";

const LIKES_DISELIKES_LS_KEY = "likesdislikes";

const getLocalData = (key, defaultValue) => {
  console.log("getLocalData");
  return (
    JSON.parse(localStorage.getItem(LIKES_DISELIKES_LS_KEY))[key] ??
    defaultValue
  );
};

export const CounterPage = ({ defaultLikes }) => {
  const [likes, setLikes] = useState(() => getLocalData("likes", defaultLikes));
  const [dislikes, setDislikes] = useState(() => getLocalData("dislikes", 0));

  useEffect(() => {
    localStorage.setItem(
      LIKES_DISELIKES_LS_KEY,
      JSON.stringify({ likes, dislikes })
    );
  }, [likes, dislikes]);

  const handleUpdate = (event) => {
    const { name } = event.currentTarget;
    switch (name) {
      case "like":
        setLikes((prev) => prev + 1);
        break;
      case "dislike":
        setDislikes((prev) => prev + 1);
        break;
      default:
        throw new Error("Name doesn't exist");
    }
  };

  const total = likes - dislikes;
  console.log("render");
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

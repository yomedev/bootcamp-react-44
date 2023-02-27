import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { createNewPostService } from "../../services/postsService";
import { Loader } from "../../components/Loader";

const initialState = {
  title: "",
  body: "",
  userId: 5,
};

export const NewPostPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setForm(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    createNewPostService(form)
      .then((post) => {
        console.log(post);
        navigate("/posts", { replace: true });
        toast.success("You have successfully created a new post!");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}

      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post title</p>
            <input
              value={form.title}
              onChange={handleChange}
              type="text"
              name="title"
              className="form-control"
              placeholder="Post title ..."
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post content</p>
            <textarea
              value={form.content}
              onChange={handleChange}
              className="form-control"
              name="body"
              rows="10"
              placeholder="Post content"
            />
          </label>
        </div>

        <div className="d-flex mt-5">
          <button
            type="button"
            className="d-block btn btn-secondary me-4"
            onClick={handleReset}
          >
            Reset form
          </button>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

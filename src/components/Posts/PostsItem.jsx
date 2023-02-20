import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cutString } from "../../helpers/cut-string";

// const preview_image = "https://pixabay.com/get/gf318164e7c253443cb2feb1fcad212ec2ccb64a9b14a6e0b7bc7626bf951139f9a56307ee7ac60bd79f9190ff56e8187_640.jpg"

// const post = {
//   id: 7,
//   title: "This is important to remember.",
//   body: `This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.`,
//   tags: ["magical", "crime"],
//   reactions: 0,
//   preview_image:
//     "https://pixabay.com/get/gf318164e7c253443cb2feb1fcad212ec2ccb64a9b14a6e0b7bc7626bf951139f9a56307ee7ac60bd79f9190ff56e8187_640.jpg",
//   created_at: "2022-08-09T22:26:17.837322+00:00",
//   updated_at: null,
// };

// const created_at = "2022-08-09T22:26:17.837322+00:00"

export const PostsItem = ({post}) => {
  return (
    <div className="col-12 col-xl-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post.preview_image}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.body, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Reactions: {post.reactions}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(post.created_at)}
            </li>
          </ul>

          <div className="d-flex">
            <button type="button" className="btn btn-danger">
              Delete post
            </button>

            <a href={`/posts/${post.id}`} className="btn btn-primary ms-3">
              Read post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

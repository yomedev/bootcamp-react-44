import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ExercisesPage } from "./pages/ExercisesPage/ExercisesPage";
import { RerenderPage } from "./pages/ExercisesPage/RerenderPage/RerenderPage";
import { TimerPage } from "./pages/ExercisesPage/TimerPage/TimerPage";
import { CounterPage } from "./pages/ExercisesPage/CounterPage/CounterPage";

import HomePage from "./pages/HomePage";
import { NewPostPage } from "./pages/NewPostPage/NewPostPage";
import { PostsListPage } from "./pages/PostsListPage/PostsListPage";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

// domen/users/posts

// posts

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsListPage />} />
          <Route path="posts/:postId" element={<SinglePostPage />} />
          <Route path="new-post" element={<NewPostPage />} />
          <Route path="exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to="timer" />} />
            <Route path="timer" element={<TimerPage />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="re-render" element={<RerenderPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

<ExercisesPage>
  <CounterPage />
</ExercisesPage>;

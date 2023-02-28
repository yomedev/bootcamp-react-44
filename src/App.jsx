import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ExercisesPage } from "./pages/ExercisesPage/ExercisesPage";
import { RerenderPage } from "./pages/ExercisesPage/RerenderPage/RerenderPage";
import { TimerPage } from "./pages/ExercisesPage/TimerPage/TimerPage";
// import { CounterPage } from "./pages/ExercisesPage/CounterPage/CounterPage";

// import HomePage from "./pages/HomePage";
import { NewPostPage } from "./pages/NewPostPage/NewPostPage";
// import { PostsListPage } from "./pages/PostsListPage/PostsListPage";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { CommentsPage } from "./pages/SinglePostPage/CommentsPage/CommentsPage";
import UsersPage from "./pages/ExercisesPage/UsersPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const PostsListPage = lazy(() => import("./pages/PostsListPage/"));
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"));

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="posts" element={<PostsListPage />} />
            <Route path="posts/:postId" element={<SinglePostPage />}>
              <Route path="comments" element={<CommentsPage />} />
            </Route>
            <Route path="new-post" element={<NewPostPage />} />
            <Route path="exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="timer" />} />
              <Route path="timer" element={<TimerPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="re-render" element={<RerenderPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

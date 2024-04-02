import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, CreatePost, Dashboard, Home, PostPage, Projects, Search, SignIn, SignUp, UpdatePost } from 'pages';
import { FooterComp, Header } from 'Layout';
import { AdminPrivateRoute, PrivateRoute, ScrollToTop } from 'components';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/sign-in"
          element={<SignIn />}
        />
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route
            path="/create-post"
            element={<CreatePost />}
          />
          <Route
            path="/update-post/:postId"
            element={<UpdatePost />}
          />
        </Route>
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/post/:postSlug"
          element={<PostPage />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;

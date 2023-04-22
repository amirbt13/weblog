import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";
import BlogPage from "./components/home/blog/BlogPage";
import AuthorPage from "./components/home/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

import { Link, Routes, Route } from "react-router-dom";
import { AddPost } from "./Components/AddPost";
import { Posts } from "./Components/Posts";
import { SelectedPost } from "./Components/SelectedPost";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="head-title">
          <Link to="/posts/new">
            <button className="btn-add">Создать пост</button>
          </Link>
        </div>
      </nav>

      <div className="page">
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route
            path="/posts/new"
            element={<AddPost title={"Создать пост"} />}
          />
          <Route
            path="/posts/:id"
            element={<SelectedPost title={"Просматриваемый пост"} />}
          />
          <Route path="*" element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

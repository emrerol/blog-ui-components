import "./App.css";
import PostsContainer from "./views/posts-container/posts-container.component";
import TagsContainer from "./views/tag-container/tags-container.component";
import Search from "./views/search/search.component";

function App() {
  return (
    <div className="App">
      <TagsContainer />
      <PostsContainer />
      <Search />
    </div>
  );
}

export default App;

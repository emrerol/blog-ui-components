import "./App.css";
import PostsContainer from "./views/posts-container/posts-container.component";
import TagsContainer from "./views/tag-container/tags-container.component";

function App() {
  return (
    <div className="App">
      <TagsContainer />
      <PostsContainer />
    </div>
  );
}

export default App;

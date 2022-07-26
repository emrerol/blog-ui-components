import Post from "../../components/post/post.component";
import Title from "../../components/title/title.component";
import "./posts-container.style.css";
const DEFAULT_POSTS = [
  {
    id: 1,
    post: "Azure Speech Studio for Mixed Reality",
  },
  {
    id: 2,
    post: "HoloLens 2 Unreal Project Template",
  },
  {
    id: 3,
    post: "Simplygon in Azure",
  },
  {
    id: 4,
    post: "Blender in Azure",
  },
  {
    id: 5,
    post: "AAD Login on HoloLens 2",
  },
];

const PostsContainer = () => {
  return (
    <div className="post-container">
      <div className="title-hold">
        <Title titleName={"Recent posts"} />
      </div>
      <div className="posts-wrapper">
        {DEFAULT_POSTS.map((post) => (
          <Post key={post.id} postName={post.post} />
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;

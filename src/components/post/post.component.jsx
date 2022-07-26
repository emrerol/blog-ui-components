import "./post.style.css";

const Post = ({ postName }) => {
  return (
    <label className="post-label">
      <a href="#" className="post-a">
        {postName}
      </a>
    </label>
  );
};

export default Post;

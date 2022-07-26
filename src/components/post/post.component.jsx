import "./post.style.css";

const Post = ({ postName }) => {
  return (
    <div className="post-div">
      <a href="#" className="post-a">
        {postName}
      </a>
    </div>
  );
};

export default Post;

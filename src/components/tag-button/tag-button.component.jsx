import "./tag-button.style.css";

const TagButton = ({ tagName }) => {
  return (
    <a href="#" className="tag-name-anchor">
      {tagName}
    </a>
  );
};

export default TagButton;

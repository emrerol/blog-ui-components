import "./title.style.css";
const Title = ({ titleName }) => {
  return (
    <div>
      <h3 className="title">{titleName}</h3>
    </div>
  );
};

export default Title;

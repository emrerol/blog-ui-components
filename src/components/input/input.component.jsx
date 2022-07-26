import "./input.styles.css";
import SearchIcon from "../../assets/searchIcon.svg";

const Input = () => {
  return (
    <div className="search-field-container">
      <form action="">
        <img src={SearchIcon} alt="search" />
        <input type="search" placeholder="Search articles, topics , etc." />
      </form>
    </div>
  );
};

export default Input;

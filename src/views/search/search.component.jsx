import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import "./search.style.css";

const Search = () => {
  return (
    <div className="search-container">
      <Input />
      <Button buttonText={"Search"} />
    </div>
  );
};

export default Search;

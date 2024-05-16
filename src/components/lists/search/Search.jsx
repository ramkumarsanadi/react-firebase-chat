import { useState } from "react";
import "../search/search.css";
const Search = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="search">
      <div className="search-bar">
        <img src="./search.png" alt="search icon" />
        <input type="text" placeholder="search" />
      </div>
      <img
        src={addMode ? "./minus.png" : "./plus.png"}
        className="add"
        alt=""
        onClick={() => setAddMode((prev) => !prev)}
      />
    </div>
  );
};
export default Search;

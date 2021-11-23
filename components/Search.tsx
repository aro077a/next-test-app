import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <p className="search__title">Search Messages</p>
      <div className="search__container">
        <FaSearch />
        <input
          type="search"
          placeholder="Type &#38; Hit Enter"
          maxLength={25}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Type & Hit Enter")}
        />
      </div>
    </div>
  );
};

export default Search;

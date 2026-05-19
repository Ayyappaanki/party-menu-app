import { FiSearch } from "react-icons/fi";
import './index.css';
const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="search-container">
      <FiSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
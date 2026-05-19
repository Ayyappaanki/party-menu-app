import "./index.css";
const VegNonVegFilter = ({
  vegFilter,
  setVegFilter,
  nonVegFilter,
  setNonVegFilter,
}) => {
  return (
    <div className="filter-container">
      <button
        className={`filter-btn ${vegFilter ? "active-filter" : ""}`}
        onClick={() => setVegFilter(!vegFilter)}
      >
        Veg
      </button>

      <button
        className={`filter-btn ${nonVegFilter ? "active-filter" : ""}`}
        onClick={() => setNonVegFilter(!nonVegFilter)}
      >
        Non-Veg
      </button>
    </div>
  );
};

export default VegNonVegFilter;

import "./index.css";
const CategoryTabs = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  getCategoryCount,
}) => {
  return (
    <div className="tabs-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab-button ${
            selectedCategory === category ? "active-tab" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category} ({getCategoryCount(category)})
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;

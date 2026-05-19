import "./index.css";
const DishCard = ({ dish, isSelected, onSelectDish, onIngredientClick }) => {
  return (
    <div className="dish-card">
      <div className="dish-content">
        <div className="dish-left">
          <div className="dish-header">
            <span
              className={`dish-type ${dish.type === "veg" ? "veg" : "non-veg"}`}
            >
              {dish.type === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
            </span>

            <h3 className="dish-name">{dish.name}</h3>
          </div>

          <p className="dish-description">{dish.description}</p>

          <button
            className="ingredient-btn"
            onClick={() => onIngredientClick(dish.id)}
          >
            Ingredients
          </button>
        </div>

        <div className="dish-right">
          <img src={dish.image} alt={dish.name} className="dish-image" />

          <button
            className={`add-btn ${isSelected ? "selected-btn" : ""}`}
            onClick={() => onSelectDish(dish.id)}
          >
            {isSelected ? "Remove" : "Add +"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;

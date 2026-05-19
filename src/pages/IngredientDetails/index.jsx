import { useNavigate, useParams } from "react-router-dom";
import menuData from "../../data/menuData";
import { useEffect } from "react";
import "./index.css";

const IngredientDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const selectedDish = menuData.find((dish) => dish.id === Number(id));

  if (!selectedDish) {
    return <h1>Dish not found</h1>;
  }

  useEffect(() => {
    document.title = selectedDish?.name || "Ingredient Details";
  }, [selectedDish]);

  return (
    <div className="ingredient-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="dish-title">{selectedDish.name}</h1>

      <p className="dish-desc">{selectedDish.description}</p>

      <img
        src={selectedDish.image}
        alt={selectedDish.name}
        className="detail-image"
      />

      <h2 className="ingredients-heading">Ingredients</h2>

      {selectedDish.ingredients.map((ingredient, index) => (
        <div key={index} className="ingredient-row">
          <span className="ingredient-name">{ingredient.name}</span>

          <span className="ingredient-qty">{ingredient.quantity}</span>
        </div>
      ))}
    </div>
  );
};

export default IngredientDetails;

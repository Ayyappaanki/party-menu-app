import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import menuData from "../../data/menuData";

import DishCard from "../../components/DishCard";
import SearchBar from "../../components/SearchBar";
import CategoryTabs from "../../components/CategoryTabs";
import BottomBar from "../../components/BottomBar";
import VegNonVegFilter from "../../components/VegNonVegFilter";

import "./index.css";

const categories = ["Starter", "Main Course", "Dessert", "Sides"];

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Starter");
  const [vegFilter, setVegFilter] = useState(false);

  const [nonVegFilter, setNonVegFilter] = useState(false);

  const [selectedDishes, setSelectedDishes] = useState([]);

  useEffect(() => {
    document.title = "Party Menu App";
  }, []);

  const handleDishSelection = (dishId) => {
    setSelectedDishes((prev) => {
      const alreadySelected = prev.includes(dishId);

      if (alreadySelected) {
        return prev.filter((id) => id !== dishId);
      }

      return [...prev, dishId];
    });
  };

  const getCategoryCount = (category) => {
    return menuData.filter(
      (dish) => dish.category === category && selectedDishes.includes(dish.id),
    ).length;
  };

  const filteredDishes = menuData.filter((dish) => {
    const matchesCategory = dish.category === selectedCategory;

    const matchesSearch = dish.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesVegFilter =
      (!vegFilter && !nonVegFilter) ||
      (vegFilter && dish.type === "veg") ||
      (nonVegFilter && dish.type === "non-veg");

    return matchesCategory && matchesSearch && matchesVegFilter;
  });

  return (
    <div className="home-container">
      <h1 className="home-heading">Select Dishes</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        getCategoryCount={getCategoryCount}
      />

      <VegNonVegFilter
        vegFilter={vegFilter}
        setVegFilter={setVegFilter}
        nonVegFilter={nonVegFilter}
        setNonVegFilter={setNonVegFilter}
      />

      <div className="selection-info">
        <p>{selectedDishes.length} Dish Selected</p>
      </div>

      <div>
        {filteredDishes.length === 0 ? (
          <div className="empty-state">No dishes found</div>
        ) : (
          filteredDishes.map((dish) => {
            const isSelected = selectedDishes.includes(dish.id);

            return (
              <DishCard
                key={dish.id}
                dish={dish}
                isSelected={isSelected}
                onSelectDish={handleDishSelection}
                onIngredientClick={(id) => navigate(`/ingredient/${id}`)}
              />
            );
          })
        )}
      </div>
      <BottomBar selectedCount={selectedDishes.length} />
    </div>
  );
};

export default Home;

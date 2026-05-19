import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IngredientDetails from "./pages/IngredientDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredient/:id" element={<IngredientDetails />} />
    </Routes>
  );
};

export default App;

import "./App.css";
import React, { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addNewFood = (food) => {
    const updatedFoods = [...foods, food];

    setFoods(updatedFoods);
  };

  const deleteFood = (id) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addFoodForm={addNewFood} />
      {foods.map((food) => {
        return <FoodBox key={food.id} food={food} onDelete={deleteFood} />;
      })}
    </div>
  );
}

export default App;

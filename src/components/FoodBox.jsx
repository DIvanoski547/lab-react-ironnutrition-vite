// Your code here
import React from "react";

const FoodBox = ({food,onDelete}) => {
  const {  id, name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className="food-box">
      <p>{name}</p>
      <img className="img-wrapper" src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodBox;







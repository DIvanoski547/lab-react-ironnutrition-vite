// Your code here
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AddFoodForm({ addFoodForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handlesubmit = (e) => {
    e.preventDefault();

    const _id = uuidv4();

    const newFood = {
      _id,
      name,
      image,
      calories,
      servings,
    };

    addFoodForm(newFood);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h3>Add new Food</h3>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameInput}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleImageInput}
        />

        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          id="servings"
          value={servings}
          onChange={handleServingsInput}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

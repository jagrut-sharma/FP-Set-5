// 10. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, name, ingredients, and instructions. Write a React component that takes the array of recipes as input and generates an ordered list of recipes, where each list item displays the recipe's name, ingredients, and instructions. Data has been provided below for this questions.

import { recipes } from "./config";

const RecipeDetails = () => {
  let i = 0;
  return (
    <div className="container">
      <h2>Recipe Details</h2>
      <ol className="recipe-order-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-list">
            <strong className="recipe-heading">{recipe.name}</strong>{" "}
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ele) => (
                <li key={++i}>{ele}</li>
              ))}
            </ul>{" "}
            <h3>Method:</h3>
            <div>
              {" "}
              {recipe.instructions.map((instruction) => (
                <p key={++i}>{instruction}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;

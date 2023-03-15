// 5. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.

const recipes = [
  { id: 1, recipeName: "Paneer Tikka Masala", recipeCreator: "Jagrut" },
  { id: 2, recipeName: "Malai Kofta", recipeCreator: "Bilal" },
  { id: 3, recipeName: "Biryani", recipeCreator: "Harsh" },
  { id: 4, recipeName: "Vadapav", recipeCreator: "Swastik" },
  { id: 5, recipeName: "Rasgulla", recipeCreator: "Raj" }
];

const PetPooja = () => {
  return (
    <div>
      <h2 className="heading">Pet Pooja</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="non-bullet-list">
            Dish: {recipe.recipeName} || Creator: {recipe.recipeCreator}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetPooja;

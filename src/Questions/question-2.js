// 2. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.

const products = [
  { id: 1, name: "Pants", price: 100, category: "Clothes" },
  { id: 2, name: "Beyblade", price: 50, category: "Kids" },
  { id: 3, name: "Maggi", price: 30, category: "Food" },
  { id: 4, name: "Headphones", price: 300, category: "Electronics" },
  { id: 5, name: "Boroline", price: 70, category: "Cosmetics" }
];

const ProductList = () => {
  return (
    <div>
      <h2 className="heading">Product Details</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="non-bullet-list">
            Product: {product.name} || Price: {product.price} || Category:{" "}
            {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProductList };

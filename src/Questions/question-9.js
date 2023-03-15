// 9. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and generates an ordered list of products, where each list item displays the product's name, price, and category.

const products = [
  { id: 1, name: "Water Bottle", price: 100, category: "Utensils" },
  { id: 2, name: "Photo frame", price: 75, category: "Furniture" },
  { id: 3, name: "Laptop", price: 500, category: "Electronics" },
  { id: 4, name: "Dustbin", price: 50, category: "House Items" },
  { id: 5, name: "Books", price: 25, category: "education" }
];

const ProductDetails = () => {
  return (
    <div>
      <h2 className="heading">Product Details</h2>
      <ol>
        {products.map((product) => (
          <li className="order-list" key={product.id}>
            Name: {product.name} || Price: {product.price} || Category:{" "}
            {product.category}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductDetails;

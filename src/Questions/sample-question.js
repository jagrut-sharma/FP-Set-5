// Using React's map method, write code that generates an unordered list (ul) with one list item (li) for each item in the items array. Each list item should display the item's name and price in the following format:

// [Item Name]: ([Item Price])
// The li elements should be wrapped in a div element that contains a heading (h1) with the text "Shopping Cart" and a paragraph (p) that displays the total price in the following format:

// Total: [Total Price]

// The li elements should each have a unique key attribute based on the item's id property.

const items = [
  { id: 1, name: "Book", price: 10 },
  { id: 2, name: "T-Shirt", price: 15 },
  { id: 3, name: "Hat", price: 8 },
  { id: 4, name: "Sunglasses", price: 12 }
];

const total = 45;

const ShoppingCart = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="non-bullet-list">
              {item.name}: ({item.price})
            </li>
          );
        })}
        <p className="total">Total: {total}</p>
      </ul>
    </div>
  );
};

export default ShoppingCart;

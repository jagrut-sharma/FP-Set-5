// 6. Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.

const cars = [
  { id: 1, make: "Maruti Suzuki", model: "Dzire", price: 25000 },
  { id: 2, make: "Ford", model: "Ecosport", price: 35000 },
  { id: 3, make: "KIA", model: "Seltos", price: 32000 },
  { id: 4, make: "TATA", model: "Nexon", price: 28000 }
];

const CarsList = () => {
  return (
    <div>
      <h2 className="heading">Cars Details</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id} className="non-bullet-list">
            Company: {car.make} || Car: {car.model} || Price: {car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;

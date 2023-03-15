// 4. Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.

const employees = [
  { id: 1, name: "ABC", department: "Sales", salary: 700 },
  { id: 2, name: "DEF", department: "R&D", salary: 700 },
  { id: 3, name: "GHI", department: "Admin", salary: 540 },
  { id: 4, name: "JKL", department: "Tech", salary: 750 },
  { id: 5, name: "MNO", department: "HR", salary: 600 }
];

const EmployeesDetails = () => {
  return (
    <div>
      <h2 className="heading">Employees Details</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="non-bullet-list">
            Name: {employee.name} || Department: {employee.department} ||
            Salary: {employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesDetails;

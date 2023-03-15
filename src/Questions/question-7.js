// 7. Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.

const students = [
  { id: 1, name: "ABC", grade: 9.8, attendance: "75%" },
  { id: 2, name: "DEF", grade: 8.6, attendance: "80%" },
  { id: 3, name: "GHI", grade: 10, attendance: "65%" },
  { id: 4, name: "JKL", grade: 8.7, attendance: "85%" }
];

const StudentDetails = () => {
  return (
    <div>
      <h2 className="heading">Student Details</h2>
      <ol>
        {students.map((student) => (
          <li key={student.id} className="order-list">
            Name: {student.name} || Grade: {student.grade} || Attendance:{" "}
            {student.attendance}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StudentDetails;

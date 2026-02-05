import './App.css'
import StudentList from "./components/studentlist";

function App() {
  const students = [
    { name: "Ammar", age: 119, course: "Mechanic", city: "Chhappi" },
    { name: "Rishikesh", age: 21, course: "Electrician", city: "Rohtas" },
    { name: "Sahil", age: 18, course: "Waiter", city: "Patan" },
    { name: "Rock", age:25, course: "BE", city: "Rajkot" },
    { name: "Abdul", age: 10, course: "MBBS", city: "Bhihar" },
    { name: "Ankit", age: 2, course: "Nurse", city: "Patna" }
  ];  

  return (
    <div>
      <h1>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;






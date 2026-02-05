function StudentCard({ name, age, course, city }) {
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default StudentCard;

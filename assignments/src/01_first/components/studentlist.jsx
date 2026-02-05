import StudentCard from "./studentcard";

function StudentList({ students }) {
  return (
    <div className="studentlist">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          // {...student}
          name={student.name}
          age={student.age}
          course={student.course}
          city={student.city}
        />
      ))}
    </div>
  );
}

export default StudentList;

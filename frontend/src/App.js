import React, { useEffect, useState } from "react";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = () => {
    getStudents().then((res) => setStudents(res.data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSave = (student) => {
    if (student.id) {
      updateStudent(student.id, student).then(() => {
        fetchStudents();
        setEditingStudent(null);
      });
    } else {
      addStudent(student).then(() => fetchStudents());
    }
  };

  const handleDelete = (id) => {
    deleteStudent(id).then(() => fetchStudents());
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student CRUD App</h1>

      <StudentForm onSave={handleSave} editingStudent={editingStudent} />

      <StudentList
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
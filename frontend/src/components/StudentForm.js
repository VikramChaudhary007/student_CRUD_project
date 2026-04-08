import React, { useState, useEffect } from "react";

function StudentForm({ onSave, editingStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(student);
    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{student.id ? "Update Student" : "Add Student"}</h3>

      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
        required
      />

      <input
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {student.id ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;
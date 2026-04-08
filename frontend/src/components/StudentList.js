import React from "react";

function StudentList({ students, onDelete, onEdit }) {
  return (
    <div>
      <h3>Student List</h3>

      {students.map((s) => (
        <div key={s.id} style={{ marginBottom: "10px" }}>
          <b>{s.name}</b> | {s.email} | {s.course}

          <button onClick={() => onEdit(s)}>Edit</button>

          <button onClick={() => onDelete(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
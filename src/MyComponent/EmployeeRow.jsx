// src/components/EmployeeRow.jsx
import React from 'react';

function EmployeeRow({ employee, onEdit, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      onDelete(employee.id);
    }
  };

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.position}</td>
      <td>{employee.department}</td>
      <td>
        <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(employee)}>
          Edit
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EmployeeRow;

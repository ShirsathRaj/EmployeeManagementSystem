// src/components/EmployeeList.jsx
import React from 'react';
import EmployeeRow from './EmployeeRow';

function EmployeeList({ employees = [], onEdit, onDelete }) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Position</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <EmployeeRow
            key={emp.id}
            employee={emp}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;

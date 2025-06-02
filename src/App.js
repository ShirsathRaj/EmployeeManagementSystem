import React, { useState } from 'react';
import Header from './MyComponent/Header';
import EmployeeForm from './MyComponent/EmployeeForm';
import EmployeeList from './MyComponent/EmployeeList';
import SearchBar from './MyComponent/SearchBar';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Add new employee
  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
  };

  // Start editing
  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  // Save changes
  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    ));
    setSelectedEmployee(null);
  };

  // Delete
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    if (selectedEmployee?.id === id) {
      setSelectedEmployee(null);
    }
  };

  // Filter employees based on search
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <Header />
      <EmployeeForm
        onAdd={handleAddEmployee}
        onUpdate={handleUpdateEmployee}
        selectedEmployee={selectedEmployee}
      />
      <SearchBar setSearchTerm={setSearchTerm} />
      <EmployeeList
        employees={filteredEmployees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
}

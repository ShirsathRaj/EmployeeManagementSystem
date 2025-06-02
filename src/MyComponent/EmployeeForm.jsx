import React, { useState, useEffect } from 'react';

function EmployeeForm({ onAdd, onUpdate, selectedEmployee }) {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    department: '',
  });

  // Fill form if editing
  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      setEmployee({
        name: '',
        email: '',
        phone: '',
        position: '',
        department: '',
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEmployee) {
      onUpdate(employee); // ✅ update mode
    } else {
      onAdd(employee);    // ✅ add mode
    }
    setEmployee({
      name: '',
      email: '',
      phone: '',
      position: '',
      department: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col">
          <input name="name" value={employee.name} onChange={handleChange} placeholder="Name" className="form-control" required />
        </div>
        <div className="col">
          <input name="email" value={employee.email} onChange={handleChange} placeholder="Email" className="form-control" required />
        </div>
        <div className="col">
          <input name="phone" value={employee.phone} onChange={handleChange} placeholder="Phone" className="form-control" required />
        </div>
        <div className="col">
          <input name="position" value={employee.position} onChange={handleChange} placeholder="Position" className="form-control" required />
        </div>
        <div className="col">
          <input name="department" value={employee.department} onChange={handleChange} placeholder="Department" className="form-control" required />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary w-100">
            {selectedEmployee ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default EmployeeForm;

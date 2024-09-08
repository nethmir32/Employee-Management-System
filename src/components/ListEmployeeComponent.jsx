import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import '../css/ListEmployeeComponent.css';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(null); // For error handling

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
                setLoading(false); // Data loaded, stop loading
            })
            .catch((error) => {
                console.error(error);
                setError('Failed to fetch employees'); // Handle error state
                setLoading(false);
            });
    }

    function addNewEmployee() {
        navigator('/add-employee');
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id) {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            deleteEmployee(id)
                .then((response) => {
                    getAllEmployees(); // Refresh the employee list after deletion
                })
                .catch((error) => {
                    console.error(error);
                    setError('Failed to delete employee'); // Handle deletion error
                });
        }
    }

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    if (error) {
        return <div>{error}</div>; // Display error message if there's an issue
    }

    return (
        <div className="container-fluid table-responsive">
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <h2 className="text-center">List Of Employees</h2>
            {employees.length === 0 ? (
                <p className="text-center">No employees found.</p> // Show message if no employees
            ) : (
                <table className="table table-striped table-bordered border-primary table-hover w-100">
                    <thead className="table-dark">
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)} style={{ marginLeft: '10px' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListEmployeeComponent;

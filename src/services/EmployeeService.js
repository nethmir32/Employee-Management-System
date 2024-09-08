import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/emp';

// Function to fetch the list of all employees
export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL)
        .catch((error) => {
            console.error("There was an error listing employees!", error);
            throw error; // Optionally rethrow to handle elsewhere
        });
};

// Function to create a new employee
export const createEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, employee)
        .catch((error) => {
            console.error("There was an error creating the employee!", error);
            throw error;
        });
};

// Function to fetch an employee by ID
export const getEmployee = (employeeId) => {
    return axios.get(`${REST_API_BASE_URL}/${employeeId}`)
        .catch((error) => {
            console.error(`There was an error fetching employee with ID ${employeeId}!`, error);
            throw error;
        });
};

// Function to update an existing employee by ID
export const updateEmployee = (employeeId, employee) => {
    return axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee)
        .catch((error) => {
            console.error(`There was an error updating employee with ID ${employeeId}!`, error);
            throw error;
        });
};

// Function to delete an employee by ID
export const deleteEmployee = (employeeId) => {
    return axios.delete(`${REST_API_BASE_URL}/${employeeId}`)
        .catch((error) => {
            console.error(`There was an error deleting employee with ID ${employeeId}!`, error);
            throw error;
        });
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/StylesTable.css'

function EmployeeSearch() {
    const [searchCriteria, setSearchCriteria] = useState('');
    const [employees, setEmployees] = useState([]);

    const handleChange = (e) => {
        setSearchCriteria(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://localhost:7062/api/Employees?strCriteria=${searchCriteria}`);
            //const data = await response.json();
            setEmployees(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error al buscar Employees:', error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <div>
            <h2>Search for Employees</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name or LastName"
                    value={searchCriteria}
                    onChange={handleChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>EmployeeID</th>
                        <th>Document</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employeeID}>
                            <td>{employee.employeeID}</td>
                            <td>{employee.document}</td>
                            <td>{employee.name}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.phoneNumber}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeSearch;
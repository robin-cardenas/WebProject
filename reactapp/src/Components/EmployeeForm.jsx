import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/StylesForm.css'

function EmployeeForm() {
    const [employeeData, setEmployeeData] = useState({
        Document: '',
        Name: '',
        LastName: '',
        PhoneNumber: '',
        Email: '',
        Address: '',
        Gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(employeeData.Email)) {
            alert('El formato del email no es valido');
            return;
        }

        try {
            await axios.post('https://localhost:7062/api/Employees', employeeData);
            alert('employee ingresado correctamente');
        } catch (error) {
            console.error('error al ingresar el empleado', error);
            alert('hubo un error al ingresar el empleado');
        }

        setEmployeeData({
            Document: '',
            Name: '',
            LastName: '',
            PhoneNumber: '',
            Email: '',
            Address: '',
            Gender: '',
        });
    };



    return (
        <div className="form-container">
            <h2>Employee Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="components">
                    <label>Document:</label>
                    <input
                        type="text"
                        name="Document"
                        value={employeeData.Document}
                        onChange={handleChange}
                        pattern="\d*"
                        required
                    />
                </div>
                <div className="components">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="Name"
                        value={employeeData.Name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="components">
                    <label>LastName:</label>
                    <input
                        type="text"
                        name="LastName"
                        value={employeeData.LastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="components">
                    <label>PhoneNumber:</label>
                    <input
                        type="text"
                        name="PhoneNumber"
                        value={employeeData.PhoneNumber}
                        onChange={handleChange}
                        pattern="\d*"
                        required
                    />
                </div>
                <div className="components">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="Email"
                        value={employeeData.Email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="components">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="Address"
                        value={employeeData.Address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="components">
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="Gender"
                        value={employeeData.Gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>

            </form>
        </div>
  );
}

export default EmployeeForm;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from '../Components/EmployeeForm.jsx'
import EmployeeSearch from '../Components/EmployeeSearch.jsx'
import '../Styles/Style.css'

function MasterPage() {
  return (
      <div>
          <header className="header">
              <h1>Employee Management</h1>
          </header>
          <Router>
              <div className="menu">
                  <nav>
                      <ul>
                          <li>
                              <Link to="/EmployeeForm">Employee Form</Link>
                          </li>
                          <li>
                              <Link to="/EmployeeSearch">Consult Employees</Link>
                          </li>
                      </ul>
                  </nav>
              </div>
              <main className="content">
              <Routes>
                  <Route path="/EmployeeForm" element={<EmployeeForm />} />
                  <Route path="/EmployeeSearch" element={<EmployeeSearch/>} />
              </Routes>
          </main>
          </Router>
          <footer className="footer">© 2023 Employee App</footer>
          
      </div>
  );
}

export default MasterPage;
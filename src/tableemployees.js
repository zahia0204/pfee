import React, { useState, useEffect } from "react";
import employeesData from "./data/Employees.json"; 

const Tableemployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  return (
    <div>
      <div className="addemployeecontainer">
      <button className="addemployee">Add employee</button>
      </div>
        <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Mot de passe</th>
            <th>Num tel</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.nom}</td>
                <td>{employee.mot_de_passe}</td>
                <td>{employee.num_tel}</td>
                <td>{employee.role}</td>
                <td><button>{employee.action}</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "red" }}>
                Aucun employé trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tableemployees;

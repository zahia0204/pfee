import React from 'react';
import Navbar from "./navBar";
import Sidebar from "./sideBar";
import Tableemployees from "./tableemployees";

const Employees = () => {
    return ( 
        <div>
            <Navbar/>
            <Sidebar/>
            <h1>Les Employés</h1>
            <Tableemployees />
        </div>
    );
};

export default Employees;

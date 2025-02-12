import React, { useState } from "react";
import "./App.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar(){

    const [open , setOpen] = useState(false);
    return(
        <nav className="navbar">
            <div className="profile-container">
                <AccountCircleIcon className="profile-icon" onClick={() => setOpen(!open)}></AccountCircleIcon>

                {open && (
                    <div className="dropdown-menu">
                        <ul>
                            <li>Profile</li>
                            <li>Logout</li>
                        </ul>
                        
                        
                        
                    </div>
                ) }

            </div>
            


        </nav>
    );

    
}


export default Navbar
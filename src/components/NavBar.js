import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <React.Fragment>
            <div>
                <h1 className='text-center'>Welcome to Employee Management System!</h1>
                <Link className="btn btn-info" to={"/ViewEmployee"}>View Employees</Link>
                <Link className="btn btn-secondary" to={"/AddEmployee"}>Add Employee</Link>
                <hr/>
            </div>
        </React.Fragment>
    )
}
export default NavBar;
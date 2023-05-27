import React,{ useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function ViewEmployee(){

    let getUrl="http://localhost:8080/api/GetEmployees"
    let deleteUrl="http://localhost:8080/api/DeleteEmployee/"

    const [employeeData, setEmployeeData] =useState([]);

    const fetchEmployees=(e)=>{
        Axios.get(getUrl)
        .then(res=>{console.log(res.data);
                    setEmployeeData(res.data)})
        .catch(err=>{console.log(err)})
    };

    const DeleteEmployee=(id)=>{
        Axios.delete(deleteUrl+id)
        .then(res=>fetchEmployees())
    };

    useEffect(()=>{
        fetchEmployees();
    },[]);

    return(
        <React.Fragment>
            <br/><br/>
            <div className="container card col-md-6 mx-auto">
                <h1>View Employees</h1>
                <span className="col-md-3"><Link to={"/AddEmployee"}>
                    <button className="btn btn-success">Add Employee</button>
                    </Link>
                </span>
                <hr/>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>State</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.map(ed=>{return(
                            <tr key={ed.id}>
                                <td>{ed.id}</td>
                                <td>{ed.name}</td>
                                <td>{ed.gender}</td>
                                <td>{ed.age}</td>
                                <td>{ed.state}</td>
                                <td>
                                    <Link className="btn btn-warning" to={"/EditEmployee/"+ed.id}>Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{DeleteEmployee(ed.id)}}>Delete</button>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
export default ViewEmployee;
import React,{ useState } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function AddEmployee(){
    const navigate = useNavigate();

    let postUrl="http://localhost:8080/api/AddEmployee"

    const [newEmployee, setNewEmployee] =useState({
        id:"",
        name:"",
        gender:"",
        age:"",
        state:""
    });

    const handleChange=(e)=>{
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        Axios.post(postUrl,newEmployee)
        .then(res=>{console.log(res.data);
                    navigate('/ViewEmployee')})
        .catch(err=>{console.log(err)})
    }

    return(
        <React.Fragment>
            <br/><br/>
            <div className="container card col-md-4 mx-auto">
                <h1>Add Employee</h1><hr/>
                <form className="form-group" onSubmit={(e)=>{handleSubmit(e)}}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={newEmployee.name} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" id="gender" name="gender" value={newEmployee.gender} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={newEmployee.age} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" name="state" value={newEmployee.state} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <br/>
                    <button type="submit" className="btn btn-success">Add</button>
                    <Link className="btn btn-primary" to={"/ViewEmployee"}>Cancel</Link>
                </form>
                <br/>
            </div>
        </React.Fragment>
    )
}
export default AddEmployee;
import React,{ useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditEmployee(){
    const navigate = useNavigate();

    const {id} = useParams();

    let getUrl="http://localhost:8080/api/GetEmployee/"
    let putUrl="http://localhost:8080/api/EditEmployee/"

    const [employeeData, setEmployeeData] = useState({
        name:"",
        gender:"",
        age:"",
        state:""
    });

    const handleChange=(e)=>{
        setEmployeeData({...employeeData,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        Axios.put(putUrl+id,employeeData)
        .then(res=>{console.log(res.data);
                    navigate('/ViewEmployee')})
        .catch(err=>{console.log(err)})
    }

    useEffect(()=>{
        Axios.get(getUrl+id)
        .then(res=>{setEmployeeData(res.data)});
    },[]);
    
    return(
        <React.Fragment>
            <br/><br/>
            <div className="container card col-md-4 mx-auto">
                <h1>Edit Employee No. {id}</h1><hr/>
                <form className="form-group" onSubmit={(e)=>handleSubmit(e)}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={employeeData.name} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" id="gender" name="gender" value={employeeData.gender} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={employeeData.age} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" name="state" value={employeeData.state} className="form-control" onChange={(e)=>{handleChange(e)}}/>
                    <br/>
                    <button type="submit" className="btn btn-warning">Update</button>
                    <Link className="btn btn-primary" to={"/ViewEmployee"}>Cancel</Link>
                </form>
                <br/>
            </div>
        </React.Fragment>
    )
}
export default EditEmployee;
import React from "react";
import { Navigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import dept_name_array from "./Deptnamesarray"
import Footer from "./Footer";
import dept_name_arraybs from "./deptnamearratbs";
function Mid(props)
{
    return (
        <>
        <div id="Midtop" ><h4 style={{marginTop:"20px"}} className=" sm:m-10 sm:font-bold text-1xl mt-5 font-bold font-serif" >BE(Bachelor Engineering) Departments</h4></div>
        <div id="Mid" >
        <Link to='/Test' ><button>{dept_name_array[0]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[1]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[2]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[3]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[4]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[5]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[6]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[7]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[8]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[9]}</button></Link>
        <Link to='/Test' ><button>{dept_name_array[10]}</button></Link>
         
        </div>

        <div id="Midtop"   ><h4 style={{marginTop:"20px"}}  className=" sm:font-bold text-1xl mt-5 font-bold font-serif" >BS(Bachelor SCIENCE) Departments</h4></div>


       <div id="Mid2">
       <Link to='/Test' ><button>{dept_name_arraybs[0]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[1]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[2]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[3]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[4]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[5]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[6]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[7]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[8]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[9]}</button></Link>
       <Link to='/Test' ><button>{dept_name_arraybs[10]}</button></Link>
        
      
       </div>


    
        </>
    )
}
export default Mid
import React, { useContext } from "react";
import But from "./But";
import { createContext } from 'react';
import Subjects from "./subjects21sofware1stsemester";
import { Link } from "react-router-dom";

const First = createContext();


function Semester ()
{
   
     
    return(

        <>
     
       
       
            <Link to='/Subjects' ><But name = {"1st Semester"}></But></Link>
            <Link to='/Subjects2' ><But name = {"2nd Semester"}></But></Link>
            <Link to='/Subjects' ><But name = {"3rd Semester"}></But></Link>
            <Link to='/Subjects' ><But name = {"4th Semester"}></But></Link>
           

            
      


        </>
    )
}
export {Semester}
export {First}
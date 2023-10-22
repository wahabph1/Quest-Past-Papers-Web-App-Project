import React, { useContext } from "react";
import But from "./But";
import { createContext } from 'react';
import { Subjects22Semester1 } from "./subjects21sofware1stsemester";
import { Subjects22Semester2 } from "./subjects21sofware1stsemester";
import { Link } from "react-router-dom";
import Head from './Header';
import Footer from './Footer';
const First = createContext();


function SoftwareSemesters22 ()
{
   
     
    return(

        <>
                 
        <Head></Head>
       
       <div id="Mid" >
       
            <Link to='/Subjects22Semester1' ><But name = {"1st Semester"}></But></Link>
            <Link to='/Subjects22Semester2' ><But name = {"2nd Semester"}></But></Link>
            </div>
           
           
<Footer></Footer>
            
      


        </>
    )
}
export default SoftwareSemesters22
import React, { useContext } from "react";
import But from "./But";
import { createContext } from 'react';
import Subjects from "./subjects21sofware1stsemester";
import { Subjects20Semester1 } from './subjects21sofware1stsemester';
import { Subjects20Semester2 } from './subjects21sofware1stsemester';
import { Subjects20Semester3 } from './subjects21sofware1stsemester';
import { Subjects20Semester4 } from './subjects21sofware1stsemester';
import { Subjects20Semester5 } from './subjects21sofware1stsemester';
import { Subjects20Semester6 } from './subjects21sofware1stsemester';
import { Link } from "react-router-dom";
import Head from './Header';
import Footer from './Footer';
const First = createContext();


function SoftwareSemesters20()
{
   
     
    return(

        <>
     <Head></Head>
       
     <div id="Mid" >
     
    
            <Link to='/Subjects20Semester1' ><But name = {"1st Semester"}></But></Link>
            <Link to='/Subjects20Semester2' ><But name = {"2nd Semester"}></But></Link>
            
            <Link to='/Subjects20Semester3' ><But name = {"3rd Semester"}></But></Link>
            <Link to='/Subjects20Semester4' ><But name = {"4th Semester"}></But></Link>
            
            <Link to='/Subjects20Semester5' ><But name = {"5th Semester"}></But></Link>
            <Link to='/Subjects20Semester6' ><But name = {"6h Semester"}></But></Link>
            <Footer></Footer>
           
            </div>
           

            
      


        </>
    )
}
export default SoftwareSemesters20
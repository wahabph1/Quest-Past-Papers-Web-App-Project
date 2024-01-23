import React, { useContext } from "react";
import But from "./But";
import { createContext } from 'react';
import {Subjects } from "./subjects21sofware1stsemester";
import {Subjects2ndsemester} from "./subjects21sofware1stsemester";


import Head from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import arr from "./name";
const First = createContext();


function SoftwareSemesters21 ()
{
   
     
    return(

        <>
    
        <Head></Head>
        <div id="Mid" >
         
            <Link to='/Subjects' ><But name = {"1st Semester"}></But></Link>
            <Link to='/Subjects2'><But name = {"2nd Semester"}></But></Link>
            <Link to='/Subjects3' ><But name = {"3rd Semester"}></But></Link>
            <Link to='/Subjects4' ><But name = {"4th Semester"}></But></Link>
            <Link to='/Subjects4' ><But name = {"5th Semester"}></But></Link>
            </div>
           

            <Footer></Footer>

            
      


        </>
    )
}
export default SoftwareSemesters21
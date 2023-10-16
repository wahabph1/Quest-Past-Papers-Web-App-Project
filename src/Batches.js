import React from "react";
import Head from './Header';
import Footer from './Footer';
import Mid from './Mid';
import { Link } from "react-router-dom";
import { Semester22,Semester21 } from "./Semester";

function Batches()
{
    return (
        
        <>
        <Head></Head>
       <div id="Mid">
        <Link to='/Semester' ><button  >22 Batch</button></Link>
        <Link to='/Semester21' ><button  >21 Batch</button></Link>
        <Link to='/Semester20' ><button  >20 Batch</button></Link>
        <Link to='/Semester19' ><button  >19 Batch</button></Link>
       </div>
        </>
    )
}
export default Batches
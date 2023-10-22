import React from "react";
import Head from './Header';
import Footer from './Footer';
import But from "./But";
import Mid from './Mid';
import { Link } from "react-router-dom";
import Batches from "./SoftwareBatches";
import { ComputerSystemEngineeringBatches } from "./SoftwareBatches";
import { CivilEngineeringBatches } from "./SoftwareBatches";
import { ChemicalEngineeringBatches } from "./SoftwareBatches";
import { TelecomunicationEngineeringBatches } from "./SoftwareBatches";
import { ElectricalEngineeringBatches } from "./SoftwareBatches";
import { ElectronicsEngineeringBatches } from "./SoftwareBatches";
import { EnviromentalEngineeringBatches } from "./SoftwareBatches";
import { EnergySystemEngineeringBatches } from "./SoftwareBatches";
import { MechanicalEngineeringBatches } from "./SoftwareBatches";
import { AutomationControlEngineeringBatches } from "./SoftwareBatches";
import dept_name_array from "./Deptnamesarray";
import dept_name_arraybs from "./deptnamearratbs";
function Home ()
{
    

    return (
        <>
    
        <Head></Head>
        <div id="Midtop" ><h4 style={{marginTop:"20px"}} className=" sm:m-10 sm:font-bold text-1xl mt-5 font-bold font-serif" >BE(Bachelor Engineering) Departments</h4></div>

        <div id="Mid" >
         
        <Link to='/Batches' ><But name ={dept_name_array[0]} ></But></Link>
        <Link to='/ComputerSystemEngineeringBatches ' ><But name ={dept_name_array[1]} ></But></Link>
        <Link to='/CivilEngineeringBatches'><But name ={dept_name_array[2]} ></But></Link>
        <Link to='/ChemicalEngineeringBatches'><But name ={dept_name_array[3]} ></But></Link>
        <Link to='/MechanicalEngineeringBatches' ><But name ={dept_name_array[4]} ></But></Link>
        <Link to='/ElectricalEngineeringBatches' ><But name ={dept_name_array[5]} ></But></Link>
        <Link to='/ElectronicsEngineeringBatches' ><But name ={dept_name_array[6]} ></But></Link>
        <Link to='/TelecomunicationEngineeringBatches' ><But name ={dept_name_array[7]} ></But></Link>
        <Link to='/AutomationControlEngineeringBatches ' ><But name ={dept_name_array[8]} ></But></Link>
        <Link to='/EnviromentalEngineeringBatches' ><But name ={dept_name_array[9]} ></But></Link>
        <Link to='/EnergySystemEngineeringBatches ' ><But name ={dept_name_array[10]} ></But></Link>

       
        
        </div>
        <div id="Midtop"   ><h4 style={{marginTop:"20px"}}  className=" sm:font-bold text-1xl mt-5 font-bold font-serif" >BS(Bachelor SCIENCE) Departments</h4></div>


        <div id="Mid2">
     

        <Link to='/Batches' ><But name ={dept_name_arraybs [0]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs [1]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs[2]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs[3]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs[4]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs[5]} ></But></Link>
        <Link to='/Batches' ><But name ={dept_name_arraybs [6]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_array [7]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs[8]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs[9]} ></But></Link>
        <Link to='/Footer' ><But name ={dept_name_arraybs[10]} ></But></Link>

        
      
        </div>

        <Footer></Footer>
     

        </>
    )
}
export default Home
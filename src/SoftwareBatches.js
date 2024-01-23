import React from "react";
import But from "./But";
import Semester from "./Semester";
import { Link } from "react-router-dom";
import Head from "./Header";
import Footer from "./Footer";
import { ComputerSystemEngineering22Semesters } from "./AllDeptSemestersList";
import { ComputerSystemEngineering21Semesters } from "./AllDeptSemestersList";
import { ComputerSystemEngineering20Semesters } from "./AllDeptSemestersList";
import { CivilEngineering20Semesters } from "./AllDeptSemestersList";
import { CivilEngineering21Semesters } from "./AllDeptSemestersList";
import { CivilEngineering22Semesters } from "./AllDeptSemestersList";


function Batches() {


    return (

        <> <Head></Head>
            <div id="Mid" >
                <Link to='/SoftwareSemesters23' > <But name={"23 Batch"}></But></Link>
                <Link to='/SoftwareSemesters22' > <But name={"22 Batch"}></But></Link>
                <Link to='/SoftwareSemesters21' > <But name={"21 Batch"}></But></Link>
                <Link to='/SoftwareSemesters20' > <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Batches

export function ComputerSystemEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/ComputerSystemEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/ComputerSystemEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/ComputerSystemEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}


export function CivilEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/CivilEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/CivilEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/CivilEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}


export function ChemicalEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/ChemicalEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/ChemicalEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/ChemicalEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}

export function MechanicalEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/MechanicalEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/MechanicalEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/MechanicalEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}


export function ElectricalEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/ElectricalEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/ElectricalEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/ElectricalEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}


export function ElectronicsEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/ElectronicsEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/ElectronicsEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/ElectronicsEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}


export function TelecomunicationEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/TelecomunicationEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/TelecomunicationEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/TelecomunicationEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}

export function AutomationControlEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/AutomationcControlEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/AutomationcControlEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/AutomationcControlEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}

export function EnviromentalEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/EnviromentalEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/EnviromentalEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/EnviromentalEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}


export function EnergySystemEngineeringBatches()
{
    return(
        <>
            <Head></Head>
            <div id="Mid" >
                <Link to='/EnergySystemEngineering22Semesters'> <But name={"22 Batch"}></But></Link>
                <Link to='/EnergySystemEngineering21Semesters'> <But name={"21 Batch"}></But></Link>
                <Link to='/EnergySystemEngineering20Semesters'> <But name={"20 Batch"}></But></Link>
            </div>
            <Footer></Footer>
        
        </>
    )
}
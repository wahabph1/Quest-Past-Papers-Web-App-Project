import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Head from './Header';
import Footer from './Footer';
import Home from './Home';
import Batches from './SoftwareBatches';
import { Semester } from './Semester';
import {Subjects2} from './subjects21sofware1stsemester';
import { Subjects } from './subjects21sofware1stsemester';
import { Subjects3 } from './subjects21sofware1stsemester';
import { Subjects4 } from './subjects21sofware1stsemester';
import { Subjects22Semester1 } from './subjects21sofware1stsemester';
import { Subjects22Semester2 } from './subjects21sofware1stsemester';
import SoftwareSemesters22 from './22SoftwareSemesters';
import SoftwareSemesters21 from './21SoftwareSemesters';
import SoftwareSemesters20 from './20SoftwareSemesters';
import { Subjects20Semester1 } from './subjects21sofware1stsemester';
import { Subjects20Semester2 } from './subjects21sofware1stsemester';
import { Subjects20Semester3 } from './subjects21sofware1stsemester';
import { Subjects20Semester4 } from './subjects21sofware1stsemester';
import { Subjects20Semester5 } from './subjects21sofware1stsemester';
import { Subjects20Semester6 } from './subjects21sofware1stsemester';
import { ComputerSystemEngineeringBatches } from './SoftwareBatches';
import { CivilEngineeringBatches } from './SoftwareBatches';
import { ChemicalEngineeringBatches } from "./SoftwareBatches";
import { TelecomunicationEngineeringBatches } from "./SoftwareBatches";
import { ElectricalEngineeringBatches } from "./SoftwareBatches";
import { ElectronicsEngineeringBatches } from "./SoftwareBatches";
import { EnviromentalEngineeringBatches } from "./SoftwareBatches";
import { EnergySystemEngineeringBatches } from "./SoftwareBatches";
import { MechanicalEngineeringBatches } from "./SoftwareBatches";
import { AutomationControlEngineeringBatches } from "./SoftwareBatches";
import { ComputerSystemEngineering22Semesters } from "./AllDeptSemestersList";
import { ComputerSystemEngineering21Semesters } from "./AllDeptSemestersList";
import { ComputerSystemEngineering20Semesters } from "./AllDeptSemestersList";
import { ElectricalEngineering20Semesters } from './AllDeptSemestersList';
import { ElectricalEngineering21Semesters } from './AllDeptSemestersList';
import { ElectricalEngineering22Semesters } from './AllDeptSemestersList';
import { CivilEngineering20Semesters } from "./AllDeptSemestersList";
import { CivilEngineering21Semesters } from "./AllDeptSemestersList";
import { CivilEngineering22Semesters } from "./AllDeptSemestersList";

import { ChemicalEngineering20Semesters } from "./AllDeptSemestersList";
import { ChemicalEngineering21Semesters } from "./AllDeptSemestersList";
import { ChemicalEngineering22Semesters } from "./AllDeptSemestersList";

import { MechanicalEngineering20Semesters } from "./AllDeptSemestersList";
import { MechanicalEngineering21Semesters } from "./AllDeptSemestersList";
import { MechanicalEngineering22Semesters } from "./AllDeptSemestersList";

import { ElectronicsEngineering20Semesters } from "./AllDeptSemestersList";
import { ElectronicsEngineering21Semesters } from "./AllDeptSemestersList";
import { ElectronicsEngineering22Semesters } from "./AllDeptSemestersList";

import { TelecomunicationEngineering20Semesters } from "./AllDeptSemestersList";
import { TelecomunicationEngineering21Semesters } from "./AllDeptSemestersList";
import { TelecomunicationEngineering22Semesters } from "./AllDeptSemestersList";


import { AutomationControlEngineering20Semesters } from "./AllDeptSemestersList";
import { AutomationControlEngineering21Semesters } from "./AllDeptSemestersList";
import { AutomationControlEngineering22Semesters } from "./AllDeptSemestersList";

import { EnviromentalEngineering20Semesters } from "./AllDeptSemestersList";
import { EnviromentalEngineering21Semesters } from "./AllDeptSemestersList";
import { EnviromentalEngineering22Semesters } from "./AllDeptSemestersList";


import { EnergySystemEngineering20Semesters } from "./AllDeptSemestersList";
import { EnergySystemEngineering21Semesters } from "./AllDeptSemestersList";
import { EnergySystemEngineering22Semesters } from "./AllDeptSemestersList";

function App() {
  return (
    <BrowserRouter>
      <>

        <Routes>
        //  impot Bathces here
        <Route path='/' element = {<Home></Home>} / >
        <Route path='/Batches' element = {<Batches></Batches>} / >
        <Route path='/ComputerSystemEngineeringBatches' Component = {ComputerSystemEngineeringBatches} / >
        <Route path='/CivilEngineeringBatches' Component = {CivilEngineeringBatches} / >
        <Route path='/MechanicalEngineeringBatches' Component = {MechanicalEngineeringBatches} / >
        <Route path='/AutomationControlEngineeringBatches' Component = { AutomationControlEngineeringBatches} / >
        <Route path='/EnergySystemEngineeringBatches' Component = { EnergySystemEngineeringBatches} / >
        <Route path='/EnviromentalEngineeringBatches' Component = { EnviromentalEngineeringBatches} / >
        <Route path='/ElectronicsEngineeringBatches' Component = { ElectronicsEngineeringBatches} / >
        <Route path='/ElectricalEngineeringBatches' Component = { ElectricalEngineeringBatches} / >
        <Route path='/TelecomunicationEngineeringBatches' Component = { ElectronicsEngineeringBatches} / >
        <Route path='/ChemicalEngineeringBatches' Component = { ChemicalEngineeringBatches} / >



  
        <Route path='/ComputerSystemEngineering22Semesters' Component = {ComputerSystemEngineering22Semesters} / >
        <Route path='/ComputerSystemEngineering21Semesters' Component = {ComputerSystemEngineering21Semesters} / >
        <Route path='/ComputerSystemEngineering20Semesters' Component = {ComputerSystemEngineering20Semesters} / >
        <Route path='/CivilEngineering20Semesters' Component = {CivilEngineering20Semesters} / >
        <Route path='/CivilEngineering21Semesters' Component = {CivilEngineering21Semesters} / >
        <Route path='/CivilEngineering22Semesters' Component = {CivilEngineering22Semesters} / >



        <Route path='/ElectricalEngineering20Semesters' Component = {ElectricalEngineering20Semesters} / >
        <Route path='/ElectricalEngineering21Semesters' Component = {ElectricalEngineering21Semesters} / >
        <Route path='/ElectricalEngineering22Semesters' Component = {ElectricalEngineering22Semesters} />

        <Route path='/ChemicalEngineering20Semesters' Component = {ChemicalEngineering20Semesters} / >
        <Route path='/ChemicalEngineering21Semesters' Component = {ChemicalEngineering21Semesters} / >
        <Route path='/ChemicalEngineering22Semesters' Component = {ChemicalEngineering22Semesters} / >
      

        <Route path='/MechanicalEngineering20Semesters' Component = {MechanicalEngineering20Semesters} / >
        <Route path='/MechanicalEngineering21Semesters' Component = {MechanicalEngineering21Semesters} / >
        <Route path='/MechanicalEngineering22Semesters' Component = {MechanicalEngineering22Semesters} / >


        <Route path='/ElectronicsEngineering20Semesters' Component = {ElectronicsEngineering20Semesters} / >
        <Route path='/ElectronicsEngineering21Semesters' Component = {ElectronicsEngineering21Semesters} / >
        <Route path='/ElectronicsEngineering22Semesters' Component = {ElectronicsEngineering22Semesters} / >


        <Route path='/AutomationcControlEngineering22Semesters' Component = {AutomationControlEngineering22Semesters} / >
        <Route path='/AutomationcControlEngineering21Semesters' Component = {AutomationControlEngineering21Semesters} / >
        <Route path='/AutomationcControlEngineering20Semesters' Component = {AutomationControlEngineering20Semesters} / >
        
        <Route path='/TelecomunicationEngineering20Semesters' Component = {TelecomunicationEngineering20Semesters} / >
        <Route path='/TelecomunicationEngineering21Semesters' Component = {TelecomunicationEngineering21Semesters} / >
        <Route path='/TelecomunicationEngineering22Semesters' Component = {TelecomunicationEngineering22Semesters} / >


        <Route path='/EnviromentalEngineering20Semesters' Component = {EnviromentalEngineering20Semesters} / >
        <Route path='/EnviromentalEngineering21Semesters' Component = {EnviromentalEngineering21Semesters} / >
        <Route path='/EnviromentalEngineering22Semesters' Component = {EnviromentalEngineering22Semesters} / >

        
        <Route path='/EnergySystemEngineering20Semesters' Component = {EnergySystemEngineering20Semesters} / >
        <Route path='/EnergySystemEngineering21Semesters' Component = {EnergySystemEngineering21Semesters} / >
        <Route path='/EnergySystemEngineering22Semesters' Component = {EnergySystemEngineering22Semesters} / >







          //  import Semester subjects here
        <Route path='/Semester' element = {<Semester></Semester>} / >

        
        <Route path='/Subjects' Component = {Subjects} / >
        <Route path='/Subjects2' Component = {Subjects2} / >
        <Route path='/Subjects3' Component = {Subjects3} / >
        <Route path='/Subjects4' Component = {Subjects4} / >





        <Route path='/Subjects22Semester2' Component = {Subjects22Semester2} / >
        <Route path='/Subjects22Semester1' Component = {Subjects22Semester1} / >


        <Route path='/Subjects20Semester1' Component = {Subjects20Semester1} / >
        <Route path='/Subjects20Semester2' Component = {Subjects20Semester2} / >
        <Route path='/Subjects20Semester3' Component = {Subjects20Semester3} / >
        <Route path='/Subjects20Semester4' Component = {Subjects20Semester4} / >
        <Route path='/Subjects20Semester5' Component = {Subjects20Semester5} / >
        <Route path='/Subjects20Semester6' Component = {Subjects20Semester6} / >

        









        <Route path='/SoftwareSemesters22' element = {<SoftwareSemesters22></ SoftwareSemesters22>} / >
        <Route path='/SoftwareSemesters21' element = {<SoftwareSemesters21></ SoftwareSemesters21>} / >
        <Route path='/SoftwareSemesters20' element = {<SoftwareSemesters20></ SoftwareSemesters20>} / >
        
        
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

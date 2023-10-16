import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Head from './Header';
import Footer from './Footer';
import Mid from './Mid';
import Test from './Test';
import Home from './Home';

import Semester22 from './Semester';
import Semester21 from './Semesters21';
import Semester20 from './Semester20';
import Semester19 from './Semester19';

function App() {
  return (
    <BrowserRouter>
      <>

        <Routes>
        
        <Route path='/' element = {<Home></Home>} / >
        <Route path='/Test' element = {<Test></Test>} / >
        <Route path='/Semester' element = {<Semester22></Semester22>} / >
        <Route  path='/Semester21' element = {<Semester21></Semester21>} / >
        <Route  path='/Semester20' element = {<Semester20></Semester20>} / >
        <Route  path='/Semester19' element = {<Semester19></Semester19>} / >
        
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

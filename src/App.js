import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ViewEmployee from './components/ViewEmployee';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Navigate to="/ViewEmployee"/>}/>
          <Route exact path='/AddEmployee' element={<AddEmployee/>}/>
          <Route exact path='/EditEmployee/:id' element={<EditEmployee/>}/>
          <Route exact path='/ViewEmployee' element={<ViewEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;

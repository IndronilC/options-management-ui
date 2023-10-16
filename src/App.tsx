import React from 'react';
  import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidenav from './shared/Sidenav';
import Optionkey from './components/Optionkey';
import Optionlookup from './components/Optionlookup';
import Createoptionkey from './components/Createoptionkey';
import Createoptionlookup from './components/Createoptionlookup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

function AppRoutes() {
  
  return (
    //validating based on the location the screens will be displayed
    <>
      <Sidenav/>
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/" element={<Optionkey />} />
        <Route path="optionlookup" element={<Optionlookup />} />
        <Route path="createoptionkey" element={<Createoptionkey/>}/>
        <Route path="createoptionlookup" element={<Createoptionlookup/>}/>

      </Routes>
    
    </>
  );

}

export default App;

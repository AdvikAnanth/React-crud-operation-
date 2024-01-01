import React from 'react';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="main">
      Crud operation
     <BrowserRouter>
     <Routes>
     <Route exact path='/Create' element={<Create />}/>
     <Route exact path='/Read' element={<Read />}/>
     <Route exact path='/Update' element={<Update />}/>
     </Routes>
     </BrowserRouter> 
      
    </div>
  );
}

export default App;

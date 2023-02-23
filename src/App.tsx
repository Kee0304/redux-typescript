import React from 'react';
import {Routes, Route} from "react-router-dom"

import Users from './pages/Users/Users';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='RouteSelectors'>

      </div>
      <div className='Routes'>
        <Routes>
          <Route path="/userlist" element={<Users/>}/>   
          {/* <Route path="/todo" element={<Todo/>}/>  */}  
        </Routes>
      
      </div>
    </div>
  );
}

export default App;

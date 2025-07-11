import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Userdata from './Userdata';
import Navbar from './Navbar';
import Editstu from './Editstu';


const App = () => {
  return (
    <>

      <Router>

        <Navbar/>

        <Routes>

          
          <Route path='/' element={<Home/>} />
          <Route path='/userdata' element={<Userdata />} />
          <Route path='/edit/:id' element={<Editstu/>} />
          <Route path='*' element={<Home />} />


        </Routes>



      </Router>


    </>
  )
}

export default App

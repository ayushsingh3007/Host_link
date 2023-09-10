import React from "react"; 
import { Home } from "./Home";
import {Student} from "./Student"
import {Contact} from "./Contact"

import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';
function Navbar(){
    return(
        <>
        
        <BrowserRouter basename="/react-dummy">
        <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/student">Student</Link>
        <Link to="/contact">Contact</Link>
        
        </div>

        <Routes>
            <Route path='/student' element={<Student/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            
            


        </Routes>
        
        </BrowserRouter>
        
        </>
    )
}
export default Navbar;
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
// import { useNavigate } from "react-router-dom"

export const Student=()=>{
    const [data]=useState([
        {name:"ayush singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Ramesh singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Suresh singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Adarsh singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Deepak singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Gaurav singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Aman singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Ujjwal singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
        {name:"Vishal singh",batch:"EA24",Course:"MERN",Contact:"Edit"},
    ])





    
    return(
        <>

        
        <button id="btn-1">add user</button>

        <table >
            <thead>
                <tr>
                    <th>NAME </th>
                    <th>BATCH</th>
                    <th>COURSE</th>
                    <th>CONTACT</th>
                </tr>
            </thead>

        {data.map((item,index)=>{
            return(
            <tbody>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.batch}</td>
                    <td>{item.Course}</td>
                    <td><NavLink>{item.Contact}</NavLink></td>
                    
                    
                </tr>
            </tbody>)
        }
        )}

</table>






        
        </>
    )
}
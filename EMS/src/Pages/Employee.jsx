import { useEffect } from "react";
import { useState } from "react";

export const Employee=()=>{
    // const [employee, setEmployee]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/employeesnpx')
        .then((Response)=>Response.json())
        .then((data)=>{console.log(data)})
    },[])
    return(
        <>
        <h1>Employee</h1>

        </>
    )
}
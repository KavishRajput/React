import { NavLink } from "react-router-dom"

export const Navlist=()=>{
    const ul={
        display:"flex",
    }
    const li={
        listStyle:"none",
        fontFamily:"math",
        marginInline:"10px",
        fontSize:"22px"
        
    }
    return(
        <>
        <ul style={ul}>
            <li style={li}><NavLink to={"/"}>Home</NavLink></li>
            <li style={li}><NavLink to={"/about"}>About</NavLink></li>
            <li style={li}><NavLink to={"/services"} >Services</NavLink></li>
            <li style={li}><NavLink to={"/contact"} >Contact</NavLink></li>
        </ul>
        </>
    )
}
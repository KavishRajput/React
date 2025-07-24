import { NavLink } from "react-router"
import { Searchbar } from "./Inputs"

export const Navbar=()=>{
    return(
        <>
        <div className="bg-gray-900 flex items-center justify-around py-2 ">
            <img src="..\src\images\Logo.png" alt="LOGO" />
            <ul className="text-white text-lg flex items-center justify-around capitalize w-100">
                <li className="hover:underline cursor-pointer text-lime-300 "><NavLink to={"/"}>home</NavLink></li>
                <li className="hover:underline cursor-pointer hover:text-lime-300 "><NavLink to={"/about"}>about</NavLink></li>
                <li className="hover:underline cursor-pointer hover:text-lime-300 "><NavLink to={"/services"}>services</NavLink></li>
                <li className="hover:underline cursor-pointer hover:text-lime-300 "><NavLink to={"/contacts"}>contacts</NavLink></li>
                <li className="hover:underline cursor-pointer hover:text-lime-300 "><NavLink to={"/help"}>help</NavLink></li>
            </ul>
            <Searchbar />
        </div>

        </>
    )
}
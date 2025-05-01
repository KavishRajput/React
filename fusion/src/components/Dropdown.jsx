import { NavLink } from "react-router"
import { useContext } from "react"
import { CartContext } from "../utills/Context/CartContext"

export const Profile=()=>{
    const{logout,auth}=useContext(CartContext)
    return (
        <>
        <ol className="flex justify-center flex-col text-xl absolute mt-5 text-center end-28 cursor-pointer">
            <li className="hover:bg-gray-200 py-2 px-4 bg-white border-2 border-black" ><NavLink to={"/login"}>LogIn</NavLink></li>
            <li className="hover:bg-gray-200 py-2 px-4 bg-white border-2 border-black border-y"><NavLink to={"/signin"}>SignIn</NavLink></li>
            <li className="hover:bg-gray-200 py-2 px-4 bg-white border-2 border-black"><NavLink to={"help"}>Get help</NavLink></li>
            {auth && <li className="hover:bg-gray-200 py-2 px-4 bg-white border-2 border-black" onClick={()=>logout()}>Logout</li>}
        </ol>
        </>
    )
}
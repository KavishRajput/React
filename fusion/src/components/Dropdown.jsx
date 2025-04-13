import { NavLink } from "react-router"

export const Profile=()=>{
    return (
        <>
        <ol className="flex justify-center flex-col text-xl absolute mt-15 text-center end-31 cursor-pointer">
            <li className="hover:bg-gray-200 py-2 px-4 bg-white border-2 border-black" ><NavLink to={"/Login"}>Login</NavLink></li>
            <li className="hover:bg-gray-200 py-2 px-4 bg-white border-2 border-black border-y">SignIn</li>
            <li className="hover:bg-gray-200 py-2 px-4 bg-white border-2 border-black">Get Help</li>
        </ol>
        </>
    )
}
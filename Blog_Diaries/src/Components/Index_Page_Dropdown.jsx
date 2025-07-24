import { NavLink } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { account } from "../appwrite/Auth"
import { logout} from "../features/slice/authslice"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export const Index_Page_Dropdown = () =>{
    const dispatch =useDispatch()
    const {user,loggedin}=useSelector((state)=>state.auth)
    const navigate=useNavigate()


    const handleLogout = async () => {
  try {
    await account.deleteSession(user.$id);
    dispatch(logout());
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  } catch (error) {
    console.error("Error during logout", error);
    toast.error("Unable to logout");
  }
};



    return(
        <>
            <ul className="absolute right-2 top-17 w-30 bg-white border rounded shadow-lg">
        {
            loggedin && 
            <NavLink to="/profile">
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            </NavLink>
        }
        {
            loggedin && <li onClick={handleLogout} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
        }
        {
            !loggedin && 
            <NavLink to="/login">
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
            </NavLink>
        }
        {
            !loggedin &&
            <NavLink to="/signin">
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Signin</li>
            </NavLink>
        }
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
          </ul>
        </>
    )
}
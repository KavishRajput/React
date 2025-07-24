import { useForm } from "react-hook-form"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { NavLink } from "react-router";
import { account } from "../appwrite/Auth";
import { setUser } from "../features/slice/authslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
export const Login_Form=()=>{
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const dispatch = useDispatch();
    const navigate=useNavigate();


    const login=async(data,e)=>{
        e.preventDefault();
        try{
            const login_response = await account.createEmailPasswordSession(data.email,data.password)
            dispatch(setUser(login_response))
            localStorage.setItem("user",JSON.stringify(login_response))
            console.log("login_response",login_response)
            navigate(`/dashboard/${login_response.userId}`)
            }   
        catch(error){
        console.log("You are Already Logged In or .Error Occur While Login",error);
            }
            console.log("data",data)
            }
            
    return(
        <>
            <Navbar/>
            <form onSubmit={handleSubmit(login)} className="flex justify-center items-center h-screen">
                <div className="flex flex-col h-fit w-4/12 border-2 p-10 rounded relative bottom-17">
                <p className="text-2xl font-bold text-center">Login Form</p>
                {/* Email */} 
                <label className="mt-5" htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="border-2 rounded w-full py-2" {...register("email")}/>
                {/* password */}
                <label className="mt-3" htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="border-2 rounded py-2" {...register("password")}/>
                {/* submit */}
                <div className="flex justify-center items-center mt-5 gap-1">
                <button type="reset" className="py-2 w-2/4 border-2 rounded hover:bg-gray-100 mt-5">Reset</button>
                <button type="submit" className="py-2 w-2/4 border-2 rounded hover:bg-gray-100 mt-5">Login</button>
                </div>
                {/* Login */}

                <p className="mt-5">Already have an account <NavLink to="/signin" className="text-xl text-blue-500 text">Signin</NavLink></p>
                </div>
            </form>
            <Footer/>
        </>
    )
}

import { useForm } from "react-hook-form"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { NavLink } from "react-router";
import { ID } from "appwrite";
import { account,databases } from "../appwrite/Auth";
import Config from "../Config/Config";
import { useNavigate } from "react-router";
export const Signin_Form=()=>{
    const{databaseID,usercollectionID}=Config;
    const {register,handleSubmit} = useForm();
    const navigate=useNavigate();

    const Signin=async (data,e)=>{
        e.preventDefault()
        try{
            const user = await account.create(ID.unique(),data.email,data.password,data.name)
            console.log("user",user)
            const singin_response = await databases.createDocument(
                databaseID,
                usercollectionID,
                ID.unique(),
                {
                    Email:data.email,
                    Name:data.name,
                    UserID:user.$id
                }
            )
            console.log("singin_response",singin_response)
            navigate("/login")
        }
        catch(error){
            console.log("Error Occur While Signin",error)
        }
        console.log("data",data)
    }
    return(
        <>
            <Navbar/>
            <form onSubmit={handleSubmit(Signin)} className="flex justify-center items-center h-screen">
                <div className="flex flex-col h-fit w-5/12 border-2 p-10 rounded relative bottom-17">
                <p className="text-2xl font-bold text-center">Signin Form</p>
                {/* FullName */}
                <label className="mt-5" htmlFor="text">Name</label>
                <input type="name" name="name" id="name" className="border-2 rounded w-full py-2" {...register("name")}/>
                {/* Email */} 
                <label className="mt-3" htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="border-2 rounded w-full py-2" {...register("email")}/>
                {/* password */}
                <label className="mt-3" htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="border-2 rounded py-2" {...register("password")}/>
                {/* submit */}
                <div className="flex justify-center items-center mt-5 gap-1">
                <button type="singin_responseet" className="py-2 w-2/4 border-2 rounded hover:bg-gray-100 mt-5">reset</button>
                <button type="submit" className="py-2 w-2/4 border-2 rounded hover:bg-gray-100 mt-5">Signin</button>
                </div>

                {/* Login */}

                <p className="mt-5">Already have an account <NavLink to="/login" className="text-xl text-blue-500 text">Login</NavLink></p>
                </div>
            </form>
            <Footer/>
        </>
    )
}